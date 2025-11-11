// src/App.tsx - garanta que está assim:
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import HeaderVendas from "./components/Header/HeaderVendas";
import { Footer } from "@/components/Footer";
import { useGoogleAnalytics } from "./hooks/useGoogleAnalytics";
import BonecoSinalizacaoPage from "./pages/BonecoSinalizacaoPage";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  // Usar HeaderVendas apenas na página de vendas
  const isPaginaVendas = location.pathname === '/boneco-sinalizacao';
  const HeaderComponent = isPaginaVendas ? HeaderVendas : Header;

  return (
    <>
      <HeaderComponent />
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/boneco-sinalizacao" element={<BonecoSinalizacaoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer />
    </>
  );
};

const App = () => {
  useGoogleAnalytics();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;