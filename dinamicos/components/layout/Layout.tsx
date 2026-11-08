/**
 * Layout.tsx - Layout base compartilhado
 * Estrutura principal com header, main, footer
 */

import { Navigation } from './Navigation';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="app-layout">
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};