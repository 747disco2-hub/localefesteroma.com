import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
const Festa18AnniRoma = lazy(() => import("./pages/Festa18AnniRoma"));
const FestePrivateRoma = lazy(() => import("./pages/FestePrivateRoma"));
const LocationCompleanniRoma = lazy(() => import("./pages/LocationCompleanniRoma"));
const SalaFesteRoma = lazy(() => import("./pages/SalaFesteRoma"));
const FesteTeenagersRoma = lazy(() => import("./pages/FesteTeenagersRoma"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="min-h-screen bg-background" aria-busy="true" />}>
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
        </Suspense>
      </Layout>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
