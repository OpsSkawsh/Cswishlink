import Layout from '@/components/Layout';
import { CheckCircle, Users, Target, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "We uphold the highest standards of ethical business practices and transparency."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for exceptional quality in every aspect of our operations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnerships and collective achievement."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace cutting-edge solutions and forward-thinking strategies."
    }
  ];

  const milestones = [
    { year: "2020", event: "Company Founded", description: "CSWISHLINK Private Limited established with a vision for corporate excellence." },
    { year: "2021", event: "First Subsidiary", description: "Strategic acquisition of Skawsh, marking our entry into technology solutions." },
    { year: "2022", event: "Market Expansion", description: "Expanded operations and established key industry partnerships." },
    { year: "2023", event: "Growth Milestone", description: "Achieved significant revenue growth and market recognition." },
    { year: "2024", event: "Innovation Hub", description: "Launched innovation initiatives and strategic development programs." }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-hero-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-up px-2">
            About CSWISHLINK
          </h1>
          <p className="text-base md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-up px-2" style={{ animationDelay: '0.1s' }}>
            CSWISHLINK Private Limited envisions creating a dynamic ecosystem of innovative and technology-driven businesses that redefine convenience and lifestyle solutions for modern India. As the parent company of Skawsh, our first subsidiary, we are committed to fostering a network of impactful ventures that combine cutting-edge technology, operational excellence, and customer-centric solutions. Our mission is to empower our subsidiaries to scale responsibly, drive meaningful change, and set new standards in their respective industries, while building a legacy of trust, innovation, and sustainable growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">Our Mission</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6 px-2">
                To drive sustainable growth and innovation through strategic investments and 
                partnerships that create exceptional value for our stakeholders, employees, 
                and the communities we serve.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2">
                We are committed to fostering an ecosystem of excellence where our subsidiaries 
                can thrive and make meaningful impacts in their respective industries.
              </p>
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">Our Vision</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6 px-2">
                To be recognized as a leading corporate holding company that sets the standard 
                for strategic excellence, innovation, and sustainable business practices.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2">
                We envision a future where our diverse portfolio of companies leads 
                transformational change across industries, creating lasting positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">Our Core Values</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              The principles that guide our decisions and define our corporate culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="corporate-card p-4 md:p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">Our Journey</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Key milestones that have shaped our growth and success.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block"></div>
            
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="relative flex items-start sm:items-center animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-4 md:left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="sm:ml-16 md:ml-20 corporate-card p-4 md:p-6 w-full">
                    <div className="flex flex-col">
                      <div>
                        <span className="inline-block px-3 py-1 text-xs md:text-sm font-semibold text-primary bg-primary/10 rounded-full mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{milestone.event}</h3>
                        <p className="text-muted-foreground text-sm md:text-base">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;