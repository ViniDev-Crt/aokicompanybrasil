import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import { Footer } from "@/components/Footer"; // ← IMPORTE O FOOTER AQUI

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ADICIONE O HEADER AQUI - vai aparecer em todas as páginas */}
        <Header />
        
        {/* CONTEÚDO PRINCIPAL - flex-1 para ocupar o espaço restante */}
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        {/* ADICIONE O FOOTER AQUI - vai aparecer em todas as páginas */}
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;