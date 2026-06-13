const html = `
<section class="hero">
  <div class="hero__bg">
    <img src="/assets/4938dd2d-11eb-4a9d-a31e-b8b8e58341d4.jpg" alt="">
  </div>
  <div class="hero__overlay"></div>

  <div class="container hero__inner">
    <div class="hero__content">
      <span class="eyebrow hero__eyebrow">Hialeah · Florida · Desde 2018</span>
      <h1 class="hero__title">
        La belleza,<br>en manos <em>profesionales</em><br>y de <em>confianza</em>.
      </h1>
      <p class="hero__lead">
        Clínica de medicina estética y bienestar dirigida por Ana Gloria Ramos,
        Médica Estética Certificada. Tratamientos personalizados, resultados naturales
        — en español y en inglés.
      </p>
      <div class="hero__ctas">
        <a href="#reservar" class="btn btn--primary">Reservar Cita Online</a>
        <a href="/servicios" class="btn btn--ghost">Ver Servicios</a>
      </div>
      <div class="hero__meta">
        <div class="hero__meta-item">
          <span class="hero__meta-num"><em>5.0</em></span>
          <span class="hero__meta-label">127 reseñas Google</span>
        </div>
        <div class="hero__meta-item">
          <span class="hero__meta-num">+2.400</span>
          <span class="hero__meta-label">Pacientes</span>
        </div>
        <div class="hero__meta-item">
          <span class="hero__meta-num">7<em> años</em></span>
          <span class="hero__meta-label">En Hialeah</span>
        </div>
      </div>
    </div>

    <aside class="hero__side">
      <div class="hero__rating">
        <div>
          <div class="hero__rating-num">5.0</div>
          <div class="hero__rating-stars">★★★★★</div>
        </div>
        <div class="hero__rating-text">
          <strong>Calificación promedio</strong><br>
          basada en 127 reseñas verificadas en Google
        </div>
      </div>
    </aside>
  </div>

  <div class="hero__scroll" aria-hidden="true">
    <span>Descubre</span>
    <div class="hero__scroll-line"></div>
  </div>
</section>

<!-- Marquee -->
<div class="marquee" aria-hidden="true">
  <div class="marquee__track">
    <span class="marquee__item">Terapia IV</span>
    <span class="marquee__item">Bótox</span>
    <span class="marquee__item">Medicina Estética</span>
    <span class="marquee__item">Control de Peso</span>
    <span class="marquee__item">Manejo del Dolor</span>
    <span class="marquee__item">Depilación Láser</span>
    <span class="marquee__item">Terapia IV</span>
    <span class="marquee__item">Bótox</span>
    <span class="marquee__item">Medicina Estética</span>
    <span class="marquee__item">Control de Peso</span>
    <span class="marquee__item">Manejo del Dolor</span>
    <span class="marquee__item">Depilación Láser</span>
  </div>
</div>

<!-- ========================================================== -->
<!-- STAR SERVICE — Bótox                                       -->
<!-- ========================================================== -->
<section class="section" id="servicio-destacado">
  <div class="container">
    <div class="services__head">
      <div data-reveal="">
        <span class="eyebrow">Nuestro servicio estrella</span>
        <h2 class="display services__head-title" style="margin-top:18px;">
          Bótox que se siente <em>tuyo</em>,<br>nunca prestado.
        </h2>
      </div>
      <p class="lead services__head-lead" data-reveal="" style="--reveal-delay:120ms;">
        Es el tratamiento más reservado de la clínica — y por una razón clara: dosis
        personalizadas, técnica conservadora y resultados que realzan tu expresión sin
        congelarla. Diseñado para que veas la diferencia tú, no el resto del mundo.
      </p>
    </div>

    <article class="star" data-reveal="up-lg">
      <div class="star__media">
        <span class="star__tag">El más reservado</span>
        <img src="/assets/a8dc7fd9-8fdc-4653-b7d8-b39906b40ac4.jpg" alt="Bótox y neuromoduladores">
        <div class="star__overlay-card">
          <div class="star__overlay-num"><em>+850</em></div>
          <div class="star__overlay-label">tratamientos realizados<br>en los últimos 12 meses</div>
        </div>
      </div>

      <div class="star__body">
        <div class="star__head">
          <span class="svc-row__num">01 / Inyectables</span>
          <h3 class="star__name">Bótox &amp; <em>Neuromoduladores</em></h3>
          <p class="star__desc">
            Suavizamos líneas de expresión en frente, entrecejo y patas de gallo con
            dosis personalizadas tras un mapeo facial detallado. Tratamiento de 45 minutos,
            sin tiempo de recuperación, con resultados visibles en 5 a 7 días que duran
            hasta 4 meses.
          </p>
        </div>

        <ul class="star__perks">
          <li><span>✦</span> Productos FDA-aprobados (Botox®, Dysport®, Xeomin®)</li>
          <li><span>✦</span> Mapeo facial digital para precisión milimétrica</li>
          <li><span>✦</span> Dosis conservadora — siempre puedes añadir más</li>
          <li><span>✦</span> Seguimiento sin costo a las 2 semanas</li>
        </ul>

        <div class="star__meta">
          <div class="star__meta-item">
            <span class="star__meta-label">Desde</span>
            <span class="star__meta-value">$280<em> · por área</em></span>
          </div>
          <div class="star__meta-item">
            <span class="star__meta-label">Duración</span>
            <span class="star__meta-value">45 min</span>
          </div>
          <div class="star__meta-item">
            <span class="star__meta-label">Resultados</span>
            <span class="star__meta-value">3 – 4 meses</span>
          </div>
        </div>

        <div class="star__ctas">
          <a href="#reservar" class="btn btn--primary">Reservar Bótox</a>
          <a href="/servicios" class="btn btn--link">Ver todos los servicios</a>
        </div>
      </div>
    </article>
  </div>
</section>

<!-- ========================================================== -->
<!-- ABOUT — Ana Gloria                                         -->
<!-- ========================================================== -->
<section class="section about" id="ana-gloria">
  <div class="container">
    <div class="about__grid">
      <div class="about__visual" data-reveal="left">
        <img src="/assets/a3165eea-0bb3-47e5-b99f-229580f5e8e3.jpg" alt="Ana Gloria Ramos, MEC">
        <div class="about__sig">
          <div class="about__sig-name">Ana Gloria Ramos</div>
          <div class="about__sig-role">Especialista en Medicina Estética · MEC</div>
        </div>
      </div>

      <div class="about__content" data-reveal="right">
        <span class="eyebrow">La fundadora</span>
        <h2 class="display about__title">
          Cuidado <em>familiar</em>, ciencia <em>personalizada</em>.
        </h2>
        <p class="about__bio">
          Ana Gloria fundó Professional Ramos Health Care con una convicción simple:
          que cada paciente merece ser escuchada, comprendida y tratada con la misma
          calidez que ofrecería a su propia familia. Con licencia activa como
          Médica Estética Certificada en Florida por la AAME, combina más de 12 años
          de experiencia clínica con formación continua en medicina estética.
        </p>
        <p class="about__bio">
          Su filosofía es la de los resultados sutiles — realzar, nunca transformar.
          Atiende personalmente cada cita, en español o inglés, y diseña planes que
          se ajustan al ritmo y presupuesto de cada paciente.
        </p>

        <div class="credentials">
          <div>
            <div class="credential__label">Especialidad</div>
            <div class="credential__value">Médica Estética Certificada</div>
          </div>
          <div>
            <div class="credential__label">NPI Número</div>
            <div class="credential__value">2089436714</div>
          </div>
          <div>
            <div class="credential__label">Licencia Médica Estética — FL</div>
            <div class="credential__value">Vigente hasta 09/2028</div>
          </div>
          <div>
            <div class="credential__label">Idiomas</div>
            <div class="credential__value">Español · English</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========================================================== -->
<!-- ========================================================== -->
<!-- TESTIMONIALS                                               -->
<!-- ========================================================== -->
<section class="section" id="testimonios">
  <div class="container" style="max-width:980px;">
    <div class="testimonials__head" data-reveal="">
      <span class="eyebrow centered">Lo que dicen nuestras pacientes</span>
      <h2 class="display">
        127 reseñas. <em>5 estrellas.</em><br>Una sola razón: <em>cercanía.</em>
      </h2>
      <div class="testimonials__badge">
        <span class="testimonials__badge-g">G</span>
        <strong>5.0</strong>
        <span class="testimonials__badge-stars">★★★★★</span>
        <span>·</span>
        <span>Reseñas verificadas en Google</span>
      </div>
    </div>
    <div id="testimonials-root" data-reveal="" style="--reveal-delay:160ms;"></div>
  </div>
</section>

<!-- ========================================================== -->
<!-- LOCATION + HOURS                                           -->
<!-- ========================================================== -->
<section class="section location" id="ubicacion">
  <div class="container">
    <div class="location__grid">
      <div class="location__info" data-reveal="left">
        <span class="eyebrow">Visítanos</span>
        <h2 class="display location__title">
          En el corazón de <em>Hialeah</em>.
        </h2>
        <p style="color:rgba(251,246,240,0.78);font-size:16px;line-height:1.7;max-width:42ch;margin:0;">
          Estamos en el edificio profesional de la 16th Avenue, con parqueo gratuito,
          fácil acceso desde Palmetto Expressway y a 10 minutos del Westland Mall.
        </p>

        <div class="location__cards">
          <div class="location__card">
            <div class="location__card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h3 class="location__card-title">Dirección</h3>
            <p class="location__card-body">
              3750 W 16th Avenue<br>
              Suite 136U<br>
              Hialeah, FL 33012
            </p>
          </div>

          <div class="location__card">
            <div class="location__card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
            </div>
            <h3 class="location__card-title">Horario</h3>
            <div class="location__card-body" style="display:flex;flex-direction:column;gap:2px;">
              <div class="hours-row"><span>Lun – Vie</span><span>9:00 AM – 5:00 PM</span></div>
              <div class="hours-row"><span>Sábado</span><span>8:00 AM – 2:00 PM</span></div>
              <div class="hours-row is-closed"><span>Domingo</span><span>Cerrado</span></div>
            </div>
          </div>

          <div class="location__card">
            <div class="location__card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h3 class="location__card-title">Teléfono</h3>
            <p class="location__card-body">
              <a href="tel:3056398301" style="color:inherit;border-bottom:1px solid rgba(228,208,168,0.4);">(305) 639-8301</a><br>
              <span style="font-size:12px;color:rgba(251,246,240,0.55);">Recordatorios por SMS</span>
            </p>
          </div>

          <div class="location__card">
            <div class="location__card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><path d="M22 6l-10 7L2 6"></path></svg>
            </div>
            <h3 class="location__card-title">Correo</h3>
            <p class="location__card-body">
              <a href="mailto:ramoshealthcare@gmail.com" style="color:inherit;border-bottom:1px solid rgba(228,208,168,0.4);">ramoshealthcare@<br>gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div class="location__map" data-reveal="right">
        <iframe title="Mapa de la clínica" src="https://www.google.com/maps?q=3750+W+16th+Avenue+Hialeah+FL+33012&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen=""></iframe>
        <div class="location__map-pin">PRHC · Suite 136U</div>
      </div>
    </div>
  </div>
</section>

<!-- ========================================================== -->
<!-- BOOKING                                                    -->
<!-- ========================================================== -->
<section class="booking" id="reservar">
  <div class="container">
    <div id="booking-root" data-reveal="up-lg"></div>
  </div>
</section>`;
export default html;
