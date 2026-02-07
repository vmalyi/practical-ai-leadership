"use client";

import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import { useEffect, useRef } from "react";

const DEFAULT_POSTHOG_KEY = "phc_8vaqqy1HdH46zgpioDjVq1rQb0yHaBGXMXOYKA16XsM";
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || DEFAULT_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
const POSTHOG_PROJECT_ID = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID;

const TRACKED_SECTION_IDS = [
  "hero",
  "problem",
  "blockers",
  "process",
  "investment-options",
  "about",
  "faq",
  "final-cta",
];

const BOOKING_HOSTS = new Set(["calendar.app.google", "calendar.google.com"]);

let isInitialized = false;

function normalizeHost(hostname: string): string {
  return hostname.replace(/^www\./i, "").toLowerCase();
}

function isBookingUrl(url: URL): boolean {
  return BOOKING_HOSTS.has(normalizeHost(url.hostname));
}

function getSectionId(element: Element): string {
  const section = element.closest("section[id]");
  if (section instanceof HTMLElement && section.id) {
    return section.id;
  }

  return "unknown";
}

function getLinkText(anchor: HTMLAnchorElement): string {
  const explicitLabel = anchor.dataset.phLabel?.trim();
  if (explicitLabel) {
    return explicitLabel;
  }

  return (anchor.textContent ?? "").trim();
}

function ensureInitialized(): boolean {
  if (isInitialized || typeof window === "undefined") {
    return isInitialized;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    cookieless_mode: "always",
    person_profiles: "identified_only",
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: true,
  });

  if (POSTHOG_PROJECT_ID) {
    posthog.register({
      posthog_project_id: POSTHOG_PROJECT_ID,
    });
  }

  isInitialized = true;
  return true;
}

export function PostHogTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!ensureInitialized()) {
      return;
    }

    const query = window.location.search.replace(/^\\?/, "");
    const path = query ? `${pathname}?${query}` : pathname;

    if (lastTrackedPath.current === path) {
      return;
    }

    lastTrackedPath.current = path;

    posthog.capture("$pageview", {
      $current_url: window.location.href,
      path,
    });
  }, [pathname]);

  useEffect(() => {
    if (!ensureInitialized()) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) {
        return;
      }

      const section = getSectionId(anchor);
      const buttonText = getLinkText(anchor);

      if (rawHref.startsWith("#")) {
        if (
          rawHref === "#investment-options" ||
          anchor.dataset.phCta === "primary"
        ) {
          posthog.capture("cta_clicked", {
            button_text: buttonText,
            target: rawHref,
            page_section: section,
          });
        }

        return;
      }

      let destination: URL;
      try {
        destination = new URL(anchor.href);
      } catch {
        return;
      }

      if (destination.protocol === "mailto:") {
        posthog.capture("contact_email_clicked", {
          destination: destination.href,
          page_section: section,
        });
        return;
      }

      if (isBookingUrl(destination)) {
        posthog.capture("booking_cta_clicked", {
          button_text: buttonText,
          href: destination.href,
          page_section: section,
          tier_name: anchor.dataset.phBookingTier,
          tier_cta: anchor.dataset.phBookingCta,
        });
        return;
      }

      const currentHost = normalizeHost(window.location.hostname);
      const destinationHost = normalizeHost(destination.hostname);
      if (destinationHost !== currentHost) {
        posthog.capture("external_link_clicked", {
          destination: destination.href,
          link_text: buttonText,
          domain: destination.hostname,
          page_section: section,
        });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (!ensureInitialized() || typeof IntersectionObserver === "undefined") {
      return;
    }

    const seen = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.5) {
            continue;
          }

          const sectionId = (entry.target as HTMLElement).id;
          if (!sectionId || seen.has(sectionId)) {
            continue;
          }

          seen.add(sectionId);
          posthog.capture("section_viewed", {
            section: sectionId,
            path: pathname,
          });
        }
      },
      {
        threshold: 0.5,
      },
    );

    for (const sectionId of TRACKED_SECTION_IDS) {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
