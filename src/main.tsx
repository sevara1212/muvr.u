import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { setupTelegramViewportListener } from './utils/telegramViewport'

// Setup Telegram viewport listener
setupTelegramViewportListener();

createRoot(document.getElementById("root")!).render(<App />);
