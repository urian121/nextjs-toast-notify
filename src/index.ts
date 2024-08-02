import "./styles/toast.css";
import { ToastProps } from "./interfaces/index";

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

const showToast = (props: ToastProps) => {
  const { message, duration = 5000 } = props;
  const toastContainer = getToastContainer();

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = `
    <div class="toast-content">
      <i class="check"></i>
      <div class="message">
        <span class="text text-2">${message}</span>
      </div>
    </div>
    <i class="close"></i>
    <div class="progress"></div>
  `;

  // Add toast to container
  toastContainer.appendChild(toast);

  // Add event listener to close button
  const closeButton = toast.querySelector(".close") as HTMLElement;
  closeButton.addEventListener('click', () => closeToast(toast));

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("active");
      const progress = toast.querySelector(".progress") as HTMLElement;
      progress.classList.add("active");
    });
  });

  setTimeout(() => {
    closeToast(toast);
  }, duration);
};

const closeToast = (toast: HTMLElement) => {
  const progress = toast.querySelector(".progress") as HTMLElement;
  progress.classList.remove("active");
  toast.classList.remove("active");
  toast.classList.add("exit");

  setTimeout(() => {
    toast.remove();
    removeToastContainerIfEmpty();
  }, 500);
};

export { showToast, closeToast };
