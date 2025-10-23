// src/pages/Index.tsx - VERSÃO CORRIGIDA SEO
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specifications from "@/components/Specifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      {/* ✅ CONTEÚDO VISÍVEL E NATURAL - SEM CONTEÚDO OCULTO */}
      <main className="min-h-screen">
        <Hero />
        <Features />
        <Specifications />
        <Contact />
      </main>
    </>
  );
};

export default Index;