declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_EMAILJS_SERVICE_ID: string | undefined;
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string | undefined;
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string | undefined;
    }
  }