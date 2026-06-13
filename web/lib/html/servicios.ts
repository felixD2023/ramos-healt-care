const html = `

<!-- SUBHERO -->
<section class="subhero">
  <div class="subhero__bg">
    <img src="/assets/df67ac1f-25ab-49cd-9ea4-5eb2e47f7ecc.jpg" alt="">
  </div>
  <div class="subhero__overlay"></div>
  <div class="container">
    <div class="subhero__content">
      <div class="subhero__crumbs">
        <a href="#">Inicio</a>
        <span>/</span>
        <span>Servicios</span>
      </div>
      <h1 class="subhero__title">Tratamientos que <em>te realzan</em>.</h1>
      <p class="subhero__lead">
        Cada servicio se diseña a la medida después de una consulta inicial gratuita.
        Trabajamos con productos de grado farmacéutico aprobados por la FDA y técnicas
        clínicas avanzadas — siempre con un enfoque conservador y natural.
      </p>
    </div>
  </div>
</section>

<!-- SERVICES DETAIL -->
<section class="section">
  <div class="container">

    <!-- ============ 01 · TERAPIA INTRAVENOSA ============ -->
    <header class="svc-cat" id="iv">
      <span class="svc-cat__num">— 01 / Sueros &amp; Vitaminas</span>
      <h2 class="svc-cat__title">Terapia <em>Intravenosa</em></h2>
      <p class="svc-cat__lead">
        Hidratación, vitaminas y nutrientes esenciales directo al torrente sanguíneo
        para una absorción del 100%. Recupérate de la gripe, combate el cansancio y
        recarga tu energía en una sola sesión.
      </p>
    </header>

    <article class="svc-row" id="iv-row">
      <div class="svc-row__media" data-reveal="left">
        <img src="/assets/ee59eccf-0335-4345-b38f-2a346dcb33e0.jpg" alt="Terapia intravenosa">
      </div>
      <div class="svc-row__body" data-reveal="right">
        <span class="svc-row__num">— Terapia IV</span>
        <h2 class="svc-row__title">Sueros &amp; <em>Vitaminas IV</em></h2>
        <div class="svc-row__price">
          <span class="svc-row__price-prefix">Desde</span>
          <span class="svc-row__price-value">$99</span>
          <span class="svc-row__price-unit">por sesión</span>
        </div>
        <p class="svc-row__desc">
          Protocolos formulados por nuestra médica según tu necesidad: hidratación
          intensiva, complejo inmune para recuperación de gripe, fórmula energizante
          tipo Myers y antioxidantes para piel luminosa. Administración segura en
          30 – 45 minutos en un ambiente cómodo.
        </p>
        <ul class="svc-row__perks">
          <li>Suero de hidratación rápida</li>
          <li>Complejo inmune anti-gripe</li>
          <li>Cóctel energizante (Myers)</li>
          <li>Antioxidante &amp; glutatión</li>
          <li>Vitamina C en altas dosis</li>
          <li>Valoración médica previa</li>
        </ul>
        <div class="svc-row__meta">
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Duración</span>
            <span class="svc-row__meta-value">30 – 45 min</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Efecto</span>
            <span class="svc-row__meta-value">Inmediato</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Frecuencia</span>
            <span class="svc-row__meta-value">Según plan</span>
          </div>
        </div>
        <a href="/#reservar" class="btn btn--primary" style="align-self:flex-start;margin-top:8px;">Reservar terapia IV</a>
      </div>
    </article>

    <!-- ============ 02 · MEDICINA ESTÉTICA ============ -->
    <header class="svc-cat" id="estetica">
      <span class="svc-cat__num">— 02 / Estética &amp; Rejuvenecimiento</span>
      <h2 class="svc-cat__title">Medicina <em>Estética</em></h2>
      <p class="svc-cat__lead">
        Rejuvenecimiento facial integral con técnicas clínicas avanzadas: bótox,
        rellenos dérmicos, PRP, faciales profundos y depilación láser — siempre con un
        enfoque conservador y resultados naturales.
      </p>
    </header>

    <!-- 02a Bótox -->
    <article class="svc-row" id="botox">
      <div class="svc-row__media" data-reveal="left">
        <img src="/assets/03e51d0b-d5bb-485b-85aa-32e5d9b311e0.jpg" alt="Bótox y neuromoduladores">
      </div>
      <div class="svc-row__body" data-reveal="right">
        <span class="svc-row__num">— Medicina Estética · Inyectables</span>
        <h2 class="svc-row__title">Bótox &amp; <em>Neuromoduladores</em></h2>
        <div class="svc-row__price">
          <span class="svc-row__price-prefix">Desde</span>
          <span class="svc-row__price-value">$280</span>
          <span class="svc-row__price-unit">por área</span>
        </div>
        <p class="svc-row__desc">
          Suavizamos líneas de expresión en frente, entrecejo y patas de gallo con
          dosis personalizadas. Tratamiento de 45 minutos sin tiempo de recuperación.
          Resultados visibles entre 5 y 7 días, con duración de hasta 4 meses.
        </p>
        <ul class="svc-row__perks">
          <li>Productos FDA-aprobados</li>
          <li>Mapeo facial digital</li>
          <li>Resultados naturales</li>
          <li>Seguimiento a las 2 semanas</li>
          <li>Sin tiempo de recuperación</li>
          <li>Consulta inicial gratuita</li>
        </ul>
        <div class="svc-row__meta">
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Duración</span>
            <span class="svc-row__meta-value">45 min</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Resultados</span>
            <span class="svc-row__meta-value">3 – 4 meses</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Frecuencia</span>
            <span class="svc-row__meta-value">Cada 3-4 m</span>
          </div>
        </div>
        <a href="/#reservar" class="btn btn--primary" style="align-self:flex-start;margin-top:8px;">Reservar bótox</a>
      </div>
    </article>

    <!-- 02b Facial - flipped -->
    <article class="svc-row svc-row--flip" id="facial">
      <div class="svc-row__media" data-reveal="right">
        <img src="/assets/def80ab0-0f85-4969-b9a5-64a256419156.jpg" alt="Limpieza facial profunda">
      </div>
      <div class="svc-row__body" data-reveal="left">
        <span class="svc-row__num">— Medicina Estética · Cuidado de piel</span>
        <h2 class="svc-row__title">Limpiezas <em>Faciales</em></h2>
        <div class="svc-row__price">
          <span class="svc-row__price-prefix">Desde</span>
          <span class="svc-row__price-value">$95</span>
        </div>
        <p class="svc-row__desc">
          Renovación profunda en cinco fases: doble limpieza, exfoliación enzimática,
          extracción asistida con vapor, mascarilla activa y sellado con protector solar.
          Cada protocolo se adapta a tu tipo de piel (mixta, seca, sensible o con acné).
        </p>
        <ul class="svc-row__perks">
          <li>Diagnóstico de piel digital</li>
          <li>Productos cosmecéuticos</li>
          <li>Vapor terapéutico</li>
          <li>Alta frecuencia anti-acné</li>
          <li>Hidratación profunda</li>
          <li>Protocolo sin dolor</li>
        </ul>
        <div class="svc-row__meta">
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Duración</span>
            <span class="svc-row__meta-value">60 min</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Recomendado</span>
            <span class="svc-row__meta-value">Mensual</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Paquete x3</span>
            <span class="svc-row__meta-value">$240</span>
          </div>
        </div>
        <a href="/#reservar" class="btn btn--primary" style="align-self:flex-start;margin-top:8px;">Reservar facial</a>
      </div>
    </article>

    <!-- 02c Fillers -->
    <article class="svc-row" id="fillers">
      <div class="svc-row__media" data-reveal="left">
        <img src="/assets/eafe2440-1e4d-49cd-8cd7-da2560843770.jpg" alt="Rellenos dérmicos">
      </div>
      <div class="svc-row__body" data-reveal="right">
        <span class="svc-row__num">— Medicina Estética · Inyectables</span>
        <h2 class="svc-row__title">Rellenos <em>Dérmicos</em></h2>
        <div class="svc-row__price">
          <span class="svc-row__price-prefix">Desde</span>
          <span class="svc-row__price-value">$450</span>
          <span class="svc-row__price-unit">1 ml</span>
        </div>
        <p class="svc-row__desc">
          Restauramos volumen perdido y definimos contornos con ácido hialurónico
          de última generación (Juvéderm®, Restylane®). Ideal para labios, mejillas,
          surcos nasogenianos y ojeras profundas. Reversible y de absorción gradual.
        </p>
        <ul class="svc-row__perks">
          <li>Ácido hialurónico premium</li>
          <li>Técnica de microcánula</li>
          <li>Anestesia tópica incluida</li>
          <li>Resultado inmediato</li>
          <li>Tratamiento reversible</li>
          <li>Mínima inflamación</li>
        </ul>
        <div class="svc-row__meta">
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Duración</span>
            <span class="svc-row__meta-value">60 min</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Resultados</span>
            <span class="svc-row__meta-value">12 – 18 meses</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Recuperación</span>
            <span class="svc-row__meta-value">24 – 48 h</span>
          </div>
        </div>
        <a href="/#reservar" class="btn btn--primary" style="align-self:flex-start;margin-top:8px;">Reservar fillers</a>
      </div>
    </article>

    <!-- 02d PRP - flipped -->
    <article class="svc-row svc-row--flip" id="prp">
      <div class="svc-row__media" data-reveal="right">
        <img src="/assets/7a8fb1a5-7b78-40f9-98e5-edb2b05c316a.jpg" alt="PRP facial">
      </div>
      <div class="svc-row__body" data-reveal="left">
        <span class="svc-row__num">— Medicina Estética · Regenerativo</span>
        <h2 class="svc-row__title">PRP <em>Facial</em></h2>
        <div class="svc-row__price">
          <span class="svc-row__price-prefix">Desde</span>
          <span class="svc-row__price-value">$350</span>
          <span class="svc-row__price-unit">por sesión</span>
        </div>
        <p class="svc-row__desc">
          Plasma rico en plaquetas de tu propia sangre para estimular colágeno, mejorar
          textura y luminosidad de forma 100% natural. Ideal para rejuvenecimiento facial,
          ojeras y como complemento de microagujas.
        </p>
        <ul class="svc-row__perks">
          <li>100% biocompatible</li>
          <li>Estimula colágeno natural</li>
          <li>Mejora textura y manchas</li>
          <li>Combinable con microagujas</li>
          <li>Apto para todo tipo de piel</li>
          <li>Recuperación mínima</li>
        </ul>
        <div class="svc-row__meta">
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Duración</span>
            <span class="svc-row__meta-value">60 min</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Protocolo</span>
            <span class="svc-row__meta-value">3 sesiones</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Resultados</span>
            <span class="svc-row__meta-value">Progresivos</span>
          </div>
        </div>
        <a href="/#reservar" class="btn btn--primary" style="align-self:flex-start;margin-top:8px;">Reservar PRP</a>
      </div>
    </article>

    <!-- 02e Láser -->
    <article class="svc-row" id="laser">
      <div class="svc-row__media" data-reveal="left">
        <img src="/assets/c5681754-b4d2-48aa-8ac3-49b77cdf92e5.jpg" alt="Depilación láser">
      </div>
      <div class="svc-row__body" data-reveal="right">
        <span class="svc-row__num">— Medicina Estética · Láser</span>
        <h2 class="svc-row__title">Depilación <em>Láser</em></h2>
        <div class="svc-row__price">
          <span class="svc-row__price-prefix">Desde</span>
          <span class="svc-row__price-value">$60</span>
          <span class="svc-row__price-unit">por zona</span>
        </div>
        <p class="svc-row__desc">
          Tecnología láser de última generación para reducción permanente del vello,
          segura y efectiva en distintos tonos de piel. Sesiones rápidas y prácticamente
          indoloras con enfriamiento integrado para tu comodidad.
        </p>
        <ul class="svc-row__perks">
          <li>Apto para varios fototipos</li>
          <li>Enfriamiento integrado</li>
          <li>Reducción permanente</li>
          <li>Zonas faciales y corporales</li>
          <li>Sesiones rápidas</li>
          <li>Paquetes con descuento</li>
        </ul>
        <div class="svc-row__meta">
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Duración</span>
            <span class="svc-row__meta-value">15 – 45 min</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Protocolo</span>
            <span class="svc-row__meta-value">6 – 8 sesiones</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Frecuencia</span>
            <span class="svc-row__meta-value">Cada 4 – 6 sem</span>
          </div>
        </div>
        <a href="/#reservar" class="btn btn--primary" style="align-self:flex-start;margin-top:8px;">Reservar láser</a>
      </div>
    </article>

    <!-- ============ 03 · CONTROL DE PESO ============ -->
    <header class="svc-cat" id="weight">
      <span class="svc-cat__num">— 03 / Bienestar &amp; Metabolismo</span>
      <h2 class="svc-cat__title">Control de <em>Peso</em></h2>
      <p class="svc-cat__lead">
        Programas médicos supervisados con Semaglutide y asesoría nutricional
        personalizada para resultados reales y sostenibles en el tiempo.
      </p>
    </header>

    <article class="svc-row svc-row--flip" id="weight-row">
      <div class="svc-row__media" data-reveal="right">
        <img src="/assets/0d9bddfc-7eeb-4e75-ad7d-2df7ee7b4af1.jpg" alt="Control de peso médico">
      </div>
      <div class="svc-row__body" data-reveal="left">
        <span class="svc-row__num">— Control de Peso</span>
        <h2 class="svc-row__title">Programa <em>Médico de Peso</em></h2>
        <div class="svc-row__price">
          <span class="svc-row__price-prefix">Consulta</span>
          <span class="svc-row__price-value">$75</span>
        </div>
        <p class="svc-row__desc">
          Programa supervisado con evaluación metabólica, plan nutricional personalizado
          y opciones farmacológicas cuando corresponde (Semaglutide, fentermina).
          Seguimiento mensual con báscula clínica y mediciones de composición corporal.
        </p>
        <ul class="svc-row__perks">
          <li>Evaluación metabólica inicial</li>
          <li>Plan nutricional a medida</li>
          <li>Semaglutide supervisado</li>
          <li>Mediciones mensuales</li>
          <li>Apoyo continuo por SMS</li>
          <li>Resultados sostenibles</li>
        </ul>
        <div class="svc-row__meta">
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Consulta inicial</span>
            <span class="svc-row__meta-value">$75</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Seguimiento</span>
            <span class="svc-row__meta-value">$45/mes</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Duración</span>
            <span class="svc-row__meta-value">3 – 6 meses</span>
          </div>
        </div>
        <a href="/#reservar" class="btn btn--primary" style="align-self:flex-start;margin-top:8px;">Comenzar plan</a>
      </div>
    </article>

    <!-- ============ 04 · MANEJO DEL DOLOR ============ -->
    <header class="svc-cat" id="pain">
      <span class="svc-cat__num">— 04 / Rehabilitación &amp; Alivio</span>
      <h2 class="svc-cat__title">Manejo del <em>Dolor</em></h2>
      <p class="svc-cat__lead">
        Inyecciones terapéuticas, fisioterapia y tratamientos especializados para aliviar
        el dolor articular y muscular, recuperar movilidad y mejorar tu calidad de vida.
      </p>
    </header>

    <article class="svc-row" id="pain-row">
      <div class="svc-row__media" data-reveal="left">
        <img src="/assets/0227eed2-99c0-4006-841c-43f744b14ab7.jpg" alt="Manejo del dolor">
      </div>
      <div class="svc-row__body" data-reveal="right">
        <span class="svc-row__num">— Manejo del Dolor</span>
        <h2 class="svc-row__title">Alivio &amp; <em>Rehabilitación</em></h2>
        <div class="svc-row__price">
          <span class="svc-row__price-prefix">Consulta</span>
          <span class="svc-row__price-value">$65</span>
        </div>
        <p class="svc-row__desc">
          Evaluación médica del dolor con plan de tratamiento personalizado: inyecciones
          terapéuticas, infiltraciones articulares, fisioterapia guiada y técnicas de
          rehabilitación para dolor de espalda, rodillas, hombros y articulaciones.
        </p>
        <ul class="svc-row__perks">
          <li>Evaluación médica del dolor</li>
          <li>Inyecciones terapéuticas</li>
          <li>Infiltraciones articulares</li>
          <li>Fisioterapia guiada</li>
          <li>Plan de rehabilitación</li>
          <li>Seguimiento personalizado</li>
        </ul>
        <div class="svc-row__meta">
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Consulta</span>
            <span class="svc-row__meta-value">30 min · $65</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Seguimiento</span>
            <span class="svc-row__meta-value">$45/sesión</span>
          </div>
          <div class="svc-row__meta-item">
            <span class="svc-row__meta-label">Enfoque</span>
            <span class="svc-row__meta-value">No quirúrgico</span>
          </div>
        </div>
        <a href="/#reservar" class="btn btn--primary" style="align-self:flex-start;margin-top:8px;">Reservar consulta</a>
      </div>
    </article>

  </div>
</section>

<!-- CTA Banner -->
<section class="section section--tight">
  <div class="container">
    <div class="cta-banner" data-reveal="up-lg">
      <h2 class="cta-banner__title">
        ¿Lista para tu <em>primera consulta</em>?
      </h2>
      <div class="cta-banner__actions">
        <a href="/#reservar" class="btn btn--primary">Reservar Cita Online</a>
        <a href="tel:3056398301" class="btn btn--ghost" style="color:var(--cream);border-color:rgba(251,246,240,0.4);">o llama (305) 639-8301</a>
        <span class="cta-banner__note">Consulta inicial estética gratuita · Sin compromiso</span>
      </div>
    </div>
  </div>
</section>`;
export default html;
