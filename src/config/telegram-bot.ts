// Telegram Bot Configuration for Muvr Mini App

export const TELEGRAM_BOT_CONFIG = {
  // Bot Token (you'll get this from @BotFather)
  BOT_TOKEN: process.env.REACT_APP_TELEGRAM_BOT_TOKEN || '7977727899:AAFuZ116BnslKa5eronyRL7qZhxvCUYaPNQ',
  
  // Bot Username (without @)
  BOT_USERNAME: 'muvr_fitness_bot',
  
  // Mini App Name
  MINI_APP_NAME: 'Muvr Fitness',
  
  // Mini App Short Name
  MINI_APP_SHORT_NAME: 'Muvr',
  
  // Mini App Description
  MINI_APP_DESCRIPTION: 'Connect with fitness enthusiasts and join activities in your area',
  
  // Mini App URL (your deployed app URL)
  MINI_APP_URL: process.env.REACT_APP_MINI_APP_URL || 'https://your-domain.com',
  
  // Bot Commands
  COMMANDS: [
    {
      command: 'start',
      description: 'Start the Muvr fitness app'
    },
    {
      command: 'activities',
      description: 'Browse fitness activities'
    },
    {
      command: 'create',
      description: 'Create a new fitness activity'
    },
    {
      command: 'profile',
      description: 'View your fitness profile'
    },
    {
      command: 'help',
      description: 'Get help with Muvr'
    }
  ],
  
  // Web App Button Text
  WEB_APP_BUTTON_TEXT: '🏃‍♂️ Open Muvr',
  
  // Start Message
  START_MESSAGE: `🏃‍♂️ Welcome to Muvr!

Connect with fitness enthusiasts in your area and join exciting activities!

🎯 What you can do:
• Browse fitness activities
• Join group workouts
• Create your own activities
• Connect with like-minded people

Click the button below to start your fitness journey!`,
  
  // Help Message
  HELP_MESSAGE: `🤝 How to use Muvr:

📱 **Getting Started:**
1. Click "Open Muvr" to launch the app
2. Create your fitness profile
3. Browse activities in your area
4. Join activities that interest you

🏃‍♂️ **Features:**
• Find workout partners
• Join group activities
• Create your own events
• Track your fitness journey

❓ **Need Help?**
Contact us at support@muvr.com`,
  
  // Activity Categories for Bot
  ACTIVITY_CATEGORIES: [
    '🏃‍♂️ Running',
    '🧘‍♀️ Yoga',
    '🎾 Tennis',
    '💪 Gym',
    '⚽ Football',
    '🏊‍♂️ Swimming',
    '🏋️‍♂️ Other'
  ]
};

// Bot API endpoints
export const BOT_API = {
  BASE_URL: 'https://api.telegram.org/bot',
  
  // Methods
  SET_COMMANDS: '/setMyCommands',
  SEND_MESSAGE: '/sendMessage',
  SEND_PHOTO: '/sendPhoto',
  EDIT_MESSAGE: '/editMessageText',
  DELETE_MESSAGE: '/deleteMessage',
  ANSWER_CALLBACK_QUERY: '/answerCallbackQuery',
  SET_WEBHOOK: '/setWebhook',
  DELETE_WEBHOOK: '/deleteWebhook',
  GET_WEBHOOK_INFO: '/getWebhookInfo',
  GET_ME: '/getMe',
  GET_UPDATES: '/getUpdates'
};

// Webhook configuration
export const WEBHOOK_CONFIG = {
  URL: process.env.REACT_APP_WEBHOOK_URL || 'https://your-domain.com/webhook',
  SECRET_TOKEN: process.env.REACT_APP_WEBHOOK_SECRET || 'your-secret-token',
  MAX_CONNECTIONS: 40
};

// Mini App configuration
export const MINI_APP_CONFIG = {
  // App title
  TITLE: 'Muvr - Social Fitness',
  
  // App description for Telegram
  DESCRIPTION: 'Connect with fitness enthusiasts and join activities in your area',
  
  // App icon (URL to your app icon)
  ICON_URL: 'https://your-domain.com/images/muvr_logo.png',
  
  // App color scheme
  COLOR_SCHEME: {
    PRIMARY: '#35179d',
    SECONDARY: '#2a146a',
    BACKGROUND: '#f5f6fa',
    SURFACE: '#ffffff',
    TEXT: '#1a1a1a',
    TEXT_SECONDARY: '#666666'
  },
  
  // App features
  FEATURES: [
    'Browse fitness activities',
    'Join group workouts',
    'Create activities',
    'Connect with fitness enthusiasts',
    'Track your fitness journey'
  ],
  
  // App permissions
  PERMISSIONS: [
    'Read user profile',
    'Send messages to user',
    'Access user location (optional)'
  ]
};

// Bot commands implementation
export const BOT_COMMANDS = {
  START: '/start',
  ACTIVITIES: '/activities',
  CREATE: '/create',
  PROFILE: '/profile',
  HELP: '/help'
};

// Message templates
export const MESSAGE_TEMPLATES = {
  WELCOME: (userName: string) => `👋 Hi ${userName}! Welcome to Muvr!`,
  
  ACTIVITY_CREATED: (activityName: string) => `✅ Activity "${activityName}" created successfully!`,
  
  ACTIVITY_JOINED: (activityName: string) => `🎉 You've joined "${activityName}"!`,
  
  ERROR: (message: string) => `❌ Error: ${message}`,
  
  SUCCESS: (message: string) => `✅ ${message}`,
  
  INFO: (message: string) => `ℹ️ ${message}`
};

// Inline keyboard layouts
export const INLINE_KEYBOARDS = {
  MAIN_MENU: {
    inline_keyboard: [
      [
        { text: '🏃‍♂️ Browse Activities', callback_data: 'browse_activities' },
        { text: '➕ Create Activity', callback_data: 'create_activity' }
      ],
      [
        { text: '👤 My Profile', callback_data: 'my_profile' },
        { text: '📊 My Activities', callback_data: 'my_activities' }
      ],
      [
        { text: '🏠 Open Muvr App', web_app: { url: MINI_APP_CONFIG.ICON_URL } }
      ]
    ]
  },
  
  ACTIVITY_CATEGORIES: {
    inline_keyboard: [
      [
        { text: '🏃‍♂️ Running', callback_data: 'category_running' },
        { text: '🧘‍♀️ Yoga', callback_data: 'category_yoga' }
      ],
      [
        { text: '🎾 Tennis', callback_data: 'category_tennis' },
        { text: '💪 Gym', callback_data: 'category_gym' }
      ],
      [
        { text: '⚽ Football', callback_data: 'category_football' },
        { text: '🏊‍♂️ Swimming', callback_data: 'category_swimming' }
      ],
      [
        { text: '🏋️‍♂️ Other', callback_data: 'category_other' }
      ],
      [
        { text: '⬅️ Back to Menu', callback_data: 'main_menu' }
      ]
    ]
  }
}; 