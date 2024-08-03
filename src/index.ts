import "./styles/nextjs-toast-notify.css";
import { ToastProps, ToastOptions } from "./interfaces/index";

/**
 * Crea un contenedor para las notificaciones de toast en la página si no existe uno.
 * @param position - La posición del contenedor (e.g., 'top-right', 'bottom-left').
 * @returns El contenedor creado o existente.
 */
const createToastContainer = (position: string): HTMLElement => {
  const container = document.createElement('div');
  container.className = `toast-container ${position}`;
  document.body.appendChild(container);
  return container;
};


/**
 * Elimina el contenedor de notificaciones si está vacío.
 */
const removeToastContainerIfEmpty = () => {
  const toastContainer = document.querySelector('.toast-container') as HTMLElement;
  if (toastContainer && !toastContainer.querySelector('.toast-nextjs')) {
    toastContainer.remove();
  }
};


/**
 * Obtiene el contenedor de notificaciones para la posición especificada.
 * Si no existe, se crea uno nuevo.
 * @param position - La posición del contenedor (e.g., 'top-right', 'bottom-left').
 * @returns El contenedor de notificaciones.
 */
const getToastContainer = (position: string): HTMLElement => {
  let container = document.querySelector(`.toast-container.${position}`) as HTMLElement;
  if (!container) {
    container = createToastContainer(position);
  }
  return container;
};


/**
 * Muestra una notificación de toast con los parámetros especificados.
 * @param props - Propiedades de la notificación (e.g., mensaje, tipo).
 * @param options - Opciones adicionales para la notificación (e.g., duración, posición, transición).
 */
const showToast = (props: ToastProps, options: ToastOptions = {}) => {
  const { message, type = 'success' } = props;
  const { duration = 5000, progress = true, position = 'top-right', transition = 'fadeIn' } = options; // 'fadeIn' es el valor por defecto
  const toastContainer = getToastContainer(position);

  const toast = document.createElement("div");
  toast.classList.add("toast-nextjs", type);

  // Añadir clase de animación de entrada
  if (transition) {
    toast.classList.add(`animate-${transition}`);
  } else {
    toast.classList.add(`animate-fadeIn`);
  }

  toast.innerHTML = `
    <div class="toast-content">
      <i class="check"></i>
      <div class="message">
        <span class="text text-2">${message}</span>
      </div>
    </div>
    <i class="close-toast"></i>
    ${progress ? '<div class="progress"></div>' : ''}
  `;

  // Añadir el toast al contenedor
  toastContainer.appendChild(toast);

  // Asegurarse de que la animación se aplique después de agregar al DOM
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("toast-active");
      if (progress) {
        const progressElement = toast.querySelector(".progress") as HTMLElement;
        progressElement.classList.add("toast-active");
      }
    });
  });

  // Añadir evento de cierre
  const closeButton = toast.querySelector(".close-toast") as HTMLElement;
  closeButton.addEventListener('click', () => closeToast(toast));

  // Programar el cierre después de la duración especificada
  setTimeout(() => {
    closeToast(toast);
  }, duration);
};


/**
 * Cierra una notificación de toast y la elimina después de la animación de salida.
 * @param toast - El elemento de la notificación de toast que se cerrará.
 */
const closeToast = (toast: HTMLElement) => {
  const progress = toast.querySelector(".progress") as HTMLElement;
  if (progress) {
    progress.classList.remove("toast-active");
  }

  // Añadir la clase de animación de salida
  toast.classList.remove("toast-active");

  // Verificar y aplicar la animación de salida
  if (toast.classList.contains("animate-fadeIn")) {
    toast.classList.remove("animate-fadeIn");
    toast.classList.add("animate-fadeOut");
  } else if (toast.classList.contains("animate-bounceIn")) {
    toast.classList.remove("animate-bounceIn");
    toast.classList.add("animate-bounceOut");
  }

  // Eliminar el toast después de la duración de la animación de salida
  setTimeout(() => {
    toast.remove();
    removeToastContainerIfEmpty();
  }, 500); // Ajusta este tiempo a la duración de tu animación de salida
};


// Métodos estáticos para diferentes tipos de notificaciones
/**
 * Crea un método para mostrar notificaciones de un tipo específico.
 * @param type - Tipo de notificación (e.g., 'success', 'error', 'warning', 'info').
 * @returns Una función para mostrar notificaciones de ese tipo.
 */
const createToastMethod = (type: 'success' | 'error' | 'warning' | 'info') => {
  return (message: string, options: ToastOptions = {}) => {
    showToast({ message, type }, options);
  };
};

// Objeto de métodos de notificación
const toast = {
  success: createToastMethod('success'),
  error: createToastMethod('error'),
  warning: createToastMethod('warning'),
  info: createToastMethod('info'),
};

export default toast;
