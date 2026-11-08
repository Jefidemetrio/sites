/**
 * Navigation.tsx - Menu multicanal responsivo
 * Integração com design system: variables.css, typography.css
 * Raio padrão: 0.375rem
 */

import '../assets/css/typography.css';

export const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-wrapper">
          <a href="/" className="logo">
            <span className="logo-icon"></span>
            <span className="logo-text">Dinâmicos</span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="/servicos" className="nav-link">
                Serviços
              </a>
            </li>
            <li>
              <a href="/empresas" className="nav-link">
                Empresas
              </a>
            </li>
            <li>
              <a href="/casos" className="nav-link">
                Casos de Sucesso
              </a>
            </li>
            <li>
              <a href="/contacto" className="nav-link">
                Contato
              </a>
            </li>
          </ul>
          <div className="nav-cta">
            <button className="btn btn-accent">Falar com especialista</button>
          </div>
        </div>
      </div>
    </nav>
  );
};