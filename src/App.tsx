import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";
import FloatingLanguageSelector from "@/components/FloatingLanguageSelector";
import FontProvider from "@/components/FontProvider";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="editorial-theme">
      <LanguageProvider>
        <FontProvider>
          <TooltipProvider>
            <Preloader />
            <Toaster />
            <Sonner />
          <BrowserRouter>
          <ScrollToTop />
          <FloatingLanguageSelector />
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:slug" element={<Article />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
        </FontProvider>
            </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
