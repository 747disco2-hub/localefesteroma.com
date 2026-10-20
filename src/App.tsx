import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Festa18AnniRoma from "./pages/Festa18AnniRoma";
import FestePrivateRoma from "./pages/FestePrivateRoma";
import LocationCompleanniRoma from "./pages/LocationCompleanniRoma";
import SalaFesteRoma from "./pages/SalaFesteRoma";
import FesteTeenagersRoma from "./pages/FesteTeenagersRoma";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/festa-18-anni-roma" element={<Festa18AnniRoma />} />
              <Route path="/feste-private-roma" element={<FestePrivateRoma />} />
              <Route path="/location-compleanni-roma" element={<LocationCompleanniRoma />} />
              <Route path="/sala-feste-roma" element={<SalaFesteRoma />} />
              <Route path="/feste-per-teenagers-roma" element={<FesteTeenagersRoma />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
