import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', sectionId: 'home', isScroll: false },
    { name: 'About Us', href: '/about', sectionId: 'about', isScroll: true },
    { name: 'Subsidiaries', href: '/subsidiaries', sectionId: 'subsidiaries', isScroll: true },
    { name: 'Contact', href: '/contact', sectionId: 'contact', isScroll: true }
  ];

  const getActiveIndex = () => {
    return navigation.findIndex(item => isActive(item));
  };

  const handleNavClick = (item: any) => {
    setActiveSection(item.sectionId);
    if (item.isScroll) {
      // If not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(item.sectionId);
          if (element) {
            const headerHeight = isScrolled || isMobile ? 64 : 80; // h-16 = 64px, h-20 = 80px
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(item.sectionId);
        if (element) {
          const headerHeight = isScrolled || isMobile ? 64 : 80; // h-16 = 64px, h-20 = 80px
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }
    } else {
      // Home button - navigate and scroll to top
      navigate(item.href);
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const isActive = (item: any) => {
    // For non-home pages, only match exact pathname
    if (location.pathname !== '/') {
      return location.pathname === item.href;
    }
    
    // For home page, check scroll sections or home section
    if (item.isScroll) {
      return activeSection === item.sectionId;
    }
    
    // For home button on home page, active only if at top or no specific section active
    return item.href === '/' && (activeSection === 'home' || activeSection === '');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-border transition-all duration-300 ${
      isScrolled || isMobile ? 'h-16' : 'h-20'
    }`} style={{ backgroundColor: 'hsl(var(--background)/0.95)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 no-underline">
            <img 
              src="/lovable-uploads/a0648416-1c5d-4ac3-969e-fdb8ce47217c.png" 
              alt="CSWISHLINK" 
              className={`transition-all duration-300 ring-2 ring-primary/20 rounded-full drop-shadow-sm ${
                isScrolled || isMobile ? 'h-8 w-8 md:h-10 md:w-10' : 'h-10 w-10 md:h-12 md:w-12'
              }`}
            />
            <span className={`font-semibold text-foreground transition-all duration-300 ${
              isScrolled || isMobile ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
            }`}>
              {isMobile ? 'CSWISHLINK' : 'CSWISHLINK'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-all duration-200 px-4 py-2 rounded-lg h-10 flex items-center justify-center min-w-[80px] ${
                  isActive(item)
                    ? 'text-primary font-semibold bg-primary/10 border border-primary/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-accent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-b border-border animate-fade-in bg-background/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                  isActive(item)
                    ? 'text-primary bg-primary/10 font-semibold border border-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;