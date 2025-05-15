
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="GCLX General Trading - Authentic global brands at 20-50% off" />
        <meta name="keywords" content="GCLX, trading, fashion, discounts, dubai, uae, brands, wholesale" />
      </Helmet>
      
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/collections" element={<Collections />} />
          {/* <Route path="/collections/women" element={<CollectionDetail />} /> */}
          {/* <Route path="/collections/:gender men" element={<CollectionDetail />} /> */}
          <Route  path="/collections/:gender"   element={<CollectionDetail />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 route redirects to home */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
