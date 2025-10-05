import css from "./styles/nextjs-toast-notify.css";
import chasquidoSound from "./sonidos/chasquido.mp3";
import { ToastProps, ToastOptions } from "./interfaces/index";

// Inyección automática de CSS
if (typeof window !== "undefined" && typeof document !== "undefined") {
  if (!document.querySelector('style[data-nextjs-toast-notify]')) {
    const style = document.createElement("style");
    style.setAttribute('data-nextjs-toast-notify', 'true');
    style.textContent = css;
    document.head.appendChild(style);
  }
}

// Iconos para cada tipo de toast
const TOAST_ICONS = {
  success: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  error: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  warning: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
} as const;

// Mapa de colores para cada tipo de toast
const TOAST_COLORS = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3",
} as const;

// Mapa de animaciones de salida para cada animación de entrada
const ANIMATION_EXIT_MAP = {
  fadeIn: "fadeOut",
  bounceIn: "bounceOut",
  topBounce: "topBounceOut",
  bounceInDown: "bounceOutUp",
  swingInverted: "swingOut",
  popUp: "popUpOut",
  slideInUp: "slideOutDown",
} as const;

// Reproduce el sonido de notificación
const playSound = () => {
  const audio = new Audio(chasquidoSound);
  audio.volume = 0.5;
  audio.play().catch(() => {}); // silencio sin logs innecesarios
};

// Obtiene o crea el contenedor de toast para la posición especificada
const getToastContainer = (position: string): HTMLElement => {
  let container = document.querySelector(`.toast-container.${position}`) as HTMLElement;
  
  if (!container) {
    container = document.createElement("div");
    container.className = `toast-container ${position}`;
    document.body.appendChild(container);
  }
  
  return container;
};

// Elimina el contenedor si está vacío
const cleanupContainer = (container: HTMLElement): void => {
  if (!container.querySelector(".toast-nextjs")) {
    container.remove();
  }
};

// Cierra y elimina una notificación
const closeToast = (toast: HTMLElement): void => {
  const progress = toast.querySelector(".progress") as HTMLElement;
  progress?.classList.remove("toast-active");
  toast.classList.remove("toast-active");

  // Aplicar animación de salida
  const currentAnimation = Object.keys(ANIMATION_EXIT_MAP).find(anim => 
    toast.classList.contains(`animate-${anim}`)
  );
  
  // Aplicar animación de salida si existe
  if (currentAnimation) {
    toast.classList.remove(`animate-${currentAnimation}`);
    toast.classList.add(`animate-${ANIMATION_EXIT_MAP[currentAnimation as keyof typeof ANIMATION_EXIT_MAP]}`);
  }

  // Eliminar el toast después de la animación
  setTimeout(() => {
    const container = toast.parentElement;
    toast.remove();
    if (container) cleanupContainer(container);
  }, 500);
};

// Crea y muestra una notificación de toast
const createToast = (props: ToastProps, options: ToastOptions = {}): void => {
  const { message, type = "success" } = props;
  const {
    duration = 8000,
    progress = true,
    position = "top-right",
    transition = "fadeIn",
    icon,
    sound,
  } = options;

  const container = getToastContainer(position);
  const toast = document.createElement("div");
  
  toast.className = `toast-nextjs ${type} animate-${transition}`;
  toast.style.setProperty("--progress-duration", `${duration}ms`);

  const toastIcon = icon || TOAST_ICONS[type];
  const backgroundColor = TOAST_COLORS[type];

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
    ${progress ? '<div class="progress"></div>' : ""}
  `;

  container.appendChild(toast);

  if (sound) playSound();

  // Activar animación
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("toast-active");
      const progressEl = toast.querySelector(".progress") as HTMLElement;
      progressEl?.classList.add("toast-active");
    });
  });

  // Event listeners
  toast.querySelector(".close-toast")?.addEventListener("click", () => closeToast(toast));
  setTimeout(() => closeToast(toast), duration);
};

// Métodos de toast por tipo
const showToast = {
  success: (message: string, options?: ToastOptions) => 
    createToast({ message, type: "success" }, options),
  error: (message: string, options?: ToastOptions) => 
    createToast({ message, type: "error" }, options),
  warning: (message: string, options?: ToastOptions) => 
    createToast({ message, type: "warning" }, options),
  info: (message: string, options?: ToastOptions) => 
    createToast({ message, type: "info" }, options),
};

// Exportaciones con tipado mejorado
export { showToast, type ToastOptions };

// Exportar globalmente para uso con CDN
if (typeof window !== 'undefined') {
  (window as any).showToast = showToast;
}