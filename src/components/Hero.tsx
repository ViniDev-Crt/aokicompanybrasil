import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Settings, X, Play } from "lucide-react";
import heroVideo from "@/assets/robo-sinalizador.mp4";
import { useState } from "react";

// Array de imagens e vídeos da galeria
const productImages = [
  {
    id: 1,
    src: "/images/produto-1.jpg",
    alt: "Robô Sinalizador com iluminação noturna",
    title: "Operação Noturna",
    type: "image"
  },
  {
    id: 2,
    src: "/images/produto-2.jpg",
    alt: "Robô Sinalizador em operação durante o dia",
    title: "Operação Diurna",
    type: "image"
  },
  {
    id: 3,
    src: "/images/produto-3.jpg",
    alt: "Detalhe do robô sinalizador operando em ambiente com chuva",
    title: "Operando na Chuva",
    type: "image"
  },
  {
    id: 4,
    src: "/images/produto-4.jpg",
    alt: "Robô sinalizador em obra viária",
    title: "Aplicação em Obras",
    type: "image"
  },
  {
    id: 5,
    src: "/images/produto-5.jpg",
    alt: "Vista lateral do robô sinalizador",
    title: "Vista Lateral",
    type: "image"
  },
  {
    id: 6,
    src: "/videos/mini-video.mp4", // Caminho para o mini vídeo
    alt: "Robô sinalizador com bandeira em funcionamento",
    title: "Sinalização com Bandeira",
    type: "video"
  }
];

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % productImages.length);
    }
  };

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + productImages.length) % productImages.length);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                Aoki Company Brasil - A Primeira fabricante no BRASIL.
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Boneco Bandeira | Robô Sinalizador Viário
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                A Primeira Fabricante de Boneco bandeira / Robô Sinalizador do Brasil. 
                Tecnologia 100% nacional com autonomia de 48h, operação 24/7 e máxima segurança.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border shadow-card">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Segurança Total</h3>
                  <p className="text-xs text-muted-foreground">Operação autônoma 24/7</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border shadow-card">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Alta Eficiência</h3>
                  <p className="text-xs text-muted-foreground">Economia de até 60% em custos</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border shadow-card">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Fácil Instalação</h3>
                  <p className="text-xs text-muted-foreground">Configuração plug and play</p>
                </div>
              </div>
            </div>

            {/* Social Media Cards - MANTIDOS ORIGINAIS */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-foreground">
                Entre em Contato
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {/* Card WhatsApp */}
                <a 
                  href="https://wa.me/5518988082235?text=Olá! Gostaria de mais informações sobre o Robô Sinalizador Viário Automático." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="group p-6 bg-card rounded-xl border shadow-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] text-center h-full">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mt-2">Orçamento imediato</p>
                  </div>
                </a>

                {/* Card Facebook */}
                <a 
                  href="https://web.facebook.com/roboaokicompanybrasil/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="group p-6 bg-card rounded-xl border shadow-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] text-center h-full">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground">Facebook</h3>
                    <p className="text-sm text-muted-foreground mt-2">Fique por dentro das novidades</p>
                  </div>
                </a>

                {/* Card Instagram */}
                <a 
                  href="https://www.instagram.com/aokicompanybrasil/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="group p-6 bg-card rounded-xl border shadow-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] text-center h-full">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" 
                         style={{background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'}}>
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground">Instagram</h3>
                    <p className="text-sm text-muted-foreground mt-2">Acompanhe nossos projetos</p>
                  </div>
                </a>

                {/* Card LinkedIn */}
                <a 
                  href="https://br.linkedin.com/company/aoki-company-brasil" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="group p-6 bg-card rounded-xl border shadow-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] text-center h-full">
                    <div className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground mt-2">Conecte-se profissionalmente</p>
                  </div>
                </a>

                {/* Card Mercado Livre */}
                <a 
                  href="https://www.mercadolivre.com.br" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="group p-6 bg-card rounded-xl border shadow-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] text-center h-full">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border">
                      <img 
                        src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png" 
                        alt="Mercado Livre" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground">Mercado Livre</h3>
                    <p className="text-sm text-muted-foreground mt-2">Compre pelo marketplace</p>
                  </div>
                </a>

                {/* Card Email/Contato */}
                <a 
                  href="mailto:aokicompanybrasil@gmail.com" 
                  className="block"
                >
                  <div className="group p-6 bg-card rounded-xl border shadow-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] text-center h-full">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground">E-mail</h3>
                    <p className="text-sm text-muted-foreground mt-2">Envie suas dúvidas</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform rotate-6" />
            <div className="relative bg-card rounded-3xl p-8 shadow-tech">
              <video 
                src={heroVideo} 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Stats Overlay */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Confiabilidade</div>
                </div>
              </div>
              
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-xs text-muted-foreground">Operação</div>
                </div>
              </div>
            </div>

            {/* Galeria de Produtos - ATUALIZADA COM VÍDEO NO ID6 */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Galeria do Produto
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {productImages.map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative bg-card rounded-xl border shadow-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] cursor-pointer overflow-hidden"
                    onClick={() => openModal(index)}
                  >
                    {/* Renderização condicional para imagem ou vídeo */}
                    {item.type === "image" ? (
                      // IMAGEM
                      <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                        <img 
                          src={item.src} 
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      // VÍDEO (apenas no id6)
                      <div className="aspect-square bg-muted rounded-xl overflow-hidden relative">
                        <video 
                          src={item.src}
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {/* Ícone de play sobre o vídeo */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-background/80 rounded-full p-3">
                            <Play className="w-6 h-6 text-primary fill-current" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay no hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 rounded-xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 rounded-full p-2">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    
                    {/* Título */}
                    <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2">
                      <p className="text-sm font-medium text-foreground text-center">
                        {item.title}
                      </p>
                      {item.type === "video" && (
                        <p className="text-xs text-muted-foreground text-center">Vídeo</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Expandido - ATUALIZADO PARA SUPORTAR VÍDEO */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full">
            {/* Botão Fechar */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 z-10 bg-card rounded-full p-2 hover:bg-accent transition-colors duration-200 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Botão Anterior */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-card rounded-full p-3 hover:bg-accent transition-colors duration-200 shadow-lg"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>

            {/* Botão Próximo */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-card rounded-full p-3 hover:bg-accent transition-colors duration-200 shadow-lg"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Container do Conteúdo */}
            <div className="bg-card rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-auto">
              {/* Renderização condicional no modal */}
              {productImages[selectedImage].type === "image" ? (
                // IMAGEM NO MODAL
                <div className="flex justify-center mb-6">
                  <img 
                    src={productImages[selectedImage].src} 
                    alt={productImages[selectedImage].alt}
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg"
                  />
                </div>
              ) : (
                // VÍDEO NO MODAL
                <div className="flex justify-center mb-6">
                  <video 
                    src={productImages[selectedImage].src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="max-w-full max-h-[70vh] w-auto h-auto rounded-lg"
                  />
                </div>
              )}
              
              {/* Informações */}
              <div className="text-center">
                <div className="text-xl font-bold text-foreground mb-2">
                  {productImages[selectedImage].title}
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  {productImages[selectedImage].alt}
                </div>
                <div className="text-xs text-muted-foreground">
                  {productImages[selectedImage].type === "video" ? "Vídeo" : "Imagem"} {selectedImage + 1} de {productImages.length}
                </div>
              </div>
              
              {/* Indicadores */}
              <div className="flex justify-center gap-2 mt-6">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === selectedImage ? 'bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;