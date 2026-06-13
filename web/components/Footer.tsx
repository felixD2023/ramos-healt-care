import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-line">
              <img src="/assets/3f5affe9-a4aa-45d9-8d1e-69a84df8cb54.png" alt="" className="footer__logo" />
              <div className="footer__brand-text">
                Professional <em>Ramos</em><br />Health Care
              </div>
            </div>
            <p className="footer__desc">
              Clínica de medicina estética y bienestar dirigida por Ana Gloria Ramos,
              MEC. Cuidando a la comunidad de Hialeah desde 2018.
            </p>
            <div className="footer__socials">
              <a href="https://instagram.com/ramoshealthcare" target="_blank" rel="noopener" className="footer__social" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
              </a>
              <a href="https://facebook.com/61568270319537" target="_blank" rel="noopener" className="footer__social" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://wa.me/13056398301" target="_blank" rel="noopener" className="footer__social" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11 11 0 0 0 3.7 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5zM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.9 1 1-2.8-.2-.3A8 8 0 1 1 12 20zm4.5-6c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.4 0-.4.2-.5l.3-.5.2-.4c.1-.2 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.7 2.7 0 0 0-.9 2.1c0 1.2.9 2.4 1 2.6.1.2 1.8 2.7 4.3 3.8l1.4.5c.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.4-.2z" /></svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Tratamientos</div>
            <ul>
              <li><Link href="/servicios#iv">Terapia Intravenosa</Link></li>
              <li><Link href="/servicios#estetica">Medicina Estética</Link></li>
              <li><Link href="/servicios#weight">Control de Peso</Link></li>
              <li><Link href="/servicios#pain">Manejo del Dolor</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Clínica</div>
            <ul>
              <li><Link href="/nosotros">Sobre nosotros</Link></li>
              <li><Link href="/#testimonios">Reseñas</Link></li>
              <li><Link href="/#reservar">Reservar cita</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Contacto</div>
            <ul>
              <li>3750 W 16th Ave, Suite 136U</li>
              <li>Hialeah, FL 33012</li>
              <li><a href="tel:3056398301">(305) 639-8301</a></li>
              <li><a href="mailto:ramoshealthcare@gmail.com">ramoshealthcare@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Professional Ramos Health Care Services Inc. · EIN 92-7845231</span>
          <div className="footer__legal">
            <a href="#">Política de privacidad</a>
            <a href="#">Términos</a>
            <a href="#">HIPAA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
