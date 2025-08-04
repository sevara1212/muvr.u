import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useTelegramViewport = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we're in Telegram WebView
    const isTelegram = window.Telegram && window.Telegram.WebView;
    
    if (isTelegram) {
      const resetViewport = () => {
        // Force viewport meta tag reset
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
        }
        
        // Force zoom and transform reset
        document.body.style.zoom = '1';
        document.body.style.transform = 'scale(1)';
        document.body.style.transformOrigin = 'top left';
        
        // Reset any CSS zoom
        document.documentElement.style.zoom = '1';
        
        // Force a reflow
        document.body.offsetHeight;
        
        console.log('🔧 Telegram viewport reset applied');
      };
      
      // Reset viewport after navigation
      const timeoutId = setTimeout(resetViewport, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname]); // Reset on route change
}; 