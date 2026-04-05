"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const locale = navigator.language.startsWith("de") ? "de" : "en";
    router.replace(`/${locale}/`);
  }, [router]);

  return null;
}
