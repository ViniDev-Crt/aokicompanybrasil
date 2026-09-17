// src/pages/ManuaisPage.jsx
import React, { useState } from 'react';
import { FileText, Download, Calendar, HardDrive, Youtube, Play, ChevronDown, ChevronUp } from 'lucide-react';

const ManuaisPage = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);

  // Alterna a expansão de um produto
  const toggleExpand = (productId) => {
    if (expandedProduct === productId) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(productId);
    }
  };

  // 📄 Dados dos produtos (manuais + vídeos)
  const produtos = [
    {
      id: 1,
      nome: "Boneco Sinalizador Articulado",
      imagem: "/images/produto-1.jpg",
      manuais: [
        {
          id: 1,
          titulo: "Manual do Operador",
          arquivo: "/manuais/manual-boneco-articulado.pdf",
          tamanho: "2.5 MB",
          data: "2024"
        }
      ],
      videos: [
        {
          id: 1,
          titulo: "Como Instalar o Boneco Articulado",
          descricao: "Passo a passo da instalação completa",
          youtubeId: "dQw4w9WgXcQ",
          duracao: "5:32"
        },
        {
          id: 2,
          titulo: "Manutenção Preventiva",
          descricao: "Dicas para aumentar a vida útil do equipamento",
          youtubeId: "9bZkp7q19f0",
          duracao: "3:45"
        }
      ]
    },
    {
      id: 2,
      nome: "Boneco Sinalizador Estático",
      imagem: "/images/estatico-1.jpg",
      manuais: [
        {
          id: 1,
          titulo: "Manual do Operador",
          arquivo: "/manuais/manual-boneco-estatico.pdf",
          tamanho: "--- MB",
          data: "2025"
        }
      ],
      videos: [
        {
          id: 1,
          titulo: "Como Usar o Boneco Estático",
          descricao: "Instalação e operação correta",
          youtubeId: "tgbNymZ7vqY",
          duracao: "4:15"
        },
        {
          id: 2,
          titulo: "Dicas de Segurança",
          descricao: "Boas práticas no uso do sinalizador",
          youtubeId: "kJQP7kiw5Fk",
          duracao: "2:30"
        }
      ]
    }
  ];

  // Função para pegar a URL de embed do YouTube
  const getYoutubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Manuais e Tutoriais
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para instalar, operar e manter seus produtos Aoki Company.
          </p>
          <p className="text-md text-gray-500 mt-2">
            📱 Escaneie o QR Code na caixa do produto para assistir no celular
          </p>
        </div>

        {/* Lista de Produtos */}
        <div className="space-y-8">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              
              {/* Cabeçalho do Produto - Clicável */}
              <button
                onClick={() => toggleExpand(produto.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={produto.imagem} 
                      alt={produto.nome}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/400x400?text=Produto";
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 text-left">
                      {produto.nome}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {produto.manuais.length} manual | {produto.videos.length} vídeos
                    </p>
                  </div>
                </div>
                <div>
                  {expandedProduct === produto.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Conteúdo Expansível */}
              {expandedProduct === produto.id && (
                <div className="border-t border-gray-100 p-6 bg-gray-50/50">
                  
                  {/* Vídeos Tutoriais */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Youtube className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Vídeos Tutoriais</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {produto.videos.map((video) => (
                        <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                          <div className="aspect-video bg-gray-900 relative">
                            <iframe
                              className="w-full h-full"
                              src={getYoutubeEmbedUrl(video.youtubeId)}
                              title={video.titulo}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              {video.duracao}
                            </span>
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {video.titulo}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {video.descricao}
                            </p>
                            <a
                              href={`https://youtu.be/${video.youtubeId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-red-600 text-sm mt-2 hover:underline"
                            >
                              <Play className="w-3 h-3" />
                              Assistir no YouTube
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Manuais PDF */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Manuais para Download</h3>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      {produto.manuais.map((manual) => (
                        <div key={manual.id} className="bg-white rounded-lg p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-lg">
                              <FileText className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{manual.titulo}</h4>
                              <div className="flex gap-3 text-xs text-gray-500 mt-1">
                                <span className="flex items-center gap-1">
                                  <HardDrive className="w-3 h-3" /> {manual.tamanho}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" /> {manual.data}
                                </span>
                              </div>
                            </div>
                          </div>
                          <a
                            href={manual.arquivo}
                            download
                            className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                          >
                            <Download className="w-4 h-4" />
                            PDF
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* QR Code Sugestão */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800 flex items-center gap-2">
                      📱 <strong>Dica para a embalagem:</strong>
                    </p>
                    <p className="text-sm text-blue-700 mt-1 ml-6">
                      Use este link no QR Code da caixa: <br />
                      <code className="text-xs bg-blue-100 px-2 py-1 rounded mt-1 inline-block">
                        https://aokicompanybrasil.com.br/manuais#{produto.id}
                      </code>
                    </p>
                    <p className="text-xs text-blue-600 mt-2 ml-6">
                      *Isso leva o cliente direto para os vídeos e manuais deste produto
                    </p>
                  </div>

                </div>
              )}
            </div>
          ))}
        </div>

        {/* Canal do YouTube */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@AokiCompany"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
          >
            <Youtube className="w-6 h-6" />
            Inscreva-se no nosso canal
          </a>
        </div>

      </div>
    </div>
  );
};

export default ManuaisPage;