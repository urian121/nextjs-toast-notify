import "./styles/nextjs-toast-notify.css";
import { ToastProps, ToastOptions } from "./interfaces/index";

const createToastContainer = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
};

const removeToastContainerIfEmpty = () => {
  const toastContainer = document.querySelector('.toast-container') as HTMLElement;
  if (toastContainer && !toastContainer.querySelector('.toast')) {
    toastContainer.remove();
  }
};

const getToastContainer = (): HTMLElement => {
  return document.querySelector('.toast-container') || createToastContainer();
};

const showToast = (props: ToastProps, options: ToastOptions = {}) => {
  const { message, type = 'success' } = props;
  const { duration = 5000, progress = true } = options;
  const toastContainer = getToastContainer();

  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.innerHTML = `
    <div class="toast-content">
      <i class="check"></i>
      <div class="message">
        <span class="text text-2">${message}</span>
      </div>
    </div>
    <i class="close"></i>
    ${progress ? '<div class="progress"></div>' : ''}
  `;

  // Add toast to container
  toastContainer.appendChild(toast);

  // Add event listener to close button
  const closeButton = toast.querySelector(".close") as HTMLElement;
  closeButton.addEventListener('click', () => closeToast(toast));

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("active");
      if (progress) {
        const progressElement = toast.querySelector(".progress") as HTMLElement;
        progressElement.classList.add("active");
      }
    });
  });

  setTimeout(() => {
    closeToast(toast);
  }, duration);
};

const closeToast = (toast: HTMLElement) => {
  const progress = toast.querySelector(".progress") as HTMLElement;
  if (progress) {
    progress.classList.remove("active");
  }
  toast.classList.remove("active");
  toast.classList.add("exit");

  setTimeout(() => {
    toast.remove();
    removeToastContainerIfEmpty();
  }, 500);
};

// Static methods for different types
const createToastMethod = (type: 'success' | 'error' | 'warning' | 'info') => {
  return (message: string, options: ToastOptions = {}) => {
    showToast({ message, type }, options);
  };
};

const toast = {
  success: createToastMethod('success'),
  error: createToastMethod('error'),
  warning: createToastMethod('warning'),
  info: createToastMethod('info'),
};

export default toast;
