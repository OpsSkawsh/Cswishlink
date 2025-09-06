import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Subsidiaries from "./pages/Subsidiaries";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CancellationRefund from "./pages/CancellationRefund";
import ShippingDelivery from "./pages/ShippingDelivery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Only set title for preview environment (lovable.app domains)
    if (window.location.hostname.includes('lovable.app')) {
      const targetTitle = "CSWISHLINK Private Limited - Leading Corporate Solutions";
      
      // Set title immediately
      document.title = targetTitle;
      
      // Override after DOM loads
      setTimeout(() => {
        document.title = targetTitle;
      }, 100);
      
      // Set up observer to watch for title changes and override them
      const observer = new MutationObserver(() => {
        if (document.title !== targetTitle) {
          document.title = targetTitle;
        }
      });
      
      observer.observe(document.querySelector('title') || document.head, {
        childList: true,
        subtree: true,
        characterData: true
      });
      
      // Also listen for window load
      window.addEventListener('load', () => {
        document.title = targetTitle;
      });
      
      return () => observer.disconnect();
    }
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/subsidiaries" element={<Subsidiaries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cancellation-refund" element={<CancellationRefund />} />
          <Route path="/shipping-delivery" element={<ShippingDelivery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
