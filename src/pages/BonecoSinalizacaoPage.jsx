// src/pages/BonecoSinalizacaoPage.jsx
import React, { useState, useEffect } from 'react';

const BonecoSinalizacaoPage = () => {
  const [quantidade, setQuantidade] = useState(1);
  const [nomeCliente, setNomeCliente] = useState('');
  const [telefone, setTelefone] = useState('');
  const [imagemAtual, setImagemAtual] = useState(0);
  const [avaliacaoAtual1, setAvaliacaoAtual1] = useState(0);
  const [avaliacaoAtual2, setAvaliacaoAtual2] = useState(0);

  // Array de imagens do produto
  const imagensProduto = [
    '/images/produto-1.jpg', 
    '/images/produto-2.jpg',
    '/images/produto-3.jpg',
    '/images/produto-4.jpg'
  ];

  // MAIS AVALIAÇÕES PARA OS CARROSSÉIS
  const avaliacoesClientes1 = [
    {
      id: 1,
      nome: "Mariano L.",
      texto: "Sou responsável pela segurança do trabalho em obras rodoviárias e o robô sinalizador se mostrou um equipamento essencial. O boneco bandeirinha aumentou significativamente a percepção antecipada dos motoristas, reduzindo riscos para a equipe. Produto robusto e eficaz, já está no nosso padrão de sinalização.",
    },
    {
      id: 2,
      nome: "Carlos S.",
      texto: "Coordeno a segurança em obras de duplicação e o boneco sinalizador se tornou item obrigatório nos nossos canteiros. A visibilidade do boneco bandeirinha em trechos de alta velocidade é incomparável. Já evitou diversos incidentes. Relação custo-benefício excelente para qualquer orçamento de obra.",
    },
    {
      id: 3,
      nome: "Marcelo R.",
      texto: "O boneco aoki superou as expectativas em termos de eficiência e durabilidade. O robô bandeira mantém a equipe mais segura e reduz significativamente o risco de acidentes. Já solicitei aquisição de mais unidades para outros trechos. Excelente equipamento!",
    },
    {
      id: 4,
      nome: "Roberto M.",
      texto: "Implementei o boneco bandeira em um trecho de 15km em manutenção e os indicadores de segurança melhoraram consideravelmente. O boneco sinalizador mantém os condutores alertas mesmo em horários de baixa visibilidade. Equipamento profissional e confiável.",
    }
  ];

  const avaliacoesClientes2 = [
    {
      id: 5,
      nome: "Fernanda C.",
      texto: "Comprei para minha construtora e todos aprovaram!",
    },
    {
      id: 6,
      nome: "João P.",
      texto: "Muito mais resistente que os concorrentes. Qualidade superior!",
    },
    {
      id: 7,
      nome: "Juliana F.",
      texto: "Atuo na gestão de segurança de grandes obras e o robô sinalizador se mostrou fundamental para proteção das equipes. O boneco bandeirinha funciona ininterruptamente, dispensando reposicionamento constante. Redução expressiva de quase acidentes desde a implantação. Produto indispensável!",
    },
    {
      id: 8,
      nome: "Paulo R.",
      texto: "O boneco de sinalização que implementamos trouxe resultados imediatos na redução de velocidade dos veículos. A equipe se sente muito mais segura trabalhando com esse equipamento. Resistente, visível e eficiente - atende perfeitamente as normas de segurança viária. Já solicitei mais unidades para outros trechos em execução!",
    }
  ];

  // Preço do produto
  const precoUnitario = 4900.00;
  const precoTotal = precoUnitario * quantidade;

  // Efeitos para carrosséis automáticos
  useEffect(() => {
    const interval = setInterval(() => {
      setAvaliacaoAtual1((prev) => 
        prev === avaliacoesClientes1.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [avaliacoesClientes1.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAvaliacaoAtual2((prev) => 
        prev === avaliacoesClientes2.length - 1 ? 0 : prev + 1
      );
    }, 4500); // Tempo ligeiramente diferente para não sincronizar

    return () => clearInterval(interval);
  }, [avaliacoesClientes2.length]);

  // Funções do carousel de imagens
  const proximaImagem = () => {
    setImagemAtual((prev) => (prev === imagensProduto.length - 1 ? 0 : prev + 1));
  };

  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev === 0 ? imagensProduto.length - 1 : prev - 1));
  };

  const selecionarImagem = (index) => {
    setImagemAtual(index);
  };

  // Funções para navegação manual dos carrosséis de avaliações
  const proximaAvaliacao1 = () => {
    setAvaliacaoAtual1((prev) => (prev === avaliacoesClientes1.length - 1 ? 0 : prev + 1));
  };

  const avaliacaoAnterior1 = () => {
    setAvaliacaoAtual1((prev) => (prev === 0 ? avaliacoesClientes1.length - 1 : prev - 1));
  };

  const proximaAvaliacao2 = () => {
    setAvaliacaoAtual2((prev) => (prev === avaliacoesClientes2.length - 1 ? 0 : prev + 1));
  };

  const avaliacaoAnterior2 = () => {
    setAvaliacaoAtual2((prev) => (prev === 0 ? avaliacoesClientes2.length - 1 : prev - 1));
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
            Boneco Bandeirinha Sinalizador Viário Automatizado - Robô Sinalizador para Obras - Boneco de Sinalização em Polietileno Resistente -  Ideal para Controle de Tráfego e Segurança Viária
          </p>
        </div>

        {/* CONTEÚDO PRINCIPAL - DUAS COLUNAS (ACIMA) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Coluna da Esquerda - Galeria */}
          <div>
            {/* Galeria de Imagens */}
            <div className="bg-white rounded-lg shadow-lg p-4">
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

              {/* Miniaturas */}
              <div className="flex space-x-2 mt-4">
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
          </div>

          {/* Coluna da Direita - Informações do Produto */}
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

        {/* CONTAINER DE AVALIAÇÕES - LARGURA TOTAL (AGORA COM CARROSSEL AUTOMÁTICO) */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* PRIMEIRO CARROSSEL DE AVALIAÇÃO */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Avaliações de Clientes
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-yellow-400 mr-1">★★★★★</span>
                  <span>5.0</span>
                </div>
              </div>
              
              <div className="relative">
                {/* Avaliação Atual */}
                <div className="text-center py-2">
                  <p className="text-gray-700 italic text-sm mb-3 leading-relax">
                    "{avaliacoesClientes1[avaliacaoAtual1].texto}"
                  </p>
                  
                  <div className="mb-2">
                    <span className="font-semibold text-gray-900">
                      {avaliacoesClientes1[avaliacaoAtual1].nome}
                    </span>
                  </div>
                </div>
                
                {/* Botões de Navegação */}
                <button
                  onClick={avaliacaoAnterior1}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ‹
                </button>
                <button
                  onClick={proximaAvaliacao1}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ›
                </button>
              </div>

              {/* Indicadores do Carrossel */}
              <div className="flex justify-center space-x-1 mt-3">
                {avaliacoesClientes1.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setAvaliacaoAtual1(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      index === avaliacaoAtual1 ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* SEGUNDO CARROSSEL DE AVALIAÇÃO */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Mais Avaliações
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-yellow-400 mr-1">★★★★★</span>
                  <span>5.0</span>
                </div>
              </div>
              
              <div className="relative">
                {/* Avaliação Atual */}
                <div className="text-center py-2">
                  <p className="text-gray-700 italic text-sm mb-3 leading-relax">
                    "{avaliacoesClientes2[avaliacaoAtual2].texto}"
                  </p>
                  
                  <div className="mb-2">
                    <span className="font-semibold text-gray-900">
                      {avaliacoesClientes2[avaliacaoAtual2].nome}
                    </span>
                  </div>
                </div>
                
                {/* Botões de Navegação */}
                <button
                  onClick={avaliacaoAnterior2}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ‹
                </button>
                <button
                  onClick={proximaAvaliacao2}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ›
                </button>
              </div>

              {/* Indicadores do Carrossel */}
              <div className="flex justify-center space-x-1 mt-3">
                {avaliacoesClientes2.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setAvaliacaoAtual2(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      index === avaliacaoAtual2 ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Estatísticas no rodapé */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center space-x-4 text-sm text-gray-600 bg-white rounded-lg px-4 py-2 shadow">
              <span>⭐ <strong>5.0</strong> Avaliação Geral</span>
              <span>•</span>
              <span>👥 <strong>{avaliacoesClientes1.length + avaliacoesClientes2.length}+</strong> Avaliações</span>
              <span>•</span>
              <span>✅ <strong>100%</strong> Recomendam</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BonecoSinalizacaoPage;