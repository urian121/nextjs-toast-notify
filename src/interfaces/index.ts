/**
 * Posiciones disponibles para las notificaciones de toast.
 */
export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

/**
 * Transiciones disponibles para las notificaciones de toast.
 */
export type ToastTransition = 
  | "fadeIn" 
  | "swingInverted" 
  | "bounceIn" 
  | "popUp" 
  | "topBounce" 
  | "bounceInDown" 
  | "slideInUp";

/**
 * Tipos de notificación disponibles.
 */
export type ToastType = "success" | "error" | "warning" | "info";

/**
 * Opciones para configurar una notificación de toast.
 * Todas las propiedades aparecerán en el autocompletado del IDE.
 */
export interface ToastOptions {
  /** 
   * Duración en milisegundos que se mostrará la notificación.
   * @default 8000
   * @example 4000
   */
  duration?: number;

  /** 
   * Muestra una barra de progreso.
   * @default true
   * @example true
   */
  progress?: boolean;

  /** 
   * Posición de la notificación en la pantalla.
   * @default "top-right"
   * @example "top-center"
   */
  position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

  /** 
   * Tipo de transición para la entrada de la notificación.
   * @default "fadeIn"
   * @example "slideInUp"
   */
  transition?: "fadeIn" | "swingInverted" | "bounceIn" | "popUp" | "topBounce" | "bounceInDown" | "slideInUp";

  /** 
   * Icono personalizado para la notificación (HTML string).
   * Si no se proporciona, se usa el icono por defecto del tipo.
   * @example '<svg>...</svg>'
   */
  icon?: string;

  /** 
   * Reproduce un sonido cuando se muestra la notificación.
   * @default false
   * @example true
   */
  sound?: boolean;
}

/**
 * Propiedades para una notificación de toast.
 */
export interface ToastProps {
  /** Mensaje a mostrar en la notificación. */
  message: string;

  /** 
   * Tipo de notificación.
   * @default "success"
   */
  type?: "success" | "error" | "warning" | "info";
}
