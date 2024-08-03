// interfaces/index.ts
export interface ToastOptions {
  duration?: number;
  progress?: boolean;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  transition?: 'bounceIn' | 'fadeIn';
  pauseOnHover?: boolean;
}

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info'; // Tipo de alerta
}