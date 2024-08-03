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
 * @param props - Propiedades de la notificación.
 * @param props.message - Mensaje a mostrar en la notificación.
 * @param props.type - Tipo de notificación. Opciones: 'success', 'error', 'warning', 'info' (default: 'success').
 * @param options - Opciones adicionales para la notificación.
 * @param options.duration - Duración en milisegundos que se mostrará la notificación (default: 5000).
 * @param options.progress - Muestra una barra de progreso (default: true).
 * @param options.position - Posición de la notificación. Opciones: 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right' (default: 'top-right').
 * @param options.transition - Tipo de transición para la entrada (default: 'fadeIn'). Opciones: 'bounceIn', 'fadeIn'.
 * @param options.icon - Icono personalizado para la notificación (opcional). Si no se proporciona, se usa un ícono predeterminado basado en el tipo de notificación.
 */
const showToast = (props: ToastProps, options: ToastOptions = {}) => {
  const { message, type = 'success' } = props;
  const { duration = 5000, progress = true, position = 'top-right', transition = 'fadeIn', icon } = options;
  const toastContainer = getToastContainer(position);

  const toast = document.createElement("div");
  toast.classList.add("toast-nextjs", type);

  // Añadir clase de animación de entrada
  if (transition) {
    toast.classList.add(`animate-${transition}`);
  } else {
    toast.classList.add(`animate-fadeIn`);
  }

  // Iconos predeterminados según el tipo de toast
  const tipos_iconos = {
    success: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
    error: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
    warning: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-alert"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>'
  };

  // Determinar el ícono a usar
  const toastIcon = icon || tipos_iconos[type];

  const backgroundColor = 
    type === 'success' ? '#4caf50' :
    type === 'error' ? '#f44336' :
    type === 'warning' ? '#ff9800' :
    type === 'info' ? '#2196f3' : '#fff';

  toast.innerHTML = `
    <div class="toast-content">
      <i class="check" style="background-color: ${backgroundColor};">
        ${toastIcon}
      </i>
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
