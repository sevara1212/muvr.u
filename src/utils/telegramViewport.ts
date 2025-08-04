/**
 * Utility functions for handling Telegram Mini App viewport issues
 */

export const resetTelegramViewport = () => {
  // Check if we're in Telegram WebView
  const isTelegram = window.Telegram && window.Telegram.WebView;
  
  if (isTelegram) {
    // Reset viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
    }
    
    // Reset zoom and transform
    document.body.style.zoom = '1';
    document.body.style.transform = 'scale(1)';
    document.body.style.transformOrigin = 'top left';
    
    // Reset document element zoom
    document.documentElement.style.zoom = '1';
    
    // Force a reflow
    document.body.offsetHeight;
    
    console.log('🔧 Telegram viewport reset applied');
  }
};

export const isTelegramWebView = (): boolean => {
  return !!(window.Telegram && window.Telegram.WebView);
};

export const setupTelegramViewportListener = () => {
  if (!isTelegramWebView()) return;
  
  // Reset viewport on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', resetTelegramViewport);
  } else {
    resetTelegramViewport();
  }
  
  // Reset on window resize
  window.addEventListener('resize', resetTelegramViewport);
  
  // Reset on orientation change
  window.addEventListener('orientationchange', () => {
    setTimeout(resetTelegramViewport, 100);
  });
}; 