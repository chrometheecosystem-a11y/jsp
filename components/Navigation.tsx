"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { eventConfig as event } from "@/config/event";
import { BrandMark } from "@/components/BrandMark";

const links = [
  ["Rencontres", "#networking"],
  ["Intervenants", "#intervenants"],
  ["Château", "#domaine"],
  ["Programme", "#programme"],
  ["Pass", "#billets"],
  ["FAQ", "#faq"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#accueil");

  useEffect(() => {
    const update = () => setScrolled(scrollY > 40);
    update();
    addEventListener("scroll", update, { passive: true });
    return () => removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const ids = ["accueil", ...links.map(([, href]) => href.slice(1))];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-20% 0px -65%", threshold: [0, 0.2, 0.5] });
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const menuItems = {
    hidden: { opacity: 0, y: 18 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: 0.12 + index * 0.065 },
    }),
  };

  return <motion.header initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }} className={`nav ${scrolled || open ? "nav-solid" : ""}`}>
    <a href="#accueil" className="brand" aria-label={`${event.name}, accueil`}><BrandMark /></a>
    <nav aria-label="Navigation principale" className="desktop-nav">
      {links.map(([label, href]) => <a className={active === href ? "active" : ""} aria-current={active === href ? "location" : undefined} key={href} href={href}>{label}</a>)}
      <a className="nav-cta" href={event.links.booking}>{event.hero.primaryCta}</a>
    </nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>{open ? <X /> : <Menu />}</button>
    <AnimatePresence>{open && <motion.nav id="mobile-menu" className="mobile-menu" aria-label="Navigation mobile" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}>
      {links.map(([label, href], index) => <motion.a custom={index} variants={menuItems} initial="hidden" animate="visible" key={href} href={href} onClick={() => setOpen(false)}>{label}</motion.a>)}
      <motion.a custom={links.length} variants={menuItems} initial="hidden" animate="visible" href={event.links.booking} onClick={() => setOpen(false)}>{event.hero.primaryCta}</motion.a>
    </motion.nav>}</AnimatePresence>
  </motion.header>;
}
