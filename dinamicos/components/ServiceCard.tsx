/**
 * ServiceCard.tsx - Card de serviço individual
 * Integração com design system: variables.css, typography.css
 * Raio padrão: 0.375rem
 */

import '../assets/css/typography.css';

export const ServiceCard: React.FC<{ id: string; title: string; description: string; href: string }> = ({ id, title, description, href }) => {
  return (
    <article className="service-card" id={id}>
      <div className="service-card-header">
        <span className="service-icon"></span>
        <h3 className="service-card-title">{title}</h3>
      </div>
      <p className="service-card-description">{description}</p>
      <a href={href} className="service-card-link">
        Saber mais →
      </a>
    </article>
  );
};