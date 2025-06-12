// components/login/types.ts

export type FormData = {
    fullName: string;
    email: string;
    mobile: string;
    location: string;
    dateOfBirth: string;
    gender: string;
    targetExamYear: string;
    programs: string[];
  };
  
  
  export interface RegistrationModalProps {
    closeModal: () => void;
  }
  
  export interface OTPResponse {
    success: boolean;
    error?: unknown;
    userToken?: string;
  }