// src/pages/BonecoEstaticoPage.jsx
import React, { useState } from 'react';

const BonecoEstaticoPage = () => {
  const [quantidade, setQuantidade] = useState(1);
  const [nomeCliente, setNomeCliente] = useState('');
  const [telefone, setTelefone] = useState('');
  const [imagemAtual, setImagemAtual] = useState(0);

  // 🔄 VOCÊ VAI TROCAR AS IMAGENS DEPOIS
  const imagensProduto = [
    '/images/estatico-1.jpg',
    '/images/estatico-2.jpg',
    '/images/estatico-3.jpg',
  ];

  // 🔄 VOCÊ VAI COLOCAR O PREÇO DEPOIS
  const precoUnitario = 0; // ← COLOCAR O PREÇO REAL
  const precoTotal = precoUnitario * quantidade;

  // Carousel
  const proximaImagem = () => {
    setImagemAtual((prev) => (prev === imagensProduto.length - 1 ? 0 : prev + 1));
  };

  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev === 0 ? imagensProduto.length - 1 : prev - 1));
  };

  // WhatsApp
  const gerarMensagemWhatsApp = () => {
    const mensagem = `Olá! Gostaria de comprar o Boneco Sinalizador Estático:
    
📦 Produto: Boneco Sinalizador Estático
💰 Preço unitário: R$ ${precoUnitario.toFixed(2)}
🔢 Quantidade: ${quantidade}
💵 Total: R$ ${precoTotal.toFixed(2)}
👤 Nome: ${nomeCliente || 'Não informado'}
📞 Telefone: ${telefone || 'Não informado'}`;
    
    return encodeURIComponent(mensagem);
  };

  const linkWhatsApp = `https://wa.me/5518988082235?text=${gerarMensagemWhatsApp()}`;

  // 🔄 CARACTERÍSTICAS - VOCÊ VAI TROCAR DEPOIS
  const caracteristicas = [
    "Material resistente à intempéries",
    "Base estável e antiderrapante",
    "Cores de alta visibilidade",
    "Fácil transporte e armazenamento",
    "Alta durabilidade"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Boneco Sinalizador Estático
          </h1>
          <p className="text-xl text-gray-600">
            Boneco Bandeirinha Sinalizador Viário Estático - Ideal para controle de tráfego e segurança em obras
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Galeria */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="relative">
                <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img 
                    src={imagensProduto[imagemAtual]} 
                    alt="Boneco Sinalizador Estático"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <button
                  onClick={imagemAnterior}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 rounded-full"
                >
                  ‹
                </button>
                <button
                  onClick={proximaImagem}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-2 rounded-full"
                >
                  ›
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {imagensProduto.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setImagemAtual(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === imagemAtual ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Miniaturas */}
              <div className="flex space-x-2 mt-4">
                {imagensProduto.map((imagem, index) => (
                  <button
                    key={index}
                    onClick={() => setImagemAtual(index)}
                    className={`w-16 h-16 rounded border-2 ${
                      index === imagemAtual ? 'border-green-500' : 'border-gray-300'
                    }`}
                  >
                    <img 
                      src={imagem} 
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Informações do Produto */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">
                  R$ {precoUnitario.toFixed(2)}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Descrição do Produto:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {caracteristicas.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Formulário */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Informações para Contato:</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Seu Nome (opcional):
                    </label>
                    <input
                      type="text"
                      value={nomeCliente}
                      onChange={(e) => setNomeCliente(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Seu WhatsApp (opcional):
                    </label>
                    <input
                      type="tel"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
              </div>

              {/* Quantidade */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantidade:
                </label>
                <select 
                  value={quantidade}
                  onChange={(e) => setQuantidade(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {[1,2,3,4,5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              {/* Total */}
              <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-green-600">
                    R$ {precoTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Botão WhatsApp */}
              <a
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-200 text-center mb-4"
              >
                💬 COMPRAR AGORA
              </a>

              <div className="text-center text-sm text-gray-600">
                <p className="flex items-center justify-center gap-2">
                  <span className="text-green-500">✔️</span> Atendimento personalizado
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-green-500">✔️</span> Tire todas suas dúvidas
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-green-500">✔️</span> Formas de pagamento flexíveis
                </p>
              </div>
            </div>

            {/* Diferenciais */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Por que escolher nosso produto?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center"><span className="text-green-500 mr-2">✓</span> Entrega rápida</div>
                <div className="flex items-center"><span className="text-green-500 mr-2">✓</span> Qualidade garantida</div>
                <div className="flex items-center"><span className="text-green-500 mr-2">✓</span> Preço competitivo</div>
                <div className="flex items-center"><span className="text-green-500 mr-2">✓</span> Suporte técnico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonecoEstaticoPage;