
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Budaya from "./pages/Budaya";
import BudayaDetail from "./pages/BudayaDetail";
import Sejarah from "./pages/Sejarah";
import SejarahDetail from "./pages/SejarahDetail";
import Kerajinan from "./pages/Kerajinan";
import KerajinanDetail from "./pages/KerajinanDetail";
import Artefak from "./pages/Artefak";
import ArtefakDetail from "./pages/ArtefakDetail";
import Berita from "./pages/Berita";
import BeritaDetail from "./pages/BeritaDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/budaya" element={<Budaya />} />
          <Route path="/budaya/:id" element={<BudayaDetail />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/sejarah/:id" element={<SejarahDetail />} />
          <Route path="/kerajinan" element={<Kerajinan />} />
          <Route path="/kerajinan/:id" element={<KerajinanDetail />} />
          <Route path="/artefak" element={<Artefak />} />
          <Route path="/artefak/:id" element={<ArtefakDetail />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:id" element={<BeritaDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
