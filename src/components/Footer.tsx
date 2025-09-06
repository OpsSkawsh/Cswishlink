import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 md:space-x-3 text-primary-foreground">
              <img src="/lovable-uploads/502b1ed2-27b8-4f75-a565-689661692670.png" alt="CSWISHLINK" className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-50">CSWISHLINK</h3>
                <p className="text-xs md:text-sm opacity-90 text-slate-50">Private Limited</p>
              </div>
            </div>
            <p className="text-slate-100 text-sm md:text-base leading-relaxed">
              CSWISHLINK Private Limited envisions creating a dynamic ecosystem of innovative and technology-driven businesses that redefine convenience and lifestyle solutions for modern India. As the parent company of Skawsh, our first subsidiary, we are committed to fostering a network of impactful ventures that combine cutting-edge technology, operational excellence, and customer-centric solutions.
            </p>
            
          </div>


          {/* Legal Information */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-slate-200 mb-4 md:mb-6">Legal Information</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/terms" className="text-slate-100 hover:text-white transition-colors text-sm md:text-base">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-100 hover:text-white transition-colors text-sm md:text-base">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div id="contact" className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg md:text-xl font-semibold text-slate-200 mb-4 md:mb-6">Contact Us</h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-slate-200 mt-1 flex-shrink-0" />
                <p className="text-slate-100 text-xs md:text-sm leading-relaxed">
                  5-497, NEAR HITEC CITY,<br />
                  IZZATHNAGAR, KONDAPUR,<br />
                  K.V.Rangareddy, Serilingampally,<br />
                  Telangana, India, 500084
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-slate-200 flex-shrink-0" />
                <a href="mailto:connect@cswishlink.com" className="text-slate-100 hover:text-white transition-colors text-xs md:text-sm break-all">
                  connect@cswishlink.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <p className="text-center text-slate-200 text-xs md:text-sm">
            © 2025 CSWISHLINK Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;