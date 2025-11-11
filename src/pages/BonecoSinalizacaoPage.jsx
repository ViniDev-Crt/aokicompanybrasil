// src/pages/BonecoSinalizacaoPage.jsx
import React, { useState } from 'react';

const BonecoSinalizacaoPage = () => {
  const [quantidade, setQuantidade] = useState(1);
  const [nomeCliente, setNomeCliente] = useState('');
  const [telefone, setTelefone] = useState('');
  const [imagemAtual, setImagemAtual] = useState(0);

  // Array de imagens do produto
  const imagensProduto = [
    '/images/produto-1.jpg', 
    '/images/produto-2.jpg',
    '/images/produto-3.jpg',
    '/images/produto-4.jpg'
  ];

  // Preço do produto
  const precoUnitario = 4900.00;
  const precoTotal = precoUnitario * quantidade;

  // Funções do carousel
  const proximaImagem = () => {
    setImagemAtual((prev) => (prev === imagensProduto.length - 1 ? 0 : prev + 1));
  };

  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev === 0 ? imagensProduto.length - 1 : prev - 1));
  };

  const selecionarImagem = (index) => {
    setImagemAtual(index);
  };

  // Função para gerar mensagem do WhatsApp
  const gerarMensagemWhatsApp = () => {
    const mensagem = `Olá! Gostaria de comprar o Boneco de Sinalização Viária:
    
📦 Produto: Boneco de Sinalização Viária
💰 Preço unitário: R$ ${precoUnitario.toFixed(2)}
🔢 Quantidade: ${quantidade}
💵 Total: R$ ${precoTotal.toFixed(2)}
👤 Nome: ${nomeCliente || 'Não informado'}
📞 Telefone: ${telefone || 'Não informado'}

Podemos finalizar a compra?`;
    
    return encodeURIComponent(mensagem);
  };

  const numeroWhatsApp = '5518988082235';
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${gerarMensagemWhatsApp()}`;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Boneco de Sinalização Viária
          </h1>
          <p className="text-xl text-gray-600">
            Boneco Sinalizador Viário Bandeirinha Articulado - Manequim Controlador de Tráfego para Obras - Material em Polietileno Resistente às Intempéries - Colete Refletivo NBR 15292 Alta Visibilidade Diurna e Noturna - Base Estável - Ideal para Sinalização de Obras Rodoviárias, Vias Urbanas, Controle de Mão Única, Desvios, Manutenção Viária e Segurança no Trânsito.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Galeria de Imagens */}
          <div>
            {/* Carousel Principal */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <div className="relative">
                {/* Imagem do Carousel */}
                <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img 
                    src={imagensProduto[imagemAtual]} 
                    alt="Boneco de Sinalização Viária"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                {/* Botões de Navegação */}
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
                
                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {imagensProduto.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => selecionarImagem(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === imagemAtual ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Miniaturas */}
            <div className="flex space-x-2">
              {imagensProduto.map((imagem, index) => (
                <button
                  key={index}
                  onClick={() => selecionarImagem(index)}
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

          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">R$ {precoUnitario.toFixed(2)}</span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Descrição do Produto:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Material resistente à intempéries</li>
                  <li>Base estável e antiderrapante</li>
                  <li>Cores de alta visibilidade</li>
                  <li>Fácil transporte e armazenamento</li>
                  <li>Alta durabilidade</li>
                </ul>
              </div>

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

              {/* ✅ TOTAL TAMBÉM NA COR VERDE */}
              <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-green-600">
                    R$ {precoTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* ✅ BOTÃO VERDE */}
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
                  <span className="text-green-500">✔️</span>
                  Atendimento personalizado
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-green-500">✔️</span>
                  Tire todas suas dúvidas
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-green-500">✔️</span>
                  Formas de pagamento flexíveis
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Por que escolher nosso produto?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Entrega rápida</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Qualidade garantida</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Preço competitivo</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Suporte técnico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonecoSinalizacaoPage;