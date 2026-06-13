"use client";

import { useMemo, useState } from "react";
import { Icon } from "./icons";

type Service = { id: string; name: string; duration: string; price: string; desc: string };

const SERVICES: Service[] = [
  { id: "botox", name: "Bótox & Neuromoduladores", duration: "45 min", price: "Desde $280", desc: "Suavizar líneas de expresión con precisión clínica." },
  { id: "facial", name: "Limpiezas Faciales", duration: "60 min", price: "Desde $95", desc: "Renovación profunda con productos farmacéuticos." },
  { id: "fillers", name: "Rellenos Dérmicos", duration: "60 min", price: "Desde $450", desc: "Volumen natural en labios, mejillas y contornos." },
  { id: "weight", name: "Pérdida de Peso Médica", duration: "30 min", price: "Consulta $75", desc: "Plan supervisado con seguimiento mensual." },
  { id: "primary", name: "Atención Primaria", duration: "30 min", price: "Consulta $65", desc: "Medicina familiar con enfoque bilingüe." },
  { id: "consult", name: "Consulta Estética", duration: "20 min", price: "Gratis", desc: "Evaluación inicial sin compromiso." },
];

const MONTHS_ES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const WEEKDAYS_ES = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const TIME_SLOTS = {
  morning: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
  afternoon: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30"],
};

type Info = { name: string; phone: string; email: string; notes: string; first: boolean; consent: boolean };
type Confirmation = { code: string; service: Service; date: Date; slot: string; info: Info };

function Calendar({ value, onChange }: { value: Date | null; onChange: (d: Date) => void }) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const year = view.getFullYear();
  const month = view.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7; // Mon-first
  const daysInMonth = lastDay.getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

  const prevMonth = () => setView(new Date(year, month - 1, 1));
  const nextMonth = () => setView(new Date(year, month + 1, 1));

  const isSameDay = (a: Date | null, b: Date | null) => !!a && !!b && a.toDateString() === b.toDateString();

  return (
    <div className="booking-calendar">
      <div className="booking-calendar__head">
        <span className="booking-calendar__month">{MONTHS_ES[month].toLowerCase()} {year}</span>
        <div className="booking-calendar__nav">
          <button onClick={prevMonth} aria-label="Mes anterior"><Icon.ChevL /></button>
          <button onClick={nextMonth} aria-label="Mes siguiente"><Icon.ChevR /></button>
        </div>
      </div>
      <div className="booking-calendar__grid">
        {WEEKDAYS_ES.map((w) => <div key={w} className="booking-calendar__weekday">{w}</div>)}
        {cells.map((d, i) => {
          if (!d) return <button key={i} className="booking-calendar__day is-empty" disabled aria-hidden="true"></button>;
          const past = d < today;
          const sunday = d.getDay() === 0;
          const selected = isSameDay(d, value);
          const isToday = isSameDay(d, today);
          return (
            <button
              key={i}
              className={`booking-calendar__day ${selected ? "is-selected" : ""} ${isToday ? "is-today" : ""}`}
              disabled={past || sunday}
              onClick={() => onChange(d)}
              aria-label={`${d.getDate()} de ${MONTHS_ES[month]}`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BookingFlow() {
  const [step, setStep] = useState(0); // 0 service, 1 date, 2 info, 3 success
  const [service, setService] = useState<Service | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [info, setInfo] = useState<Info>({ name: "", phone: "", email: "", notes: "", first: true, consent: false });
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  const stepLabels = [
    { t: "Elige tu servicio", s: "Selecciona qué tratamiento te interesa" },
    { t: "Día y hora", s: "Encuentra el momento ideal para ti" },
    { t: "Tus datos", s: "Confirma quién asistirá a la cita" },
    { t: "¡Reserva confirmada!", s: "Te enviaremos un recordatorio" },
  ];

  const canNext = () => {
    if (step === 0) return !!service;
    if (step === 1) return !!date && !!slot;
    if (step === 2) return info.name && info.phone && info.email && info.consent;
    return false;
  };

  const formatDate = (d: Date | null) => d ? `${WEEKDAYS_ES[(d.getDay() + 6) % 7]} ${d.getDate()} ${MONTHS_ES[d.getMonth()].toLowerCase()}` : "";

  const submit = () => {
    const code = "PRHC-" + Math.random().toString(36).slice(2, 7).toUpperCase();
    setConfirmation({ code, service: service!, date: date!, slot: slot!, info });
    setStep(3);
    const el = document.getElementById("reservar");
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  const reset = () => {
    setStep(0);
    setService(null);
    setDate(null);
    setSlot(null);
    setInfo({ name: "", phone: "", email: "", notes: "", first: true, consent: false });
    setConfirmation(null);
  };

  return (
    <div className="booking__inner">
      <aside className="booking__aside">
        <div className="eyebrow">Reserva en línea</div>
        <h2>Tu cita, <em>a un clic</em> de distancia</h2>
        <p>Reserva directamente desde nuestra plataforma. Sin llamadas, sin esperas — confirmación inmediata y recordatorio por SMS.</p>
        <div className="booking__steps">
          {stepLabels.slice(0, 3).map((s, i) => (
            <div key={i} className={`booking__step ${step === i ? "is-active" : ""} ${step > i ? "is-done" : ""}`}>
              <div className="booking__step-num">{step > i ? "✓" : i + 1}</div>
              <span>{s.t}</span>
            </div>
          ))}
        </div>
      </aside>

      <div className="booking__form">
        <div className="booking__form-header">
          <div>
            <h3 className="booking__form-title">{stepLabels[step].t}</h3>
            <div className="booking__form-sub">{stepLabels[step].s}</div>
          </div>
          {step < 3 && (
            <div className="booking__form-count">
              <span>0{step + 1}</span><em> / 03</em>
            </div>
          )}
        </div>

        <div className="booking__body">
          {step === 0 && (
            <div className="booking-tiles">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  className={`booking-tile ${service?.id === s.id ? "is-selected" : ""}`}
                  onClick={() => setService(s)}
                >
                  <div className="booking-tile__name">{s.name}</div>
                  <div className="service__desc" style={{ fontSize: 13, lineHeight: 1.45, margin: 0, color: "var(--ink-soft)" }}>{s.desc}</div>
                  <div className="booking-tile__meta">
                    <span>{s.duration}</span>
                    <span className="booking-tile__price">{s.price}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="booking-date">
              <Calendar value={date} onChange={(d) => { setDate(d); setSlot(null); }} />
              <div className="booking-slots">
                {!date && (
                  <div style={{ color: "var(--ink-mute)", fontSize: 14, textAlign: "center", padding: "32px 0" }}>
                    Elige un día para ver los horarios disponibles
                  </div>
                )}
                {date && (
                  <>
                    <div className="booking-slots__label">Mañana</div>
                    <div className="booking-slots__group">
                      {TIME_SLOTS.morning.map((t) => {
                        const disabled = ["10:30", "11:00"].includes(t) && !!date && date.getDay() % 2 === 1;
                        return (
                          <button
                            key={t}
                            className={`booking-slot ${slot === t + " AM" ? "is-selected" : ""} ${disabled ? "is-disabled" : ""}`}
                            onClick={() => !disabled && setSlot(t + " AM")}
                            disabled={disabled}
                          >
                            {t} AM
                          </button>
                        );
                      })}
                    </div>
                    <div className="booking-slots__label" style={{ marginTop: 14 }}>Tarde</div>
                    <div className="booking-slots__group">
                      {TIME_SLOTS.afternoon.map((t) => {
                        const disabled = ["2:00", "2:30"].includes(t) && !!date && date.getDay() % 2 === 0;
                        return (
                          <button
                            key={t}
                            className={`booking-slot ${slot === t + " PM" ? "is-selected" : ""} ${disabled ? "is-disabled" : ""}`}
                            onClick={() => !disabled && setSlot(t + " PM")}
                            disabled={disabled}
                          >
                            {t} PM
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <>
              <div className="booking-summary">
                <div className="booking-summary__row">
                  <span className="booking-summary__label">Servicio</span>
                  <span className="booking-summary__value">{service?.name}</span>
                </div>
                <div className="booking-summary__row">
                  <span className="booking-summary__label">Fecha</span>
                  <span className="booking-summary__value">{formatDate(date)}</span>
                </div>
                <div className="booking-summary__row">
                  <span className="booking-summary__label">Hora</span>
                  <span className="booking-summary__value">{slot}</span>
                </div>
              </div>
              <div className="booking-fields">
                <div className="booking-field">
                  <label>Nombre completo</label>
                  <input value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} placeholder="María Rodríguez" />
                </div>
                <div className="booking-field">
                  <label>Teléfono</label>
                  <input value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} placeholder="(305) 555-1234" type="tel" />
                </div>
                <div className="booking-field booking-field--full">
                  <label>Correo electrónico</label>
                  <input value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} placeholder="tu@email.com" type="email" />
                </div>
                <div className="booking-field booking-field--full">
                  <label>Notas (opcional)</label>
                  <textarea value={info.notes} onChange={(e) => setInfo({ ...info, notes: e.target.value })} placeholder="Cuéntanos cualquier información relevante: alergias, tratamientos previos, etc." />
                </div>
                <div className="booking-field booking-field--full">
                  <label className="booking-checkbox">
                    <input type="checkbox" checked={info.first} onChange={(e) => setInfo({ ...info, first: e.target.checked })} />
                    <span>Es mi primera visita a Professional Ramos Health Care</span>
                  </label>
                  <label className="booking-checkbox">
                    <input type="checkbox" checked={info.consent} onChange={(e) => setInfo({ ...info, consent: e.target.checked })} />
                    <span>Acepto recibir recordatorios por SMS y la política de cancelación (24 horas de aviso). *</span>
                  </label>
                </div>
              </div>
            </>
          )}

          {step === 3 && confirmation && (
            <div className="booking-success">
              <div className="booking-success__check"><Icon.Check /></div>
              <h3 className="booking-success__title">¡Listo, <em>{confirmation.info.name.split(" ")[0]}</em>!</h3>
              <p className="booking-success__msg">
                Tu cita para <strong style={{ color: "var(--burgundy)" }}>{confirmation.service.name}</strong> está confirmada el <strong style={{ color: "var(--burgundy)" }}>{formatDate(confirmation.date)} a las {confirmation.slot}</strong>. Te enviaremos un recordatorio por SMS al teléfono que indicaste.
              </p>
              <div className="booking-success__code">
                <span style={{ color: "var(--ink-mute)" }}>Código:</span>
                <strong>{confirmation.code}</strong>
              </div>
              <button onClick={reset} className="btn btn--ghost" style={{ marginTop: 8 }}>Reservar otra cita</button>
            </div>
          )}
        </div>

        {step < 3 && (
          <div className="booking__actions">
            <button
              className={`booking__back ${step === 0 ? "is-hidden" : ""}`}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              <Icon.ChevL /> Atrás
            </button>
            {step < 2 ? (
              <button
                className="btn btn--primary"
                disabled={!canNext()}
                onClick={() => setStep((s) => s + 1)}
                style={{ opacity: canNext() ? 1 : 0.4, cursor: canNext() ? "pointer" : "not-allowed" }}
              >
                Continuar <Icon.ChevR />
              </button>
            ) : (
              <button
                className="btn btn--primary"
                disabled={!canNext()}
                onClick={submit}
                style={{ opacity: canNext() ? 1 : 0.4, cursor: canNext() ? "pointer" : "not-allowed" }}
              >
                Confirmar reserva
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
