const html = `

<!-- SUBHERO -->
<section class="subhero">
  <div class="subhero__bg">
    <img src="/assets/c181294e-d717-4c7c-a633-daa74715a9a6.jpg" alt="">
  </div>
  <div class="subhero__overlay"></div>
  <div class="container">
    <div class="subhero__content">
      <div class="subhero__crumbs">
        <a href="#">Inicio</a>
        <span>/</span>
        <span>Nosotros</span>
      </div>
      <h1 class="subhero__title">Cuidado <em>familiar</em>,<br>ciencia <em>personalizada</em>.</h1>
      <p class="subhero__lead">
        Una clínica fundada con una convicción simple: cada paciente merece ser
        escuchada, comprendida y tratada con la misma calidez que ofreceríamos
        a nuestra propia familia.
      </p>
    </div>
  </div>
</section>

<!-- ABOUT THE CLINIC -->
<section class="section story">
  <div class="container">
    <div class="story__grid">
      <div class="story__media" data-reveal="left">
        <img src="/assets/30d2969c-fada-462e-8c9c-a9a3deec8437.jpg" alt="Interior de la clínica Professional Ramos Health Care">
        <div class="story__quote">
          Un espacio diseñado para que te sientas en casa desde el momento en que entras.
        </div>
      </div>

      <div class="story__content" data-reveal="right">
        <span class="eyebrow">La clínica</span>
        <h2 class="display story__title">
          Un refugio <em>familiar</em><br>en el corazón de <em>Hialeah</em>.
        </h2>
        <p class="story__p">
          Professional Ramos Health Care es una clínica boutique de medicina estética
          y bienestar ubicada en la 16th Avenue de Hialeah. Desde 2018 atendemos
          a la comunidad hispanohablante de Miami-Dade en un entorno cálido, privado y
          completamente bilingüe.
        </p>
        <p class="story__p">
          Diseñamos cada espacio pensando en tu comodidad: salas de tratamiento privadas
          con luz natural, área de recepción discreta, parqueo gratuito y horarios
          extendidos incluyendo sábados. No somos una cadena — somos una clínica donde
          cada paciente tiene nombre, historia y atención personalizada.
        </p>
        <p class="story__p">
          Más de 2.400 pacientes activas, 127 reseñas verificadas en Google con
          calificación promedio de 5.0 estrellas, y un equipo que recibe a las pacientes
          como recibiría a su propia familia. Eso es Ramos Health Care.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- VALUES -->
<section class="section" id="nosotros-valores">
  <div class="container">
    <div style="text-align:center;display:flex;flex-direction:column;align-items:center;gap:18px;margin-bottom:56px;" data-reveal="">
      <span class="eyebrow centered">Nuestros valores</span>
      <h2 class="display" style="max-width:24ch;margin:0;font-size:clamp(36px,4.5vw,60px);">
        Tres principios que <em>guían</em> cada cita.
      </h2>
    </div>

    <div class="values" data-stagger="">
      <div class="value" data-num="01" data-reveal="" style="--i:0;">
        <div class="value__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <span class="value__num">Cercanía</span>
        <h3 class="value__title">Te tratamos como familia</h3>
        <p class="value__desc">
          Ana Gloria atiende personalmente cada cita, en el idioma que prefieras.
          Sin prisas, sin frialdad clínica — sin números de paciente.
        </p>
      </div>

      <div class="value" data-num="02" data-reveal="" style="--i:1;">
        <div class="value__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
        </div>
        <span class="value__num">Excelencia</span>
        <h3 class="value__title">Ciencia clínica avanzada</h3>
        <p class="value__desc">
          Trabajamos únicamente con productos aprobados por la FDA, técnicas validadas
          clínicamente y formación continua en medicina estética.
        </p>
      </div>

      <div class="value" data-num="03" data-reveal="" style="--i:2;">
        <div class="value__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 7v5l3 2"></path>
          </svg>
        </div>
        <span class="value__num">Naturalidad</span>
        <h3 class="value__title">Realzar, nunca transformar</h3>
        <p class="value__desc">
          Nuestra filosofía es sutil: queremos que veas la diferencia en el espejo —
          no que el resto del mundo note que tuviste un tratamiento.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CREDENTIALS -->
<section class="section" style="background:var(--cream-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
  <div class="container">
    <div class="about__grid">
      <div class="about__visual" data-reveal="left">
        <img src="/assets/681f5e21-425b-46d0-a188-7e6c954295fd.jpg" alt="Ana Gloria Ramos en consulta">
        <div class="about__sig">
          <div class="about__sig-name">Ana Gloria Ramos</div>
          <div class="about__sig-role">MEC · Especialista en Medicina Estética</div>
        </div>
      </div>

      <div class="about__content" data-reveal="right">
        <span class="eyebrow">Credenciales</span>
        <h2 class="display about__title">
          Formación, licencias <em>y números</em>.
        </h2>
        <p class="about__bio">
          Transparencia clínica completa: Ana Gloria está activamente licenciada como
          Médica Estética Certificada por la Academia Americana de Medicina Estética (AAME) y el Estado de Florida, con número
          de identificación nacional (NPI) verificable.
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
            <div class="credential__label">Activa desde</div>
            <div class="credential__value">Junio 2014</div>
          </div>
          <div>
            <div class="credential__label">Idiomas</div>
            <div class="credential__value">Español · English</div>
          </div>
          <div>
            <div class="credential__label">EIN Corporativo</div>
            <div class="credential__value">92-7845231</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- GALLERY -->
<section class="section">
  <div class="container">
    <div style="display:flex;justify-content:space-between;align-items:end;margin-bottom:48px;gap:32px;flex-wrap:wrap;" data-reveal="">
      <div>
        <span class="eyebrow">La clínica</span>
        <h2 class="display" style="margin-top:18px;font-size:clamp(36px,4vw,56px);">
          Un espacio diseñado<br>para <em>tu bienestar</em>.
        </h2>
      </div>
      <p class="lead" style="max-width:36ch;margin:0;">
        Ambiente cálido, luz natural y privacidad absoluta. Cada consulta sucede
        en un entorno pensado para que te sientas en casa.
      </p>
    </div>

    <div class="gallery" data-stagger="">
      <div class="gallery__item gallery__item--wide gallery__item--tall" data-reveal="" style="--i:0;">
        <img src="/assets/7bc924db-fa0e-4e73-a8c1-6fade4a6bacb.jpg" alt="Recepción de la clínica">
      </div>
      <div class="gallery__item" data-reveal="" style="--i:1;">
        <img src="/assets/ee59eccf-0335-4345-b38f-2a346dcb33e0.jpg" alt="Sala de tratamiento">
      </div>
      <div class="gallery__item" data-reveal="" style="--i:2;">
        <img src="/assets/9ac6ebce-6e7a-44aa-95f1-f1e5c47e7495.jpg" alt="Productos de cuidado">
      </div>
      <div class="gallery__item gallery__item--wide" data-reveal="" style="--i:3;">
        <img src="/assets/c5681754-b4d2-48aa-8ac3-49b77cdf92e5.jpg" alt="Detalle del consultorio">
      </div>
      <div class="gallery__item" data-reveal="" style="--i:4;">
        <img src="/assets/7a8fb1a5-7b78-40f9-98e5-edb2b05c316a.jpg" alt="Paciente satisfecha">
      </div>
      <div class="gallery__item" data-reveal="" style="--i:5;">
        <img src="/assets/a858bd48-68a6-4e6b-878a-1374527374e3.jpg" alt="Detalle floral">
      </div>
    </div>
  </div>
</section>

<!-- STATS strip -->
<section class="section section--tight location" style="padding:48px 0;">
  <div class="container">
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:32px;text-align:center;" data-stagger="">
      <div data-reveal="" style="--i:0;">
        <div style="font-family:var(--serif);font-size:clamp(40px,4vw,64px);color:var(--gold-soft);line-height:1;"><em>5.0</em></div>
        <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(251,246,240,0.65);margin-top:10px;">Estrellas Google</div>
      </div>
      <div data-reveal="" style="--i:1;">
        <div style="font-family:var(--serif);font-size:clamp(40px,4vw,64px);color:var(--gold-soft);line-height:1;">+2.400</div>
        <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(251,246,240,0.65);margin-top:10px;">Pacientes activas</div>
      </div>
      <div data-reveal="" style="--i:2;">
        <div style="font-family:var(--serif);font-size:clamp(40px,4vw,64px);color:var(--gold-soft);line-height:1;">54</div>
        <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(251,246,240,0.65);margin-top:10px;">Reseñas verificadas</div>
      </div>
      <div data-reveal="" style="--i:3;">
        <div style="font-family:var(--serif);font-size:clamp(40px,4vw,64px);color:var(--gold-soft);line-height:1;">4<em style="font-size:0.5em;"> años</em></div>
        <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(251,246,240,0.65);margin-top:10px;">Cuidando Hialeah</div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="section" style="background:var(--cream-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
  <div class="container">
    <div class="faq__grid">
      <div data-reveal="">
        <span class="eyebrow">Preguntas frecuentes</span>
        <h2 class="display" style="margin-top:18px;font-size:clamp(36px,4vw,56px);">
          Lo que toda paciente <em>quiere saber</em>.
        </h2>
        <p class="lead" style="margin-top:20px;max-width:36ch;">
          ¿No encuentras tu pregunta? Llámanos al
          <a href="tel:3056398301" style="color:var(--burgundy);border-bottom:1px solid var(--burgundy);">(305) 639-8301</a>
          — siempre respondemos en el día.
        </p>
      </div>

      <div class="faq__list" data-reveal="right">
        <div class="faq__item">
          <div class="faq__item-head">
            <h3 class="faq__item-q">¿Cuánto duran los resultados del bótox?</h3>
            <div class="faq__item-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg></div>
          </div>
          <div class="faq__item-body"><div><p>Los resultados son visibles entre 5 y 7 días después del tratamiento y duran aproximadamente de 3 a 4 meses. Con tratamientos regulares, muchas pacientes notan que los efectos se prolongan progresivamente.</p></div></div>
        </div>

        <div class="faq__item">
          <div class="faq__item-head">
            <h3 class="faq__item-q">¿Aceptan seguros médicos?</h3>
            <div class="faq__item-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg></div>
          </div>
          <div class="faq__item-body"><div><p>Para servicios médicos como el manejo del dolor aceptamos varios seguros mayores. Los tratamientos estéticos (bótox, fillers, faciales), la terapia IV y el control de peso son de pago directo. Llámanos para confirmar la cobertura específica de tu seguro.</p></div></div>
        </div>

        <div class="faq__item">
          <div class="faq__item-head">
            <h3 class="faq__item-q">¿Cómo es la primera consulta?</h3>
            <div class="faq__item-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg></div>
          </div>
          <div class="faq__item-body"><div><p>Dura unos 20 minutos y es gratuita para tratamientos estéticos. Ana Gloria evalúa tu piel, escucha tus expectativas, te explica las opciones disponibles y diseña un plan a tu medida. Sin compromiso de continuar.</p></div></div>
        </div>

        <div class="faq__item">
          <div class="faq__item-head">
            <h3 class="faq__item-q">¿Hay tiempo de recuperación después del bótox o fillers?</h3>
            <div class="faq__item-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg></div>
          </div>
          <div class="faq__item-body"><div><p>El bótox no requiere recuperación — puedes volver a tu rutina inmediatamente. Los rellenos pueden generar enrojecimiento o pequeños moretones que desaparecen en 24-48 horas. Te entregamos un instructivo con cuidados específicos.</p></div></div>
        </div>

        <div class="faq__item">
          <div class="faq__item-head">
            <h3 class="faq__item-q">¿Puedo cancelar o reagendar mi cita?</h3>
            <div class="faq__item-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg></div>
          </div>
          <div class="faq__item-body"><div><p>Sí, sin costo siempre que avises con al menos 24 horas de anticipación. Las cancelaciones con menos tiempo o las ausencias sin aviso pueden generar un cargo del 50% del servicio.</p></div></div>
        </div>

        <div class="faq__item">
          <div class="faq__item-head">
            <h3 class="faq__item-q">¿Atienden en español?</h3>
            <div class="faq__item-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg></div>
          </div>
          <div class="faq__item-body"><div><p>Por supuesto. Ana Gloria y todo el equipo son completamente bilingües (español/inglés). Los formularios, recordatorios SMS y la web están disponibles en ambos idiomas.</p></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section section--tight">
  <div class="container">
    <div class="cta-banner" data-reveal="up-lg">
      <h2 class="cta-banner__title">
        Conoce a Ana Gloria<br>en una <em>consulta gratuita</em>.
      </h2>
      <div class="cta-banner__actions">
        <a href="/#reservar" class="btn btn--primary">Reservar Cita Online</a>
        <a href="tel:3056398301" class="btn btn--ghost" style="color:var(--cream);border-color:rgba(251,246,240,0.4);">o llama (305) 639-8301</a>
        <span class="cta-banner__note">Consulta estética inicial gratuita · 20 minutos</span>
      </div>
    </div>
  </div>
</section>`;
export default html;
