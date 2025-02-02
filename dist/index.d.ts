import { ToastOptions } from './interfaces/index';
/**
 * Objeto de métodos para mostrar notificaciones de diferentes tipos.
 */
declare const toast: {
    success: (message: string, options?: ToastOptions) => void;
    error: (message: string, options?: ToastOptions) => void;
    warning: (message: string, options?: ToastOptions) => void;
    info: (message: string, options?: ToastOptions) => void;
};
export { toast };
