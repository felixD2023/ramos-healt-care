"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";

const TESTIMONIOS = [
  {
    text: "Ana Gloria me hace sentir en familia. Llevo varios años con ella para mi bótox y la diferencia se nota — natural, nunca exagerado. La recomiendo a todas mis amigas.",
    name: "María Elena C.",
    since: "Paciente desde 2020",
    initials: "ME",
    rating: 5,
  },
  {
    text: "La atención es de otro nivel. Bilingüe, profesional y siempre a tiempo. Bajé 22 libras siguiendo su plan de pérdida de peso y me cambió la vida.",
    name: "Liliana R.",
    since: "Paciente desde 2021",
    initials: "LR",
    rating: 5,
  },
  {
    text: "Buscaba una clínica donde me trataran como persona, no como número. Aquí lo encontré. Las limpiezas faciales son espectaculares y los precios muy justos.",
    name: "Carmen V.",
    since: "Paciente desde 2019",
    initials: "CV",
    rating: 5,
  },
  {
    text: "Profesionalismo absoluto. Ana Gloria explica cada procedimiento con detalle, te hace sentir segura. Mi rostro luce descansado sin perder mis facciones.",
    name: "Yulia M.",
    since: "Paciente desde 2021",
    initials: "YM",
    rating: 5,
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIOS[idx];

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % TESTIMONIOS.length);
    }, 7500);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div className="testimonial-card" key={idx}>
        <div className="testimonial-card__quote-mark">&quot;</div>
        <div className="testimonial-card__stars">
          {Array.from({ length: t.rating }).map((_, i) => <Icon.Star key={i} />)}
        </div>
        <p className="testimonial-card__text">{t.text}</p>
        <div className="testimonial-card__author">
          <div className="testimonial-card__avatar">{t.initials}</div>
          <div>
            <div className="testimonial-card__name">{t.name}</div>
            <div className="testimonial-card__since">{t.since}</div>
          </div>
        </div>
      </div>
      <div className="testimonial-controls">
        <div className="testimonial-dots">
          {TESTIMONIOS.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === idx ? "is-active" : ""}`}
              onClick={() => setIdx(i)}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
        <div className="testimonial-arrows">
          <button className="testimonial-arrow" onClick={() => setIdx((i) => (i - 1 + TESTIMONIOS.length) % TESTIMONIOS.length)} aria-label="Anterior"><Icon.ChevL /></button>
          <button className="testimonial-arrow" onClick={() => setIdx((i) => (i + 1) % TESTIMONIOS.length)} aria-label="Siguiente"><Icon.ChevR /></button>
        </div>
      </div>
    </div>
  );
}
