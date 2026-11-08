/**
 * CompanyCard.tsx - Card de empresa da holding
 * Integração com design system: variables.css, typography.css
 * Raio padrão: 0.375rem
 * Cores variáveis por empresa: --primary-corp-1 a --primary-corp-4
 */


export const CompanyCard: React.FC<{ id: string; name: string; segment: string; color: string }> = ({ id, name, segment, color }) => {
  return (
    <div className="company-card" style={{ borderLeftColor: color }} id={id}>
      <div className="company-card-header">
        <span className="company-segment">{segment}</span>
        <h3 className="company-card-name">{name}</h3>
      </div>
      <p className="company-card-description">
        Empresa dedicada à prestação de serviços especializados para PMEs portuguesas.
      </p>
      <a href={`/empresa/${id}`} className="company-card-link">
        Ver detalhes →
      </a>
    </div>
  );
};