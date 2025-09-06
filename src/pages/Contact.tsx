import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-hero-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-up px-2">
            Contact Us
          </h1>
          <p className="text-base md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-up px-2" style={{ animationDelay: '0.1s' }}>
            Ready to explore partnership opportunities or learn more about CSWISHLINK? 
            We'd love to hear from you and discuss how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Information */}
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 px-2">Get in Touch</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8 px-2">
                Whether you're an investor, potential partner, or have general inquiries, 
                our team is here to assist you. Reach out through any of the channels below.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 md:space-x-4 px-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm md:text-base">Email</div>
                    <div className="text-muted-foreground text-sm md:text-base">contact@cswishlink.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4 px-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm md:text-base">Phone</div>
                    <div className="text-muted-foreground text-sm md:text-base">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4 px-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm md:text-base">Address</div>
                    <div className="text-muted-foreground text-sm md:text-base">
                      123 Corporate Boulevard<br />
                      Suite 500, Business District<br />
                      New York, NY 10001
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="corporate-card p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company Name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Partnership Inquiry"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your inquiry..."
                      className="min-h-24 md:min-h-32 w-full resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full hero-gradient text-primary-foreground hover-glow text-sm md:text-base"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">Visit Our Office</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 px-2">
              Located in the heart of the business district, our office is easily accessible 
              and designed to foster collaboration and innovation.
            </p>
            
            <div className="corporate-card p-6 md:p-8 max-w-2xl mx-auto">
              <div className="w-full h-48 md:h-64 bg-muted/50 rounded-lg mb-4 md:mb-6 flex items-center justify-center">
                <MapPin className="h-12 w-12 md:h-16 md:w-16 text-primary" />
                {/* In a real implementation, you would integrate Google Maps here */}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">CSWISHLINK Private Limited</h3>
              <p className="text-muted-foreground text-sm md:text-base mb-4">
                123 Corporate Boulevard, Suite 500<br />
                Business District, New York, NY 10001
              </p>
              <Button variant="outline" className="hover-lift">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;