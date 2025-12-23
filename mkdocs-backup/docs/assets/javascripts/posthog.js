// PostHog Analytics - Cookie-free tracking
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

// Initialize PostHog (same project as vmalyi.com for unified funnel tracking)
posthog.init('phc_8vaqqy1HdH46zgpioDjVq1rQb0yHaBGXMXOYKA16XsM', {
  api_host: 'https://eu.i.posthog.com',
  cookieless_mode: 'always',
  person_profiles: 'identified_only',
  autocapture: false,
  capture_pageview: true,
  capture_pageleave: true
});

// Track key conversion actions
document.addEventListener('DOMContentLoaded', function() {

  // Track CTA button clicks (Google Calendar booking)
  var ctaButtons = document.querySelectorAll('a[href*="calendar.google.com"], a.md-button--primary');
  ctaButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      posthog.capture('booking_cta_clicked', {
        button_text: this.innerText || this.textContent,
        href: this.href,
        page_section: this.closest('section, div')?.className || 'unknown'
      });
    });
  });

  // Track scroll to sections (testimonials, features, etc.)
  var sections = document.querySelectorAll('.hero-section, .feature-section, .testimonials-grid, .ai-loop-section, .cta-section');
  var observedSections = new Set();
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !observedSections.has(entry.target.className)) {
        observedSections.add(entry.target.className);
        posthog.capture('section_viewed', {
          section: entry.target.className
        });
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(function(section) { observer.observe(section); });

  // Track external links (LinkedIn, etc.)
  var externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="practical-ai-leadership.com"]):not([href*="calendar.google.com"])');
  externalLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      posthog.capture('external_link_clicked', {
        destination: this.href,
        link_text: this.innerText || this.textContent
      });
    });
  });

});
