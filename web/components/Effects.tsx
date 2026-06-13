"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Effects() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    /* Reveal-on-scroll */
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* Animated number counter */
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target = parseFloat(el.getAttribute("data-counter") || "0");
        const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
        const prefix = el.getAttribute("data-prefix") || "";
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
          const val = target * eased;
          el.textContent = prefix + (decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString("es-ES")) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterIO.unobserve(el);
      });
    }, { threshold: 0.4 });
    document.querySelectorAll("[data-counter]").forEach((el) => counterIO.observe(el));
    cleanups.push(() => counterIO.disconnect());

    /* FAQ accordion (vanilla) */
    const faqHandlers: Array<{ head: Element; fn: () => void }> = [];
    document.querySelectorAll(".faq__item").forEach((item) => {
      const head = item.querySelector(".faq__item-head");
      if (!head) return;
      const fn = () => {
        const wasOpen = item.classList.contains("is-open");
        item.parentElement?.querySelectorAll(".faq__item.is-open").forEach((o) => o.classList.remove("is-open"));
        if (!wasOpen) item.classList.add("is-open");
      };
      head.addEventListener("click", fn);
      faqHandlers.push({ head, fn });
    });
    cleanups.push(() => faqHandlers.forEach(({ head, fn }) => head.removeEventListener("click", fn)));

    /* Category filters (productos + noticias) */
    const catHandlers: Array<{ btn: Element; fn: () => void }> = [];
    document.querySelectorAll(".news-cat").forEach((btn) => {
      const fn = () => {
        const group = btn.closest(".news-categories");
        if (!group) return;
        group.querySelectorAll(".news-cat").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const cat = btn.textContent?.trim().toLowerCase();
        const scope = btn.closest(".page") || document;
        const items = scope.querySelectorAll<HTMLElement>(".product-card[data-cat], .article-card");
        items.forEach((card) => {
          const ds = card.getAttribute("data-cat")?.toLowerCase();
          const cardCat = ds || card.querySelector(".article-card__cat")?.textContent?.trim().toLowerCase();
          if (cat === "todas" || cat === "todos" || cardCat === cat) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      };
      btn.addEventListener("click", fn);
      catHandlers.push({ btn, fn });
    });
    cleanups.push(() => catHandlers.forEach(({ btn, fn }) => btn.removeEventListener("click", fn)));

    /* Newsletter inline submit */
    const nlHandlers: Array<{ form: HTMLFormElement; fn: (e: Event) => void }> = [];
    document.querySelectorAll<HTMLFormElement>(".newsletter__form").forEach((form) => {
      const fn = (e: Event) => {
        e.preventDefault();
        const input = form.querySelector<HTMLInputElement>(".newsletter__input");
        const btn = form.querySelector<HTMLElement>(".newsletter__btn");
        if (input) input.value = "";
        if (btn) btn.textContent = "¡Gracias!";
      };
      form.addEventListener("submit", fn);
      nlHandlers.push({ form, fn });
    });
    cleanups.push(() => nlHandlers.forEach(({ form, fn }) => form.removeEventListener("submit", fn)));

    /* Client-side routing for internal links inside injected page HTML */
    const onDocClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement)?.closest?.("a");
      if (!anchor) return;
      if (!anchor.closest(".page")) return; // only links inside injected page content
      const href = anchor.getAttribute("href");
      if (!href || anchor.target === "_blank") return;
      if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) return;
      if (href === "#") {
        e.preventDefault();
        return;
      }
      if (href.startsWith("#")) {
        // same-page anchor
        e.preventDefault();
        const t = document.getElementById(href.slice(1));
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (href.startsWith("/")) {
        e.preventDefault();
        router.push(href);
      }
    };
    document.addEventListener("click", onDocClick);
    cleanups.push(() => document.removeEventListener("click", onDocClick));

    /* Smooth-scroll to hash target on this route */
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const t = document.getElementById(id);
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
