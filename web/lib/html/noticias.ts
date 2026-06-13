const html = `

<!-- SUBHERO -->
<section class="subhero">
  <div class="subhero__bg">
    <img src="/assets/84aaa4e8-ee93-4723-b0a5-337339c103c5.jpg" alt="">
  </div>
  <div class="subhero__overlay"></div>
  <div class="container">
    <div class="subhero__content">
      <div class="subhero__crumbs">
        <a href="#">Inicio</a>
        <span>/</span>
        <span>Noticias</span>
      </div>
      <h1 class="subhero__title">Novedades &amp; <em>consejos</em>.</h1>
      <p class="subhero__lead">
        Promociones del mes, guías de cuidado, novedades de la clínica y artículos
        sobre medicina estética escritos por nuestro equipo. Información clínica
        confiable, en lenguaje claro.
      </p>
    </div>
  </div>
</section>

<!-- CATEGORIES + FEATURED -->
<section class="section">
  <div class="container">

    <div class="news-categories" data-reveal="">
      <button class="news-cat is-active">Todas</button>
      <button class="news-cat">Tratamientos</button>
      <button class="news-cat">Cuidado de piel</button>
      <button class="news-cat">Bienestar</button>
      <button class="news-cat">Clínica</button>
      <button class="news-cat">Promociones</button>
    </div>

    <!-- FEATURED ARTICLE -->
    <article class="featured-article">
      <div class="featured-article__media" data-reveal="left">
        <span class="featured-article__pin">Destacado</span>
        <img src="/assets/a8dc7fd9-8fdc-4653-b7d8-b39906b40ac4.jpg" alt="Mujer recibiendo tratamiento estético">
      </div>
      <div class="featured-article__body" data-reveal="right">
        <div class="featured-article__meta">
          <span class="featured-article__cat">Tratamientos</span>
          <span class="featured-article__dot"></span>
          <span>15 Marzo 2026</span>
          <span class="featured-article__dot"></span>
          <span>6 min lectura</span>
        </div>
        <h2 class="featured-article__title">
          Bótox preventivo: ¿desde qué edad <em>tiene sentido</em> comenzar?
        </h2>
        <p class="featured-article__excerpt">
          La pregunta más común en consulta tiene una respuesta menos obvia de lo que
          parece. Ana Gloria explica el concepto de "baby botox", a quién le conviene
          comenzar antes de los 30 y qué señales en la piel realmente importan más
          que la edad biológica.
        </p>
        <div class="featured-article__author">
          <div class="featured-article__author-avatar">AG</div>
          <div>
            <div style="font-weight:600;color:var(--ink);">Ana Gloria Ramos, MEC</div>
            <div style="color:var(--ink-mute);font-size:12px;">Fundadora &amp; Médica Estética</div>
          </div>
        </div>
        <a href="#" class="btn btn--primary" style="align-self:flex-start;margin-top:4px;">Leer artículo completo</a>
      </div>
    </article>

  </div>
</section>

<!-- PROMOTIONS STRIP -->
<section class="section promo-strip">
  <div class="container">
    <div style="display:flex;justify-content:space-between;align-items:end;margin-bottom:48px;gap:32px;flex-wrap:wrap;" data-reveal="">
      <div>
        <span class="eyebrow">Promociones del mes</span>
        <h2 class="display" style="margin-top:18px;font-size:clamp(32px,3.6vw,48px);">
          Ofertas <em>de temporada</em>.
        </h2>
      </div>
      <p class="lead" style="max-width:34ch;margin:0;">
        Selección curada de promociones vigentes este mes. Válidas únicamente
        agendando cita en línea.
      </p>
    </div>

    <div class="promo-strip__grid" data-stagger="">
      <div class="promo" data-reveal="" style="--i:0;">
        <span class="eyebrow muted">Marzo</span>
        <div class="promo__discount"><em>20%</em></div>
        <h3 class="promo__title">Pack 3 limpiezas faciales</h3>
        <p class="promo__desc">
          Tres sesiones de limpieza facial profunda con productos cosmecéuticos
          incluidos. Reservables a lo largo del año.
        </p>
        <span class="promo__valid">Válido hasta 31 marzo · Código FACE3</span>
      </div>

      <div class="promo" data-reveal="" style="--i:1;">
        <span class="eyebrow muted">Marzo</span>
        <div class="promo__discount">$<em>249</em></div>
        <h3 class="promo__title">Primera sesión de Bótox</h3>
        <p class="promo__desc">
          Una zona de tratamiento (frente, entrecejo o patas de gallo) para nuevas
          pacientes. Incluye seguimiento a las 2 semanas.
        </p>
        <span class="promo__valid">Solo nuevas pacientes · Hasta 31 marzo</span>
      </div>

      <div class="promo" data-reveal="" style="--i:2;">
        <span class="eyebrow muted">Marzo</span>
        <div class="promo__discount"><em>−$50</em></div>
        <h3 class="promo__title">Consulta de pérdida de peso</h3>
        <p class="promo__desc">
          Evaluación metabólica inicial + plan nutricional con descuento. Incluye
          medición de composición corporal.
        </p>
        <span class="promo__valid">$25 en lugar de $75 · Hasta agotar cupos</span>
      </div>
    </div>
  </div>
</section>

<!-- ARTICLE GRID -->
<section class="section">
  <div class="container">
    <div style="display:flex;justify-content:space-between;align-items:end;margin-bottom:56px;gap:32px;flex-wrap:wrap;" data-reveal="">
      <div>
        <span class="eyebrow">Artículos recientes</span>
        <h2 class="display" style="margin-top:18px;font-size:clamp(32px,3.6vw,48px);">
          Para que tomes <em>decisiones informadas</em>.
        </h2>
      </div>
    </div>

    <div class="articles-grid" data-stagger="">
      <!-- Article 1 -->
      <article class="article-card" data-reveal="" style="--i:0;">
        <div class="article-card__media">
          <span class="article-card__cat">Cuidado de piel</span>
          <img src="/assets/55be6de2-3902-4656-9f0e-945d2e2acb1c.jpg" alt="Rutina facial nocturna">
        </div>
        <div class="article-card__meta">
          <span>8 Marzo 2026</span>
          <span>·</span>
          <span>4 min</span>
        </div>
        <h3 class="article-card__title">Cómo construir tu rutina facial en 5 pasos sencillos</h3>
        <p class="article-card__excerpt">
          Una guía clínica honesta — sin pasos innecesarios ni productos de moda.
          Lo que tu piel realmente necesita por la mañana y por la noche.
        </p>
        <span class="article-card__read">Leer más</span>
      </article>

      <!-- Article 2 -->
      <article class="article-card" data-reveal="" style="--i:1;">
        <div class="article-card__media">
          <span class="article-card__cat">Tratamientos</span>
          <img src="/assets/802ce232-3e00-4e09-ad90-c709edda482d.jpg" alt="Rellenos dérmicos labiales">
        </div>
        <div class="article-card__meta">
          <span>1 Marzo 2026</span>
          <span>·</span>
          <span>5 min</span>
        </div>
        <h3 class="article-card__title">Fillers labiales: 7 mitos que escuchamos todos los días</h3>
        <p class="article-card__excerpt">
          "¿Se quedarán así para siempre?" "¿Se ven artificiales?" Aclaramos las
          dudas más frecuentes sobre rellenos de labios con ácido hialurónico.
        </p>
        <span class="article-card__read">Leer más</span>
      </article>

      <!-- Article 3 -->
      <article class="article-card" data-reveal="" style="--i:2;">
        <div class="article-card__media">
          <span class="article-card__cat">Bienestar</span>
          <img src="/assets/9add2239-2d1c-4509-80b1-937fbd6ee6f1.jpg" alt="Pérdida de peso médica">
        </div>
        <div class="article-card__meta">
          <span>22 Febrero 2026</span>
          <span>·</span>
          <span>7 min</span>
        </div>
        <h3 class="article-card__title">Semaglutida: cómo funciona y para quién es apropiada</h3>
        <p class="article-card__excerpt">
          Una explicación clínica honesta sobre los medicamentos GLP-1 para la
          pérdida de peso supervisada — beneficios, riesgos y candidatas ideales.
        </p>
        <span class="article-card__read">Leer más</span>
      </article>

      <!-- Article 4 -->
      <article class="article-card" data-reveal="" style="--i:3;">
        <div class="article-card__media">
          <span class="article-card__cat">Clínica</span>
          <img src="/assets/be493eb2-f852-4bb8-9121-c9eb172d3e46.jpg" alt="Inauguración nueva sala">
        </div>
        <div class="article-card__meta">
          <span>15 Febrero 2026</span>
          <span>·</span>
          <span>3 min</span>
        </div>
        <h3 class="article-card__title">Inauguramos una nueva sala de tratamiento privada</h3>
        <p class="article-card__excerpt">
          Hemos ampliado nuestras instalaciones para reducir tiempos de espera y
          mejorar tu experiencia. Conoce los detalles del nuevo espacio.
        </p>
        <span class="article-card__read">Leer más</span>
      </article>

      <!-- Article 5 -->
      <article class="article-card" data-reveal="" style="--i:4;">
        <div class="article-card__media">
          <span class="article-card__cat">Cuidado de piel</span>
          <img src="/assets/3ac6fc72-cc4b-4733-a74e-8ceddd8c1c73.jpg" alt="Productos cosmecéuticos">
        </div>
        <div class="article-card__meta">
          <span>8 Febrero 2026</span>
          <span>·</span>
          <span>5 min</span>
        </div>
        <h3 class="article-card__title">Vitamina C en sérums: por qué no todas son iguales</h3>
        <p class="article-card__excerpt">
          Concentración, formulación y forma activa: los tres factores que
          determinan si tu sérum de vitamina C realmente funciona.
        </p>
        <span class="article-card__read">Leer más</span>
      </article>

      <!-- Article 6 -->
      <article class="article-card" data-reveal="" style="--i:5;">
        <div class="article-card__media">
          <span class="article-card__cat">Tratamientos</span>
          <img src="/assets/8408df2d-34fd-4097-b1fe-3b2802bb192f.jpg" alt="Tratamiento de bótox">
        </div>
        <div class="article-card__meta">
          <span>1 Febrero 2026</span>
          <span>·</span>
          <span>6 min</span>
        </div>
        <h3 class="article-card__title">¿Bótox o fillers? Cómo elegir según tu objetivo</h3>
        <p class="article-card__excerpt">
          Dos tratamientos populares que se confunden con frecuencia. Te explicamos
          en qué se diferencian y cuál es el adecuado para cada zona.
        </p>
        <span class="article-card__read">Leer más</span>
      </article>
    </div>

    <div style="display:flex;justify-content:center;margin-top:64px;" data-reveal="">
      <a href="#" class="btn btn--ghost">Cargar más artículos</a>
    </div>
  </div>
</section>

<!-- NEWSLETTER -->
<section class="section section--tight">
  <div class="container">
    <div class="newsletter" data-reveal="up-lg">
      <div>
        <span class="eyebrow" style="color:var(--gold-soft);">Boletín mensual</span>
        <h2 class="newsletter__title" style="margin-top:14px;">
          Recibe nuestras<br><em>promociones y consejos</em>.
        </h2>
        <p class="newsletter__desc">
          Un correo al mes con artículos seleccionados, promociones exclusivas para
          suscriptoras y avisos sobre nuevos servicios. Sin spam — palabra.
        </p>
      </div>
      <form class="newsletter__form" onsubmit="event.preventDefault(); this.querySelector('.newsletter__input').value=''; this.querySelector('.newsletter__btn').textContent='¡Gracias!';">
        <div class="newsletter__input-wrap">
          <input type="email" class="newsletter__input" placeholder="tu@email.com" required="">
          <button type="submit" class="newsletter__btn">Suscribirme</button>
        </div>
        <span class="newsletter__note">
          Al suscribirte aceptas nuestra política de privacidad. Puedes cancelar cuando quieras.
        </span>
      </form>
    </div>
  </div>
</section>`;
export default html;
