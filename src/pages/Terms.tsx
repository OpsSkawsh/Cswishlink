import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Terms = () => {
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
                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Terms & Conditions</h1>
                    <p className="text-muted-foreground text-sm sm:text-base">CSWISHLINK Private Limited</p>
                  </div>
                </div>
              </div>
              
              {/* Sidebar Navigation */}
              <div className="corporate-card p-6">
                <nav className="space-y-3">
                  <Link 
                    to="/terms" 
                    className="flex items-center text-foreground font-medium hover:text-primary transition-colors"
                  >
                    Terms and Conditions
                    <span className="ml-2 text-muted-foreground">›</span>
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
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
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
                  For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean CSWISHLINK PRIVATE LIMITED, whose registered/operational office is 5-497, NEAR HITEC CITY, IZZATHNAGAR, KONDAPUR, K.V.Rangareddy Serilingampally Telangana India 500084 Kotaguda TELANGANA 500084. "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
                </p>

                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Your use of the website and/or purchase from us are governed by following Terms and Conditions:</h2>
                  
                  <ul className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">The content of the pages of this website is subject to change without notice.</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offence.</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">You may not create a link to our website from another website or document without CSWISHLINK PRIVATE LIMITED's prior written consent.</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.</span>
                    </li>
                    
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="break-words">We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;