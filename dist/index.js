// Importando el archivo de estilos
import "./styles/nextjs-toast-notify.css";

const u =
    "data:audio/mpeg;base64,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S98TjGeTj67HwglHzKczG8ftjm4sqehqZjYFWqEuOICdBDAO4NUAVA+QtAOcFcAshahhiABKiEl+XaRKiDE+pXElY4+sVKQSN3D60pIjoZLNpMEyq081VD1nsrLocWguGSx+CKW6rS5KkTNLISy4IutCz7IVA1OpoWYlibrTcIjRE2oCT8shMiEzJVQVIkxTJEiJl1BU09FOG5sakqzywaThsI9VDH1JVclr2rC0KyLrSWbJRESxLCqbKwqnqFCqSWVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5Jk5Qn0imtDQM8zwAAADSAAAAEW6aUEp7E2SAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWUvQ/cIhT8uU4Ldnod95HudViStqhysqjrSIf+BV1FwQqYUaOLERC76ai32outDsquHyUiTUbZRLKpLsPc0hVURsPZREI0WLoG2J5sb+5sWlSyS7D8lFZNOGxlGSYKORq1lv//bPss7/5NahkasFBAg6GTKGB1DKZMtjoZMFDBg6ORqwWo5GooKGBBxKIlWiq/6r+sqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSZIsP9KFfswMJHcIAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",
  S = () => {
    new Audio(u).play();
  },
  m = (q) => {
    const A = document.createElement("div");
    return (
      (A.className = `toast-container ${q}`), document.body.appendChild(A), A
    );
  },
  T = () => {
    const q = document.querySelector(".toast-container");
    q && !q.querySelector(".toast-nextjs") && q.remove();
  },
  I = (q) => {
    let A = document.querySelector(`.toast-container.${q}`);
    return A || (A = m(q)), A;
  },
  C = (q, A = {}) => {
    const { message: o, type: s = "success" } = q,
      {
        duration: t = 8e3,
        progress: e = !0,
        position: n = "top-right",
        transition: c = "fadeIn",
        icon: r,
        sonido: l,
      } = A,
      g = I(n),
      V = document.createElement("div");
    V.classList.add("toast-nextjs", s),
      V.style.setProperty("--progress-duration", `${t}ms`),
      V.classList.add(`animate-${c || "fadeIn"}`);
    const p =
        r ||
        {
          success:
            '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
          error:
            '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
          warning:
            '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-alert"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
          info: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-alert"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
        }[s],
      M =
        s === "success"
          ? "#4caf50"
          : s === "error"
          ? "#f44336"
          : s === "warning"
          ? "#ff9800"
          : s === "info"
          ? "#2196f3"
          : "#fff";
    (V.innerHTML = `
    <div class="toast-content">
      <i class="check" style="background-color: ${M};">
        ${p}
      </i>
      <div class="message">
        <span class="text text-2">${o}</span>
      </div>
    </div>
    <i class="close-toast"></i>
    ${e ? '<div class="progress"></div>' : ""}
  `),
      g.appendChild(V),
      l && S(),
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          V.classList.add("toast-active"),
            e && V.querySelector(".progress").classList.add("toast-active");
        });
      }),
      V.querySelector(".close-toast").addEventListener("click", () => a(V)),
      setTimeout(() => {
        a(V);
      }, t);
  },
  a = (q) => {
    const A = q.querySelector(".progress");
    A && A.classList.remove("toast-active"),
      q.classList.remove("toast-active"),
      q.classList.contains("animate-fadeIn")
        ? (q.classList.remove("animate-fadeIn"),
          q.classList.add("animate-fadeOut"))
        : q.classList.contains("animate-bounceIn")
        ? (q.classList.remove("animate-bounceIn"),
          q.classList.add("animate-bounceOut"))
        : q.classList.contains("animate-bottomToTopBounce")
        ? (q.classList.remove("animate-bottomToTopBounce"),
          q.classList.add("animate-topToBottomBounce"))
        : q.classList.contains("animate-bounceInDown")
        ? (q.classList.remove("animate-bounceInDown"),
          q.classList.add("animate-bounceOutUp"))
        : q.classList.contains("animate-swingInverted")
        ? (q.classList.remove("animate-swingInverted"),
          q.classList.add("animate-swingOut"))
        : q.classList.contains("animate-popUp") &&
          (q.classList.remove("animate-popUp"),
          q.classList.add("animate-popUpOut")),
      setTimeout(() => {
        q.remove(), T();
      }, 500);
  },
  i =
    (q) =>
    (A, o = {}) => {
      C({ message: A, type: q }, o);
    },
  k = {
    success: i("success"),
    error: i("error"),
    warning: i("warning"),
    info: i("info"),
  };
export { k as toast };
