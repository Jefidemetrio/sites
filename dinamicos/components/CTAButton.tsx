/**
 * CTAButton.tsx - Botão CTA contextualizado
 * Integração com design system: variables.css, typography.css
 * Variantes: primary, secondary, accent
 * Raio padrão: 0.375rem
 */

import '../design-system/typography.css';

export const CTAButton: React.FC<{ variant: 'primary' | 'secondary' | 'accent'; size: 'sm' | 'md' | 'lg'; children: React.ReactNode; onClick?: () => void }> = ({ variant, size, children, onClick }) => {
  const variantClasses = {
    primary: 'btn-accent',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
  };

  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };

  return (
    <button
      className={`cta-button ${variantClasses[variant]} ${sizeClasses[size]}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};