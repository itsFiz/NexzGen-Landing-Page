// lib/email-config.ts
interface BaseEmailConfigType {
    FROM: string;
    TO: string;
    REPLY_TO: string;
    PURPOSE: string;
    AUTO_REPLY: boolean;
  }
  
  interface ConfidentialEmailConfigType extends BaseEmailConfigType {
    CONFIDENTIAL: boolean;
  }
  
  interface SystemEmailConfigType {
    FROM: string;
    PURPOSE: string;
    AUTO_REPLY: boolean;
  }
  
  interface EmailConfigMap {
    CAREERS: BaseEmailConfigType;
    HR: ConfidentialEmailConfigType;
    SUPPORT: BaseEmailConfigType;
    GENERAL: BaseEmailConfigType;
    SYSTEM: SystemEmailConfigType;
  }
  
  export const EMAIL_CONFIG: EmailConfigMap = {
    // Recruitment related
    CAREERS: {
      FROM: 'careers@nexzgen.com',
      TO: 'careers@nexzgen.com',
      REPLY_TO: 'careers@nexzgen.com',
      PURPOSE: 'recruitment and job applications',
      AUTO_REPLY: true,
    },
    
    // Internal HR matters
    HR: {
      FROM: 'hr@nexzgen.com',
      TO: 'hr@nexzgen.com',
      REPLY_TO: 'hr@nexzgen.com',
      PURPOSE: 'internal employee matters',
      AUTO_REPLY: true,
      CONFIDENTIAL: true,
    },
  
    // General inquiries
    GENERAL: {
      FROM: 'info@nexzgen.com',
      TO: 'info@nexzgen.com',
      REPLY_TO: 'info@nexzgen.com',
      PURPOSE: 'general inquiries and business communications',
      AUTO_REPLY: true,
    },
  
    // Support inquiries
    SUPPORT: {
      FROM: 'support@nexzgen.com',
      TO: 'support@nexzgen.com',
      REPLY_TO: 'support@nexzgen.com',
      PURPOSE: 'technical support and customer service',
      AUTO_REPLY: true,
    },
    
    // No-reply for automated messages
    SYSTEM: {
      FROM: 'noreply@nexzgen.com',
      PURPOSE: 'automated notifications and system messages',
      AUTO_REPLY: false,
    },
  };