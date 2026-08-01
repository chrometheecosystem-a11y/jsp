"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { eventConfig as event } from "@/config/event";

export function MobileBookingCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = [document.getElementById("candidature"), document.querySelector("footer")].filter(Boolean) as Element[];
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
      setHidden(visible.size > 0);
    }, { rootMargin: "0px 0px -25%", threshold: 0.05 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return <a className={`mobile-book${hidden ? " mobile-book-hidden" : ""}`} href="#candidature" aria-hidden={hidden} tabIndex={hidden ? -1 : undefined}>
    <span><b>{event.final.primaryCta}</b><small>{event.dates}</small></span><ArrowRight />
  </a>;
}
