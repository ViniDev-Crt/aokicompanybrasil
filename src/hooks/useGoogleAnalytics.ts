import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const useGoogleAnalytics = () => {
  useEffect(() => {
    // Se já existe, não inicializar de novo
    if (window.gtag) {
      console.log('✅ GA4 já estava inicializado');
      return;
    }

    // Criar o dataLayer se não existe
    window.dataLayer = window.dataLayer || [];
    
    // Definir a função gtag
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(args);
    };

    // Configurar com o ID do GA4
    window.gtag('js', new Date());
    window.gtag('config', 'G-KLN4MH47JX');

    // Agora carregar o script do Google
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-KLN4MH47JX';
    script.async = true;
    
    // Adicionar evento para saber quando carrega
    script.onload = () => {
      console.log('✅ Script GA4 carregado com sucesso!');
    };
    
    script.onerror = () => {
      console.error('❌ Erro ao carregar script GA4');
    };
    
    document.head.appendChild(script);

    console.log('✅ Google Analytics inicializado!');

    // Debug temporário - verificar status após 2 segundos
    setTimeout(() => {
      console.log('🔍 DEBUG GA4:', {
        dataLayer: window.dataLayer,
        hasGtag: typeof window.gtag === 'function',
        scriptElement: !!document.querySelector('script[src*="gtag"]'),
        dataLayerLength: window.dataLayer?.length || 0
      });
      
      // Verificar se os eventos foram registrados
      const hasPageView = window.dataLayer?.some(item => 
        item?.[0] === 'config' && item?.[1] === 'G-KLN4MH47JX'
      );
      console.log('📊 PageView registrado:', hasPageView);
    }, 2000);

  }, []);
};