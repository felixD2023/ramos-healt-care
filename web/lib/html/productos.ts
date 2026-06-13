const html = `

<!-- SUBHERO -->
<section class="subhero">
  <div class="subhero__bg">
    <img src="/assets/fb8dff38-d2f8-440e-9c26-03e7e9f8cfb5.jpg" alt="">
  </div>
  <div class="subhero__overlay"></div>
  <div class="container">
    <div class="subhero__content">
      <div class="subhero__crumbs">
        <a href="#">Inicio</a>
        <span>/</span>
        <span>Productos</span>
      </div>
      <h1 class="subhero__title">Nuestros <em>productos</em>.</h1>
      <p class="subhero__lead">
        Cosmecéuticos profesionales seleccionados por Ana Gloria para complementar
        cada tratamiento. Solo marcas que usamos en consulta y que recomendaríamos
        a nuestra propia familia.
      </p>
    </div>
  </div>
</section>

<!-- FILTERS + PRODUCTS -->
<section class="section">
  <div class="container">

    <div class="news-categories" data-reveal="" style="margin-bottom:32px;padding-bottom:0;border-bottom:0;">
      <button class="news-cat is-active">Todos</button>
      <button class="news-cat">Sérums</button>
      <button class="news-cat">Hidratantes</button>
      <button class="news-cat">Protección solar</button>
      <button class="news-cat">Tratamientos</button>
      <button class="news-cat">Mascarillas</button>
    </div>

    <div class="products-grid products-grid--lg" data-stagger="">
      <article class="product-card" data-reveal="" style="--i:0;" data-cat="sérums">
        <div class="product-card__media">
          <span class="product-card__badge">Best seller</span>
          <img src="/assets/b5a29426-2c6a-48bf-8bc8-825abedfe15e.jpg" alt="Sérum vitamina C">
        </div>
        <div class="product-card__body">
          <span class="product-card__brand">SkinCeuticals</span>
          <h3 class="product-card__name">Sérum Vitamina C 15%</h3>
          <p class="product-card__desc">Antioxidante diario en L-ácido ascórbico estabilizado. Ilumina y unifica el tono.</p>
          <div class="product-card__foot">
            <span class="product-card__price">$165</span>
            <span class="product-card__size">30 ml</span>
          </div>
        </div>
      </article>

      <article class="product-card" data-reveal="" style="--i:1;" data-cat="protección solar">
        <div class="product-card__media">
          <img src="/assets/ddde2319-3c78-4a14-a56b-cc0e30651fa8.jpg" alt="Crema hidratante">
        </div>
        <div class="product-card__body">
          <span class="product-card__brand">EltaMD</span>
          <h3 class="product-card__name">Crema Hidratante FPS 50+</h3>
          <p class="product-card__desc">Protección solar mineral con niacinamida. Acabado invisible, apto para piel sensible.</p>
          <div class="product-card__foot">
            <span class="product-card__price">$89</span>
            <span class="product-card__size">85 ml</span>
          </div>
        </div>
      </article>

      <article class="product-card" data-reveal="" style="--i:2;" data-cat="hidratantes">
        <div class="product-card__media">
          <span class="product-card__badge">Nuevo</span>
          <img src="/assets/a71803bd-aa54-4532-b9c6-f50d42f70ea4.jpg" alt="Ácido hialurónico">
        </div>
        <div class="product-card__body">
          <span class="product-card__brand">SkinMedica</span>
          <h3 class="product-card__name">Ácido Hialurónico HA5</h3>
          <p class="product-card__desc">Hidratación profunda multi-peso. Suaviza líneas finas y rellena la piel desde dentro.</p>
          <div class="product-card__foot">
            <span class="product-card__price">$178</span>
            <span class="product-card__size">28 ml</span>
          </div>
        </div>
      </article>

      <article class="product-card" data-reveal="" style="--i:3;" data-cat="mascarillas">
        <div class="product-card__media">
          <img src="/assets/6446e34c-083f-4b7d-98d6-bad411df1c2e.jpg" alt="Mascarilla bioactiva">
        </div>
        <div class="product-card__body">
          <span class="product-card__brand">iS Clinical</span>
          <h3 class="product-card__name">Mascarilla Bioactiva</h3>
          <p class="product-card__desc">Tratamiento intensivo semanal con péptidos. Reduce rojez y restaura luminosidad.</p>
          <div class="product-card__foot">
            <span class="product-card__price">$72</span>
            <span class="product-card__size">120 ml</span>
          </div>
        </div>
      </article>

      <article class="product-card" data-reveal="" style="--i:4;" data-cat="tratamientos">
        <div class="product-card__media">
          <img src="/assets/a3ae27bb-9c08-4121-b153-5bb41e6da5bb.jpg" alt="Retinol nocturno">
        </div>
        <div class="product-card__body">
          <span class="product-card__brand">ZO Skin Health</span>
          <h3 class="product-card__name">Retinol Renovador 0.5%</h3>
          <p class="product-card__desc">Tratamiento nocturno antienvejecimiento. Acelera renovación celular y suaviza textura.</p>
          <div class="product-card__foot">
            <span class="product-card__price">$135</span>
            <span class="product-card__size">30 ml</span>
          </div>
        </div>
      </article>

      <article class="product-card" data-reveal="" style="--i:5;" data-cat="sérums">
        <div class="product-card__media">
          <span class="product-card__badge">Favorito</span>
          <img src="/assets/42ebc269-ac77-4b45-b26d-5aeffa908076.jpg" alt="Sérum reparador">
        </div>
        <div class="product-card__body">
          <span class="product-card__brand">SkinCeuticals</span>
          <h3 class="product-card__name">Phloretin CF Sérum</h3>
          <p class="product-card__desc">Antioxidante diurno para piel mixta y grasa. Previene daño solar y manchas.</p>
          <div class="product-card__foot">
            <span class="product-card__price">$182</span>
            <span class="product-card__size">30 ml</span>
          </div>
        </div>
      </article>

      <article class="product-card" data-reveal="" style="--i:6;" data-cat="hidratantes">
        <div class="product-card__media">
          <img src="/assets/1c952fef-d7cf-474b-8bee-e082e38b5f39.jpg" alt="Crema redensificante">
        </div>
        <div class="product-card__body">
          <span class="product-card__brand">SkinMedica</span>
          <h3 class="product-card__name">TNS Advanced+ Sérum</h3>
          <p class="product-card__desc">Factor de crecimiento avanzado. Redensifica, mejora firmeza y reduce arrugas profundas.</p>
          <div class="product-card__foot">
            <span class="product-card__price">$295</span>
            <span class="product-card__size">28 ml</span>
          </div>
        </div>
      </article>

      <article class="product-card" data-reveal="" style="--i:7;" data-cat="tratamientos">
        <div class="product-card__media">
          <img src="/assets/66697538-06ba-43a9-9d21-cd2cfa5ecddd.jpg" alt="Limpiador facial">
        </div>
        <div class="product-card__body">
          <span class="product-card__brand">iS Clinical</span>
          <h3 class="product-card__name">Cleansing Complex</h3>
          <p class="product-card__desc">Limpiador profundo con ácido salicílico. Apto para uso diario en todo tipo de piel.</p>
          <div class="product-card__foot">
            <span class="product-card__price">$48</span>
            <span class="product-card__size">180 ml</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- INFO STRIP -->
<section class="section section--tight" style="background:var(--cream-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
  <div class="container">
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;align-items:start;" data-stagger="">
      <div data-reveal="" style="--i:0;display:flex;flex-direction:column;gap:8px;">
        <div style="font-family:var(--serif);font-style:italic;font-size:36px;color:var(--burgundy);line-height:1;">01</div>
        <div style="font-family:var(--serif);font-size:20px;color:var(--burgundy);">Consulta personalizada</div>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.6;margin:0;max-width:38ch;">
          Antes de comprar, te recomendamos una evaluación de piel sin costo para asegurar que cada producto es el adecuado para ti.
        </p>
      </div>
      <div data-reveal="" style="--i:1;display:flex;flex-direction:column;gap:8px;">
        <div style="font-family:var(--serif);font-style:italic;font-size:36px;color:var(--burgundy);line-height:1;">02</div>
        <div style="font-family:var(--serif);font-size:20px;color:var(--burgundy);">Disponibles en la clínica</div>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.6;margin:0;max-width:38ch;">
          Todos nuestros productos se venden directamente en la clínica de Hialeah. También puedes reservarlos por teléfono o WhatsApp.
        </p>
      </div>
      <div data-reveal="" style="--i:2;display:flex;flex-direction:column;gap:8px;">
        <div style="font-family:var(--serif);font-style:italic;font-size:36px;color:var(--burgundy);line-height:1;">03</div>
        <div style="font-family:var(--serif);font-size:20px;color:var(--burgundy);">Garantía de autenticidad</div>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.6;margin:0;max-width:38ch;">
          Trabajamos como distribuidor oficial. Cada producto incluye serial verificable directamente con el fabricante.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section section--tight">
  <div class="container">
    <div class="cta-banner" data-reveal="up-lg">
      <h2 class="cta-banner__title">
        ¿Necesitas asesoría<br>para <em>elegir tu rutina</em>?
      </h2>
      <div class="cta-banner__actions">
        <a href="/#reservar" class="btn btn--primary">Agendar consulta gratuita</a>
        <a href="tel:3056398301" class="btn btn--ghost" style="color:var(--cream);border-color:rgba(251,246,240,0.4);">o llama (305) 639-8301</a>
        <span class="cta-banner__note">Evaluación de piel sin compromiso · 20 minutos</span>
      </div>
    </div>
  </div>
</section>`;
export default html;
