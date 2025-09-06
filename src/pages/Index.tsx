import { useEffect } from 'react';
import Hero from '@/components/Hero';
import SubsidiaryCard from '@/components/SubsidiaryCard';
import Layout from '@/components/Layout';
import { Building2, Shield, Lightbulb, Globe } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Only set title for preview environment (lovable.app domains)
    if (window.location.hostname.includes('lovable.app')) {
      document.title = "CSWISHLINK Private Limited - Leading Corporate Solutions";
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* About CSWISHLINK */}
      <section id="about" className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">
              About <span className="text-gradient">CSWISHLINK</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
              Founded in 2025, CSWISHLINK Private Limited aims to create a network of impactful ventures that drive meaningful change in their respective industries. Our vision is to foster growth, innovation, and sustainable development while building trust with customers, partners, and investors alike.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">Our Vision & Mission</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="corporate-card card-variant-purple p-4 md:p-6 lg:p-8 text-center animate-fade-up hover-tilt-3d cursor-pointer" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3 md:mb-4">Vision</h3>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                To create a dynamic ecosystem of technology-driven businesses that transform convenience and lifestyle solutions in India.
              </p>
            </div>
            
            <div className="corporate-card card-variant-info p-4 md:p-6 lg:p-8 text-center animate-fade-up hover-tilt-3d cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3 md:mb-4">Mission</h3>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                To empower our subsidiaries to innovate, scale responsibly, and deliver exceptional value through customer-centric solutions and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our First Subsidiary */}
      <section id="subsidiaries" className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">Our First Subsidiary – Skawsh</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="corporate-card card-variant-success p-4 md:p-6 lg:p-8 text-center animate-fade-up hover-pop-out cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 md:mb-6 lg:mb-8">
                <img 
                  src="/lovable-uploads/732a2299-c03a-451c-b8f2-32b57268d1c9.png" 
                  alt="Skawsh logo" 
                  className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain mx-auto"
                />
              </div>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed px-2">
                Skawsh, our first venture, is a technology-driven platform that connects customers with trusted laundry and home service providers. By combining innovation, convenience, and operational efficiency, Skawsh ensures a seamless experience for customers—from scheduling pick-ups to timely delivery of freshly cleaned clothes—while empowering partner providers to grow their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">Why Choose Us</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Our core values guide everything we do and define who we are as an organization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="corporate-card p-4 md:p-5 lg:p-6 text-center animate-fade-up hover-bounce-scale cursor-pointer" style={{ animationDelay: '0.1s' }}>
              <Lightbulb className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-orange mx-auto mb-3 md:mb-4" />
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-foreground">Innovation at the Core</h3>
            </div>
            
            <div className="corporate-card card-variant-purple p-4 md:p-5 lg:p-6 text-center animate-fade-up hover-bounce-scale cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <Building2 className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-purple mx-auto mb-3 md:mb-4" />
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-foreground">Customer-Focused</h3>
            </div>
            
            <div className="corporate-card card-variant-info p-4 md:p-5 lg:p-6 text-center animate-fade-up hover-bounce-scale cursor-pointer" style={{ animationDelay: '0.3s' }}>
              <Shield className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-info mx-auto mb-3 md:mb-4" />
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-foreground">Operational Excellence</h3>
            </div>

            <div className="corporate-card card-variant-success p-4 md:p-5 lg:p-6 text-center animate-fade-up hover-bounce-scale cursor-pointer" style={{ animationDelay: '0.4s' }}>
              <Globe className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-success mx-auto mb-3 md:mb-4" />
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-foreground">Sustainable Growth</h3>
            </div>

            <div className="corporate-card p-4 md:p-5 lg:p-6 text-center animate-fade-up sm:col-span-2 lg:col-span-1 hover-bounce-scale cursor-pointer" style={{ animationDelay: '0.5s' }}>
              <Shield className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-teal mx-auto mb-3 md:mb-4" />
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-foreground">Transparent & Trustworthy</h3>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
