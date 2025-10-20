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
    if (window.gtag) return;

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
    document.head.appendChild(script);

    console.log('Google Analytics inicializado!');
  }, []);
};