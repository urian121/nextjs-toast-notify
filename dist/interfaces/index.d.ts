/**
 * Opciones para configurar una notificación de toast.
 */
export interface ToastOptions {
    /** Duración en milisegundos que se mostrará la notificación (default: 8000). */
    duration?: number;
    /** Muestra una barra de progreso (default: true). */
    progress?: boolean;
    /** Posición de la notificación. Opciones: 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right' (default: 'top-right'). */
    position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
    /** Tipo de transición para la entrada (default: 'fadeIn'). Opciones: 'bounceIn', 'swingInverted', 'popUp', 'bottomToTopBounce', 'bounceInDown'. */
    transition?: "fadeIn" | "swingInverted" | "bounceIn" | "popUp" | "bottomToTopBounce" | "bounceInDown";
    /** Icono personalizado para la notificación (opcional). */
    icon?: string;
    /** Reproduce un sonido cuando se muestra la notificación (default: false). */
    sonido?: boolean;
}
/**
 * Propiedades para una notificación de toast.
 */
export interface ToastProps {
    /** Mensaje a mostrar en la notificación. */
    message: string;
    /** Tipo de notificación. Opciones: 'success', 'error', 'warning', 'info' (default: 'success'). */
    type?: "success" | "error" | "warning" | "info";
}
