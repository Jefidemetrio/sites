/**
 * CaseStudy.tsx - Estudo de caso antes/depois
 * Integração com design system: variables.css, typography.css
 * Feature: comparação before/after com métricas
 * Raio padrão: 0.375rem
 */


export const CaseStudy: React.FC<{ id: string; title: string; client: string; category: string; beforeMetrics: string; afterMetrics: string; href: string }> = ({
  id, title, client, category, beforeMetrics, afterMetrics, href,
}) => {
  return (
    <article className="case-study" id={id}>
      <div className="case-study-header">
        <div className="case-study-category">{category}</div>
        <h3 className="case-study-title">{title}</h3>
      </div>
      <div className="case-study-client">Cliente: {client}</div>
      <div className="case-study-comparison">
        <div className="case-study-before">
          <h4>Antes</h4>
          <p className="case-study-metrics">{beforeMetrics}</p>
        </div>
        <div className="case-study-after">
          <h4>Depois</h4>
          <p className="case-study-metrics">{afterMetrics}</p>
        </div>
      </div>
      <a href={href} className="case-study-link">
        Ver estudo completo →
      </a>
    </article>
  );
};