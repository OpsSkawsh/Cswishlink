import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-x-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img 
          src="/lovable-uploads/502b1ed2-27b8-4f75-a565-689661692670.png" 
          alt="CSWISHLINK Background" 
          className="w-96 h-96 object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side header with back arrow */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-8">
              <div className="mb-6">
                <Link to="/">
                  <Button variant="outline" className="mb-4 hover-lift p-2">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="flex items-center space-x-4">
                  <img 
                    src="/lovable-uploads/502b1ed2-27b8-4f75-a565-689661692670.png" 
                    alt="CSWISHLINK" 
                    className="h-12 w-12"
                  />
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Privacy Policy</h1>
                    <p className="text-muted-foreground text-sm sm:text-base">CSWISHLINK Private Limited</p>
                  </div>
                </div>
              </div>
              
              {/* Sidebar Navigation */}
              <div className="corporate-card p-6">
                <nav className="space-y-3">
                  <Link 
                    to="/terms" 
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms and Conditions
                  </Link>
                  <Link 
                    to="/cancellation-refund" 
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cancellation and Refund Policy
                  </Link>
                  <Link 
                    to="/shipping-delivery" 
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Shipping and Delivery Policy
                  </Link>
                  <Link 
                    to="/privacy" 
                    className="flex items-center text-foreground font-medium hover:text-primary transition-colors"
                  >
                    Privacy Policy
                    <span className="ml-2 text-muted-foreground">›</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="corporate-card p-4 sm:p-8 space-y-6">
              <div className="border-b pb-4">
                <p className="text-muted-foreground text-sm sm:text-base">Last updated on Sep 6th 2025</p>
              </div>

              <div className="space-y-6">
                <p className="text-foreground leading-relaxed text-sm sm:text-base break-words">
                  At CSWISHLINK PRIVATE LIMITED, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
                  
                  <ul className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words"><strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and postal address when you voluntarily provide it to us through our website forms, newsletters, or communications.</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words"><strong>Usage Data:</strong> We automatically collect information about how you access and use our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words"><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
                  
                  <ul className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">To provide, operate, and maintain our website and services</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">To improve, personalize, and expand our website and services</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">To understand and analyze how you use our website and services</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">To communicate with you regarding our services, updates, and promotional offers</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">To process transactions and send related information</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Information Sharing and Disclosure</h2>
                  
                  <ul className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">We do not sell, trade, or rent your personal information to third parties without your explicit consent</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">We may share information with trusted service providers who assist us in operating our website and conducting our business</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">We may disclose information when required by law or to protect our rights, property, or safety</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Data Security</h2>
                  
                  <ul className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">We implement appropriate technical and organizational security measures to protect your personal information</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">However, no method of transmission over the internet or electronic storage is 100% secure</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">We cannot guarantee absolute security of your information</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Your Rights</h2>
                  
                  <ul className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">You have the right to access, update, or delete your personal information</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">You can opt-out of receiving promotional communications from us at any time</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">You can disable cookies through your browser settings, though this may affect website functionality</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Contact Us</h2>
                  <p className="text-foreground leading-relaxed text-sm sm:text-base">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                    <p className="text-foreground text-sm sm:text-base"><strong>CSWISHLINK PRIVATE LIMITED</strong></p>
                    <p className="text-muted-foreground text-sm sm:text-base break-words">5-497, NEAR HITEC CITY, IZZATHNAGAR, KONDAPUR</p>
                    <p className="text-muted-foreground text-sm sm:text-base break-words">K.V.Rangareddy Serilingampally Telangana India 500084</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;