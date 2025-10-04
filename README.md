# Nextjs Toast Notify

[![npm version](https://img.shields.io/npm/v/nextjs-toast-notify.svg?style=flat-square)](https://www.npmjs.com/package/nextjs-toast-notify)
[![GitHub Repo](https://img.shields.io/badge/GitHub-repository-blue?style=flat-square&logo=github)](https://github.com/urian121/nextjs-toast-notify)
[![npm](https://img.shields.io/npm/dt/nextjs-toast-notify.svg)](https://www.npmjs.com/package/nextjs-toast-notify)

![demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/nextjs-toast-notify.gif)
👉 [Ver Código en GitHub](https://github.com/urian121/nextjs-toast-notify-con-reactjs)

**Nextjs Toast Notify** es el paquete npm moderno, intuitivo, flexible, liviano que transformará cómo manejas las notificaciones en tus aplicaciones web. Diseñado para ofrecer una experiencia de usuario sin interrupciones, **Nextjs Toast Notify** permite agregar alertas emergentes (toasts) con una estética moderna y personalizable.

### ¿Para qué fue creado?

**Nextjs Toast Notify** nació para hacer que mostrar notificaciones en tus apps web sea **rápido, elegante y sin dolor de cabeza**.  
Agrega *toasts* modernos y totalmente personalizables con una sola línea de código.

### ¿Qué Necesidad Resuelve?

**Nextjs Toast Notify** responde a la necesidad de mejorar la manera en que los desarrolladores muestran mensajes de notificación al usuario en aplicaciones web, sin interrumpir la interacción actual.

## Instalación
Instala **Nextjs Toast Notify** fácilmente con tu gestor de paquetes favorito:

```bash
  # Usando npm
  npm install nextjs-toast-notify --save

  # O con yarn
  yarn add nextjs-toast-notify
```

## Casos de uso:

### 🔥Cómo Integrar Nextjs Toast Notify en una App ToDo con React.js 🚀

![demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/ToDoAppConReactY-nextjs-toast-notify.gif)
👉 [Ver Código en GitHub](https://github.com/urian121/Create-ToDo-List-App-with-ReactJS)

### Ejemplo Práctico utilizando React.js

```jsx
  import { showToast } from "nextjs-toast-notify";

  function App() {
    const handleShowToast = () => {
      showToast.success("¡La operación se realizó con éxito!", {
        duration: 5000,
        progress: true,
        position: "bottom-center",
        transition: "bounceIn",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
        sound: true,
      });
    };

    return <button onClick={handleShowToast}>Mostrar Toast</button>;
  }

  export default App;
```

### 🔥Integrar Next.js Toast Notify en una aplicación de Next.js 🚀

![demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/like-dislike-nextjs-toast-notify.gif)
👉 [Ver Código en GitHub](https://github.com/urian121/sistema-like-dislikes-con-nextjs-y-nextjs-toast-notify)

## Uso a través de CDN

También puedes incluir **Nextjs Toast Notify** directamente en tu proyecto utilizando un enlace CDN. Sigue estos pasos:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nextjs Toast Notify con CDN</title>
  </head>
  <body>
    <button id="show-toast">Mostrar Toast</button>

    <script src="https://unpkg.com/nextjs-toast-notify@latest/dist/nextjs-toast-notify.min.js"></script>
    <script>
      document.getElementById("show-toast").addEventListener("click", () => {
        showToast.success("Hola a todos los Devs de JavaScript!", {
          duration: 5000,
          position: "top-right",
          transition: "swingInverted",
          icon: "",
          sound: true,
        });
      });
    </script>
  </body>
</html>
```

## API de Nextjs Toast Notify
La API de **Nextjs Toast Notify** te permite mostrar notificaciones emergentes con una amplia gama de configuraciones. A continuación, se detalla cómo utilizar los métodos disponibles y qué opciones puedes configurar.

### 🚀 Tipos de Notificaciones  

**Nextjs Toast Notify** permite mostrar distintos tipos de notificaciones según el contexto de tu aplicación.  
Para definir el tipo, simplemente especifícalo al invocar `showToast`:  

- ✅ **`showToast.success`** → Muestra un toast de **éxito**.  
- ❌ **`showToast.error`** → Muestra un toast de **error**.  
- ⚠️ **`showToast.warning`** → Muestra un toast de **advertencia**.  
- ⬆️ **`showToast.info`** → Muestra un toast de **información**.

#### Ejemplos de Uso

```jsx
  import { showToast } from "nextjs-toast-notify";

  function App() {
    const handleShowSuccessToast = () => {
      showToast.success("¡Operación exitosa!"); // 'showToast.success' | 'showToast.error' | 'showToast.info' | 'showToast.warning'
    };

    return <button onClick={handleShowSuccessToast}>Toast Success</button>;
  }
  export default App;
```

### Mostrar Notificaciones en Diferentes Posiciones de la Pantalla  

Para mostrar notificaciones en distintas posiciones de la pantalla, especifica la opción `position` con alguno de los siguientes valores:  

- **`top-left`** → Esquina superior izquierda  
- **`top-center`** → Centro superior  
- **`top-right`** → Esquina superior derecha  
- **`bottom-left`** → Esquina inferior izquierda  
- **`bottom-center`** → Centro inferior  
- **`bottom-right`** → Esquina inferior derecha

Aquí tienes un ejemplo de cómo configurarlo:

```jsx
  import { showToast } from "nextjs-toast-notify";

  function App() {
    const handleToastPosition = () => {
      showToast.success("¡Operación exitosa!", {
        position: "top-right", // 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
      });
    };

    return <button onClick={handleToastPosition}>Toast arriba derecha</button>;
  }

  export default App;
```

### Tiempo de Duración de las Notificaciones  

La duración por defecto de las notificaciones es de **8 segundos**, pero puedes personalizarla con la opción `duration`.  

- **Propiedad:** `duration`  
- **Tipo:** `number`  
- **Por defecto:** `8000`

**Ejemplo**:

  ```jsx
    import { showToast } from "nextjs-toast-notify";

    function App() {
      const handleShowToast = () => {
        showToast.success("¡Toast de con una duración de 5 segundos!", {
          duration: 5000, // Duración en milisegundos
        });
      };
      return <button onClick={handleShowToast}>Mostrar Toast</button>;
    }

    export default App;
  ```

### Mostrar Barra de Progreso  

La **barra de progreso** se muestra por defecto en las notificaciones, pero puedes desactivarla si lo prefieres.  

- **Propiedad:** `progress`  
- **Tipo:** `boolean`  
- **Por defecto:** `true`

**Ejemplo**:

  ```jsx
    import { showToast } from "nextjs-toast-notify";

    function App() {
      const handleShowToast = () => {
        showToast.info("¡Toast de información!", {
          progress: false, // Desactiva la barra de progreso
        });
      };
      return <button onClick={handleShowToast}>Mostrar Toast</button>;
    }
    export default App;
  ```

### Posición de las Notificaciones  

La posición por defecto es la **esquina superior derecha**, pero puedes cambiarla con la opción `position`.  

- **Propiedad:** `position`  
- **Tipo:** `'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'`  
- **Por defecto:** `'top-right'`


**Ejemplo**:

  ```jsx
    import { showToast } from "nextjs-toast-notify";

    function App() {
      const handleToastPosition = () => {
        showToast.success("¡Toast centrada correctamente!", {
          position: "top-center", // 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
        });
      };

      return <button onClick={handleToastPosition}>Toast centrada</button>;
    }

    export default App;
  ```

### Animación de las Notificaciones  

Personaliza la **animación de entrada y salida** de las notificaciones mediante la opción `transition`.  

- **Propiedad:** `transition`  
- **Tipo:** `'fadeIn' | 'bounceIn' | 'swingInverted' | 'popUp' | 'topBounce' | 'bounceInDown' | 'slideInUp'`  
- **Por defecto:** `'fadeIn'`

**Ejemplo**:

  ```jsx
    import { showToast } from "nextjs-toast-notify";

    function App() {
      const handleToastAnimationPopUp = () => {
        showToast.error("!Toast con animación popUp!", {
          transition: "popUp",
        }); // Animación tipo popUp
      };
      return <button onClick={handleToastAnimationPopUp}>Toast Rebote</button>;
    }

    export default App;
  ```

### Íconos Personalizados para las Notificaciones  

Agrega un **ícono personalizado** a las notificaciones para mejorar la identidad visual.  
Si no se proporciona, se usa uno **predeterminado según el tipo de notificación**.  

- **Propiedad:** `icon`  
- **Tipo:** `string`


**Ejemplo**:

  ```jsx
    function App() {
      const handleToastIcon = () => {
        showToast.success("¡Toast con ícono!", {
          icon: "🎉", // Opcional: puede ser un ícono, emoji o SVG personalizado
        });
      };

      return <button onClick={handleToastIcon}>Toast con ícono</button>;
    }
  ```

### Sonido de Notificación  

Activa un **sonido al mostrar la notificación** para captar mejor la atención del usuario.  

- **Propiedad:** `sound`  
- **Tipo:** `boolean`  
- **Por defecto:** `false`

**Ejemplo**:

  ```jsx
    import { showToast } from "nextjs-toast-notify";

    function App() {
      const handleToastSound = () => {
        showToast.info("¡Toast con sonido activo!", {
          sound: true, // Opcional: habilita el sonido (true o false)
        });
      };
      return <button onClick={handleToastSound}>Toast con sonido</button>;
    }

    export default App;
  ```

### Ejemplo Completo

```jsx
import { showToast } from "nextjs-toast-notify";

function App() {
  const mostrarNotificacion = () => {
    showToast.success("¡Operación exitosa!", {
      duration: 4000, // Duración del toast en milisegundos (4 segundos)
      position: "top-center", // Posición en pantalla del toast
      transition: "bounceIn", // Animación de entrada
      icon: "🚀", // Ícono personalizado (puede ser emoji, svg o HTML)
      progress: false, // Mostrar o no la barra de progreso
      sound: true, // Reproducir sonido al mostrar el toast
    });
  };

  return <button onClick={mostrarNotificacion}>Mostrar Notificación</button>;
}

export default App;
```

La notificación tiene una **duración de 4 segundos**, está **centrada en la parte superior**, con un efecto de **animación de rebote**, un **ícono personalizado**, **sin barra de progreso** y con **sonido activado**.

## 🚀 Características

- **Integración rápida:** Instálalo con npm o yarn y úsalo en minutos.  
- **Altamente configurable:** Controla duración, posición, tipo y progreso.  
- **Animaciones personalizables:** Soporta varios efectos de entrada y salida.  
- **Múltiples posiciones:** `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`.  
- **Tipos de notificación:** `success`, `error`, `warning`, `info`.  
- **Cierre manual o automático** con barra de progreso opcional.  
- **Configuraciones por defecto** fácilmente modificables.  
- **Mantenimiento activo** y **licencia MIT**.  
- **Documentación clara** con ejemplos prácticos.

## 🤝 Únete y Contribuye

Si encuentras algún problema o tienes una idea para mejorar el paquete, por favor abre un issue o envía un pull request
en GitHub: https://github.com/urian121/nextjs-toast-notify

## 👨‍💻 Desarrollador

**Urian Viera**  
🌐 [urianviera.com](https://www.urianviera.com)  
📺 [YouTube](https://www.youtube.com/WebDeveloperUrianViera)  
💌 [urian1213viera@gmail.com](mailto:urian1213viera@gmail.com)  
☕ [¡Apóyame en PayPal!](https://www.paypal.com/donate/?hosted_button_id=4SV78MQJJH3VE)

## Copyright

© 2024 Urian Viera. Todos los derechos reservados.

## License

Licensed under MIT

[![GitHub](https://img.shields.io/badge/GitHub-urian121/nextjs--toast--notify-181717?logo=github&style=flat-square)](https://github.com/urian121/nextjs-toast-notify)

## Agradecimientos

¡Gracias a todos los **Devs** 👨‍💻 que han utilizado y contribuido al desarrollo de **Nextjs Toast Notify**! Su apoyo y retroalimentación son fundamentales para mejorar continuamente este paquete.
