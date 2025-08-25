import emailjs from '@emailjs/browser';

// EmailJS configuration
// You'll need to set up EmailJS and get these credentials
const EMAILJS_SERVICE_ID = 'service_sbf5jqm'; // EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_lrvgfas'; // EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'GYAgjc6ban3tmxlZQ'; // EmailJS public key

export interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// OTP storage using localStorage (persists across page redirects)
const getOTPStorage = () => {
  try {
    const stored = localStorage.getItem('otp_storage');
    return stored ? new Map(JSON.parse(stored)) : new Map();
  } catch (error) {
    console.error('Error reading OTP storage:', error);
    return new Map();
  }
};

const saveOTPStorage = (storage: Map<string, any>) => {
  try {
    localStorage.setItem('otp_storage', JSON.stringify(Array.from(storage.entries())));
  } catch (error) {
    console.error('Error saving OTP storage:', error);
  }
};

// Generate OTP code
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export const emailService = {
  // Send OTP email using EmailJS
  async sendOTP(email: string, name: string): Promise<EmailResponse> {
    try {
      console.log(`📧 Sending OTP to ${email} for ${name}`);
      console.log(`📧 Using EmailJS config:`, {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY?.substring(0, 10) + '...'
      });
      
      // Generate OTP
      const otp = generateOTP();
      const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes
      
      // Store OTP
      const otpStorage = getOTPStorage();
      otpStorage.set(email, {
        otp,
        expiresAt,
        attempts: 0
      });
      saveOTPStorage(otpStorage);
      
      console.log(`📧 Generated OTP: ${otp} (stored for ${email})`);
      
      // Send email using EmailJS
      const templateParams = {
        // Template expects these exact variable names
        passcode: otp,
        email: email,
        time: new Date(Date.now() + 15 * 60 * 1000).toLocaleString(), // 15 minutes from now
        // Additional parameters for flexibility
        user_email: email,
        user_name: name,
        name: name
      };

      console.log(`📧 Sending email with params:`, templateParams);

      console.log(`📧 Attempting to send email with EmailJS...`);
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ Email sent successfully:', result);
      console.log('✅ EmailJS response:', {
        status: result.status,
        text: result.text,
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID
      });
      
      // Always show the OTP in console for development/testing
      console.log('🔑 OTP CODE FOR TESTING:', otp);
      console.log('📧 Email sent to:', email);
      console.log('📧 If you don\'t see the code in the email, use the console code above');
      
      return { 
        success: true, 
        message: 'OTP sent successfully' 
      };
    } catch (error: any) {
      console.error('❌ Error sending OTP:', error);
      console.error('❌ Error details:', {
        message: error.message,
        code: error.code,
        status: error.status,
        text: error.text,
        stack: error.stack
      });
      
      // If EmailJS fails, fall back to mock for development
      const otpStorage = getOTPStorage();
      console.log('📧 EmailJS failed, using mock fallback...');
      console.log('📧 Mock Email Content:');
      console.log(`To: ${email}`);
      console.log(`Subject: Muvr - Email Verification Code`);
      console.log(`Body: Hi ${name}, your verification code is: ${otpStorage.get(email)?.otp}`);
      console.log(`This code will expire in 10 minutes.`);
      console.log('📧 For development: Check console above for the OTP code');
      
      // Show the OTP in a more visible way for development
      console.log('🔑 OTP CODE FOR TESTING:', otpStorage.get(email)?.otp);
      
      return { 
        success: true, 
        message: 'OTP sent successfully (mock - check console for code)' 
      };
    }
  },

  // Verify OTP
  async verifyOTP(email: string, otp: string): Promise<EmailResponse> {
    try {
      console.log(`🔍 Verifying OTP for ${email}: ${otp}`);
      
      const otpStorage = getOTPStorage();
      const storedData = otpStorage.get(email);
      
      if (!storedData) {
        return { 
          success: false, 
          error: 'OTP not found or expired' 
        };
      }
      
      // Check if OTP is expired
      if (Date.now() > storedData.expiresAt) {
        otpStorage.delete(email);
        saveOTPStorage(otpStorage);
        return { 
          success: false, 
          error: 'OTP has expired' 
        };
      }
      
      // Check attempts
      if (storedData.attempts >= 3) {
        otpStorage.delete(email);
        saveOTPStorage(otpStorage);
        return { 
          success: false, 
          error: 'Too many attempts' 
        };
      }
      
      // Verify OTP
      if (storedData.otp !== otp) {
        // Increment attempts
        storedData.attempts++;
        otpStorage.set(email, storedData);
        saveOTPStorage(otpStorage);
        return { 
          success: false, 
          error: 'Invalid OTP code' 
        };
      }
      
      // OTP is valid - delete it
      otpStorage.delete(email);
      saveOTPStorage(otpStorage);
      
      console.log(`✅ OTP verified successfully for ${email}`);
      
      return { 
        success: true, 
        message: 'Email verified successfully' 
      };
    } catch (error: any) {
      console.error('Error verifying OTP:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to verify OTP' 
      };
    }
  },

  // Resend OTP
  async resendOTP(email: string, name: string): Promise<EmailResponse> {
    try {
      console.log(`📧 Resending OTP to ${email} for ${name}`);
      
      // Delete existing OTP if any
      const otpStorage = getOTPStorage();
      otpStorage.delete(email);
      
      // Generate new OTP
      const otp = generateOTP();
      const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes
      
      // Store new OTP
      otpStorage.set(email, {
        otp,
        expiresAt,
        attempts: 0
      });
      saveOTPStorage(otpStorage);
      
      // Send new email using EmailJS
      const templateParams = {
        // Template expects these exact variable names
        passcode: otp,
        email: email,
        time: new Date(Date.now() + 15 * 60 * 1000).toLocaleString(), // 15 minutes from now
        // Additional parameters for flexibility
        user_email: email,
        user_name: name,
        name: name
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ Resend email sent successfully:', result);
      
      return { 
        success: true, 
        message: 'New OTP sent successfully' 
      };
    } catch (error: any) {
      console.error('❌ Error resending OTP:', error);
      
      // If EmailJS fails, fall back to mock for development
      const otpStorage = getOTPStorage();
      console.log('📧 EmailJS resend failed, using mock fallback...');
      console.log('📧 Mock Email Content (Resend):');
      console.log(`To: ${email}`);
      console.log(`Subject: Muvr - New Email Verification Code`);
      console.log(`Body: Hi ${name}, your new verification code is: ${otpStorage.get(email)?.otp}`);
      console.log(`This code will expire in 10 minutes.`);
      console.log('📧 For development: Check console above for the new OTP code');
      
      // Show the OTP in a more visible way for development
      console.log('🔑 NEW OTP CODE FOR TESTING:', otpStorage.get(email)?.otp);
      
      return { 
        success: true, 
        message: 'New OTP sent successfully (mock - check console for code)' 
      };
      
      return { 
        success: false, 
        error: error.message || 'Failed to resend OTP' 
      };
    }
  },

  // Get stored OTP for debugging (remove in production)
  getStoredOTP(email: string): string | null {
    const otpStorage = getOTPStorage();
    const storedData = otpStorage.get(email);
    return storedData ? storedData.otp : null;
  },

  // Initialize EmailJS
  init() {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log('✅ EmailJS initialized with key:', EMAILJS_PUBLIC_KEY?.substring(0, 10) + '...');
    } catch (error) {
      console.error('❌ EmailJS initialization failed:', error);
    }
  },

  // Test EmailJS connection
  async testConnection(): Promise<boolean> {
    try {
      console.log('🧪 Testing EmailJS connection...');
      const testParams = {
        // Template expects these exact variable names
        passcode: '123456',
        email: 'test@example.com',
        time: new Date(Date.now() + 15 * 60 * 1000).toLocaleString(),
        // Additional parameters
        user_email: 'test@example.com',
        user_name: 'Test User',
        name: 'Test User'
      };
      
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        testParams,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('✅ EmailJS test successful:', result);
      return true;
    } catch (error: any) {
      console.error('❌ EmailJS test failed:', error);
      return false;
    }
  }
};
