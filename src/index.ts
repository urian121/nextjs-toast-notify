import "./styles/toast.css";
import { ToastProps } from "./interfaces/index";

const showToast = (props: ToastProps) => {
  const { message, duration = 5000 } = props;
  const toastContainer = document.querySelector(".toast-container") as HTMLElement;

  if (!toastContainer) {
    console.error("No toast container found");
    return;
  }

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = `
    <div class="toast-content">
      <i class="check"></i>
      <div class="message">
        <span class="text text-2">${message}</span>
      </div>
    </div>
    <i class="close" onclick="closeToast(this.parentElement)"></i>
    <div class="progress"></div>
  `;

  toastContainer.appendChild(toast);

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
  }, 500);
};

export { showToast, closeToast };
