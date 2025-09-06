import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CancellationRefund = () => {
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
                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Cancellation & Refund Policy</h1>
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
                    className="flex items-center text-foreground font-medium hover:text-primary transition-colors"
                  >
                    Cancellation and Refund Policy
                    <span className="ml-2 text-muted-foreground">›</span>
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
                <p className="text-foreground leading-relaxed text-sm sm:text-base">
                  CSWISHLINK PRIVATE LIMITED believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
                </p>

                <ul className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="break-words">Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</span>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="break-words">CSWISHLINK PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</span>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="break-words">In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within the same day of receipt of the products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within the same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</span>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="break-words">In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.</span>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="break-words">In case of any Refunds approved by the CSWISHLINK PRIVATE LIMITED, it'll take 6-8 days for the refund to be processed to the end customer.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefund;