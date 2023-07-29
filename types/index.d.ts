export {};

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any; // whatever type you want to give. (any,number,float etc)
  }
}
