import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col relative" style={{ backgroundColor: 'hsl(var(--page-background))' }}>
      {/* Responsive Background Image */}
      <div 
        className="fixed inset-0 bg-no-repeat bg-center opacity-10 md:opacity-15 pointer-events-none z-0"
        style={{ 
          backgroundImage: `url(/lovable-uploads/a0648416-1c5d-4ac3-969e-fdb8ce47217c.png)`,
          backgroundSize: isMobile ? '120px 120px' : '200px 200px'
        }}
      />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;