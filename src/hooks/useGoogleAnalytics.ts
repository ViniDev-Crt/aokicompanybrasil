import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const useGoogleAnalytics = () => {
  useEffect(() => {
    if (window.gtag) return;

    window.dataLayer = window.dataLayer || [];
    
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', 'G-KLN4MH47JX');

    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-KLN4MH47JX';
    script.async = true;
    document.head.appendChild(script);

  }, []);
};