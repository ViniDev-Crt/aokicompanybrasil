// src/pages/Index.tsx - VERSÃO STEALTH SEO
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specifications from "@/components/Specifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      {/* ✅ CONTEÚDO SEO INVISÍVEL - Só o Google vê */}
      <div style={{ 
        position: 'absolute', 
        left: '-9999px', 
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}>
        <h1>Robô Sinalizador Viário - Aoki Company Brasil</h1>
        <h2>Tecnologia Brasileira em Sinalização Inteligente de Trânsito</h2>
        <p>
          A Aoki Company Brasil é especialista em robôs sinalizadores viários 
          e bonecos sinalizadores de trânsito. Desenvolvemos tecnologia nacional 
          para automação viária inteligente com operação contínua 24 horas por dia 
          e autonomia de até 48 horas.
        </p>
        <h3>Soluções em Sinalização Viária Inteligente</h3>
        <p>
          Fabricamos robôs sinalizadores profissionais para controle de tráfego, 
          obras viárias, segurança no trânsito e sinalização de rodovias. 
          Tecnologia 100% brasileira para otimização do fluxo veicular.
        </p>
      </div>

      {/* ✅ DESIGN ORIGINAL PERFEITAMENTE INTACTO */}
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