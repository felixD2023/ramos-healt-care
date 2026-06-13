"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/servicios", label: "Servicios", match: "/servicios" },
  { href: "/nosotros", label: "Nosotros", match: "/nosotros" },
  { href: "/productos", label: "Productos", match: "/productos" },
  { href: "/noticias", label: "Noticias", match: "/noticias" },
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Scroll state: is-scrolled + is-over-hero (transparent over a full-bleed hero)
  useEffect(() => {
    const nav = document.getElementById("nav");
    const hero = document.querySelector<HTMLElement>(".hero, .subhero");
    const heroHeight = hero ? hero.offsetHeight : 0;
    const onScroll = () => {
      if (!nav) return;
      const y = window.scrollY;
      nav.classList.toggle("is-scrolled", y > 12);
      if (hero) nav.classList.toggle("is-over-hero", y < heroHeight - 100);
      else nav.classList.remove("is-over-hero");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isCurrent = (match: string) => pathname === match || pathname.startsWith(match + "/");
  const close = () => setOpen(false);

  return (
    <>
      <header className="nav" id="nav">
        <div className="container nav__inner">
          <Link href="/" className="nav__brand">
            <img src="/assets/3f5affe9-a4aa-45d9-8d1e-69a84df8cb54.png" alt="Professional Ramos Health Care" className="nav__logo" />
            <div className="nav__brand-text">
              <span className="nav__brand-name">Ramos Health Care</span>
              <span className="nav__brand-tag">Estética &amp; Bienestar</span>
            </div>
          </Link>

          <nav>
            <ul className="nav__links">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={isCurrent(l.match) ? "is-current" : undefined}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav__cta">
            <a href="tel:3056398301" className="nav__phone" aria-label="Llamar">
              <PhoneIcon />
              (305) 639-8301
            </a>
            <Link href="/#reservar" className="btn btn--primary">Reservar Cita</Link>
            <button id="nav-burger" className="nav__burger" aria-label="Abrir menú" onClick={() => setOpen(true)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu__top">
          <div className="nav__brand">
            <img src="/assets/3f5affe9-a4aa-45d9-8d1e-69a84df8cb54.png" alt="PRHC" className="nav__logo" />
            <div className="nav__brand-text">
              <span className="nav__brand-name">Ramos Health Care</span>
              <span className="nav__brand-tag">Estética &amp; Bienestar</span>
            </div>
          </div>
          <button onClick={close} className="nav__burger" aria-label="Cerrar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 6l12 12M6 18L18 6" /></svg>
          </button>
        </div>
        <ul className="mobile-menu__links">
          <li><Link href="/servicios" onClick={close}>Servicios</Link></li>
          <li><Link href="/nosotros" onClick={close}>Nosotros</Link></li>
          <li><Link href="/productos" onClick={close}>Productos</Link></li>
          <li><Link href="/noticias" onClick={close}>Noticias</Link></li>
          <li><Link href="/#reservar" onClick={close}>Reservar</Link></li>
        </ul>
        <div className="mobile-menu__footer">
          <a href="tel:3056398301" className="btn btn--primary" onClick={close}>Llamar (305) 639-8301</a>
          <Link href="/#reservar" onClick={close} className="btn btn--ghost">Reservar Cita Online</Link>
        </div>
      </div>
    </>
  );
}
