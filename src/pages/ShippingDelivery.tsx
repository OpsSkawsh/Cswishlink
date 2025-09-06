import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ShippingDelivery = () => {
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
                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Shipping & Delivery Policy</h1>
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
                    className="flex items-center text-foreground font-medium hover:text-primary transition-colors"
                  >
                    Shipping and Delivery Policy
                    <span className="ml-2 text-muted-foreground">›</span>
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
                  For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within 0-7 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. CSWISHLINK PRIVATE LIMITED is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 0-7 days rom the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on 7993631199 or connect@cswishlink.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingDelivery;