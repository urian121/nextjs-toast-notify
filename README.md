# Nextjs Toast Notify

[![npm version](https://img.shields.io/npm/v/nextjs-toast-notify.svg?style=flat-square)](https://www.npmjs.com/package/nextjs-toast-notify)
[![GitHub Repo](https://img.shields.io/badge/GitHub-repository-blue?style=flat-square&logo=github)](https://github.com/urian121/nextjs-toast-notify)
[![npm](https://img.shields.io/npm/dt/nextjs-toast-notify.svg)](https://www.npmjs.com/package/nextjs-toast-notify)

![demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/nextjs-toast-notify.gif)
👉 [Ver Código en GitHub](https://github.com/urian121/nextjs-toast-notify-con-reactjs)

**Nextjs Toast Notify** es el paquete npm que transformará cómo manejas las notificaciones en tus aplicaciones web. Diseñado para ofrecer una experiencia de usuario sin interrupciones, **Nextjs Toast Notify** permite agregar alertas emergentes (toasts) con una estética moderna y personalizable. **Nextjs Toast Notify** también destaca por su configuración intuitiva y opciones flexibles, que te permiten adaptar las notificaciones a tus necesidades específicas con facilidad.

## ¿Para Qué Fue Creado?

**Nextjs Toast Notify** fue creado para simplificar la implementación de notificaciones en aplicaciones web, permitiendo a los desarrolladores agregar mensajes informativos, de éxito, advertencia o error de forma rápida y sencilla. **Nextjs Toast Notify** es altamente personalizable y compatible con diferentes posiciones en la pantalla, así como con varios efectos de animación para mejorar la experiencia del usuario.

## ¿Qué Necesidad Resuelve?

**Nextjs Toast Notify** responde a la necesidad de mejorar la manera en que los desarrolladores muestran mensajes de notificación al usuario en aplicaciones web, sin interrumpir la interacción actual. En muchas aplicaciones web, es crucial tener una forma efectiva de informar al usuario sobre eventos importantes, resultados de acciones o errores.

## Instalación

Puedes instalar el paquete usando npm:

    $ npm install nextjs-toast-notify --save
    $ yarn add nextjs-toast-notify

## Casos de uso:

### 🔥Cómo Integrar Nextjs Toast Notify en una App ToDo con React.js 🚀

![demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/ToDoAppConReactY-nextjs-toast-notify.gif)
👉 [Ver Código en GitHub](https://github.com/urian121/Create-ToDo-List-App-with-ReactJS)

## Ejemplo Práctico utilizando React.js

```jsx
import { toast } from "nextjs-toast-notify";

function App() {
  const handleShowToast = () => {
    toast.success("¡La operación se realizó con éxito!", {
      duration: 5000,
      progress: true,
      position: "bottom-center",
      transition: "bounceIn",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
      sound: true,
    });
  };

  return <button onClick={handleShowToast}>Top center</button>;
}

export default App;
```

### 🔥Integrar Next.js Toast Notify en una aplicación de Next.js 🚀

![demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/like-dislike-nextjs-toast-notify.gif)
👉 [Ver Código en GitHub](https://github.com/urian121/sistema-like-dislikes-con-nextjs-y-nextjs-toast-notify)

# Tipos de Notificaciones

Nextjs Toast Notify permite mostrar diferentes tipos de notificaciones según el contexto de la aplicación. Para definir el tipo de notificación, solo debes especificarlo al invocar **toast**.

### Tipos de Toast

- **✅`toast.success`**: Muestra un toast de éxito.
- **❌`toast.error`**: Muestra un toast de error.
- **⚠️`toast.warning`**: Muestra un toast de advertencia.
- **⬆️`toast.info`**: Muestra un toast de información.

### Ejemplos de Uso

```jsx
import { toast } from "nextjs-toast-notify";

function App() {
  const handleShowSuccessToast = () => {
    toast.success("✅ ¡Operación exitosa!", {});
  };

  return <button onClick={handleShowSuccessToast}>Toast Success</button>;
}
export default App;
```

## Mostrar Notificaciones en Diferentes Posiciones

Para mostrar notificaciones en diferentes posiciones de la pantalla, solo necesitas especificar la opción `position` con uno de los siguientes valores:

- **`top-left`**: Esquina superior izquierda
- **`top-center`**: Centro superior
- **`top-right`**: Esquina superior derecha
- **`bottom-left`**: Esquina inferior izquierda
- **`bottom-center`**: Centro inferior
- **`bottom-right`**: Esquina inferior derecha

Aquí tienes un ejemplo de cómo configurarlo:

```jsx
toast.success("¡Operación exitosa!", {
  position: "top-right", // 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
});
```

## Uso a través de CDN

También puedes incluir `Nextjs Toast Notify` directamente en tu proyecto utilizando un enlace CDN. Sigue estos pasos:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nextjs Toast Notify con CDN</title>
  </head>
  <body>
    <button id="show-toast">Show Toast</button>

    <script type="module">
      import { toast } from "https://unpkg.com/nextjs-toast-notify@1.35.0/dist/nextjs-toast-notify.js";

      document.getElementById("show-toast").addEventListener("click", () => {
        toast.success("Hola a todos los Devs!", {
          duration: 5000, // Duración de la notificación en ms
          position: "top-right", // Posición de la notificación
          transition: "bounceIn", // Tipo de transición para la entrada
          icon: "",
          sound: true, // Reproducir sonido
        });
      });
    </script>
  </body>
</html>
```

## Ventajas y Características Clave

- **Fácil Integración**: Simple de agregar y utilizar en cualquier proyecto web.
- **Altamente Configurable**: Personaliza la duración, la posición, el progreso y el tipo de notificación.
- **Integración rápida:** Instalación simple a través de npm o yarn, listo para usar en minutos.
- **Efectos de Animación**: Soporta diferentes efectos de animación para las notificaciones de entrada y salida.
- **Control del Progreso**: Incluye una barra de progreso opcional para mostrar la duración restante de la notificación.
- **Posiciones de Notificación**: Soporta múltiples posiciones en la pantalla: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`.
- **Tipos de Notificación**: Cuatro tipos de notificación predefinidos: `success`, `error`, `warning`, `info`.
- **Animaciones**: Soporte para animaciones de entrada y salida configurables (`fadeIn`, `bounceIn`, `swingInverted`, `popUp`, `bottomToTopBounce`, `bounceInDown`).
- **Barra de Progreso**: Opcional para mostrar el progreso de la notificación.
- **Cierre Manual**: Permite al usuario cerrar las notificaciones mediante un botón de cierre.
- **Cierre Automático**: Permite definir la duración de la alerta, tras la cual se cerrará automáticamente.
- **Configuración por Defecto**: Las animaciones y el comportamiento de la notificación se pueden personalizar a través de las opciones de configuración.
- **Actualizaciones regulares:** Mantenido activamente con mejoras y actualizaciones periódicas.
- **Licencia abierta:** Publicado bajo licencia MIT, permitiendo su uso en proyectos comerciales y personales sin restricciones.
- **Documentación clara y detallada:** Incluye ejemplos prácticos y documentación completa para facilitar la implementación y configuración.

## API de Nextjs Toast Notify

La API de **Nextjs Toast Notify** te permite mostrar notificaciones emergentes con una amplia gama de configuraciones. A continuación, se detalla cómo utilizar los métodos disponibles y qué opciones puedes configurar.

### Métodos Disponibles

**Nextjs Toast Notify** expone métodos estáticos para los diferentes tipos de notificaciones:

- **`toast.success(message: string, options?: ToastOptions): void`**  
  Muestra una notificación de éxito.

- **`toast.error(message: string, options?: ToastOptions): void`**  
  Muestra una notificación de error.

- **`toast.warning(message: string, options?: ToastOptions): void`**  
  Muestra una notificación de advertencia.

- **`toast.info(message: string, options?: ToastOptions): void`**  
  Muestra una notificación informativa.

### Opciones de Configuración

Puedes personalizar el comportamiento de las notificaciones mediante el parámetro `options`, que acepta diversas configuraciones como duración, posición y estilo de la animación.

### Opciones de Personalización

Puedes personalizar las notificaciones mediante las opciones que se pasan como el segundo parámetro en cada uno de los métodos. Aquí están las opciones disponibles:

- **`duration`**:

  - **Tipo**: `number`
  - **Descripción**: Define la duración de la notificación en milisegundos.
  - **Valor por defecto**: `8000`
  - **Ejemplo**:
    ```jsx
    toast.success("¡Operación exitosa!", { 
      duration: 5000
    }); // Duración de 5 segundos
    ```

- **`progress`**:

  - **Tipo**: `boolean`
  - **Descripción**: Si se debe mostrar una barra de progreso para la notificación.
  - **Valor por defecto**: `true`
  - **Ejemplo**:
    ```jsx
    toast.info("Información importante", { 
      progress: false
    }); // Desactiva la barra de progreso
    ```

- **`position`**:

  - **Tipo**: `'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'`
  - **Descripción**: Define la posición de la notificación en la pantalla.
  - **Valor por defecto**: `'top-right'`
  - **Ejemplo**:
    ```jsx
    toast.warning("Advertencia", { 
      position: 'bottom-left'
    }); // Muestra en la esquina inferior izquierda
    ```

- **`transition`**:

  - **Tipo**: `'fadeIn' | 'bounceIn' | 'swingInverted' | 'popUp' | 'bottomToTopBounce' | 'bounceInDown'`
  - **Descripción**: El efecto de animación de entrada o salida para la notificación.
  - **Valor por defecto**: `'fadeIn'`
  - **Ejemplo**:
    ```jsx
    toast.error("Error en la operación", { 
      transition: 'bounceIn' 
    }); // Efecto de rebote
    ```

- **`icon`**:

  - **Tipo**: `string`
  - **Descripción**: Icono personalizado para la notificación (opcional). Si no se proporciona, se usa un ícono predeterminado basado en el tipo de notificación.
  - **Ejemplo**:
    ```jsx
    toast.success("¡Todo listo!", { 
      icon: '🎉' 
    }); // Usa un ícono personalizado
    ```

- **`sound`**:
  - **Tipo**: `boolean`
  - **Descripción**: Activa o desactiva un sonido cuando se muestra la notificación.
  - **Valor por defecto**: `false`
  - **Ejemplo**:
    ```jsx
    toast.info("Tienes un nuevo mensaje", { 
      sound: true 
    }); // Reproduce sonido al mostrar la notificación
    ```

### Ejemplo Completo

```jsx
import { toast } from "nextjs-toast-notify";

function App() {
  const mostrarNotificacion = () => {
    toast.success("¡Operación exitosa!", {
      duration: 4000,
      position: "top-center",
      transition: "bounceIn",
      icon: "🚀",
      progress: false,
      sound: true,
    });
  };

  return <button onClick={mostrarNotificacion}>Mostrar Notificación</button>;
}

export default App;
```
La notificación tiene una **duración de 4 segundos**, está **centrada en la parte superior**, con un efecto de **animación de rebote**, un **ícono personalizado**, **sin barra de progreso** y con **sonido activado**.


### Únete y Contribuye

Si encuentras algún problema o tienes una idea para mejorar el paquete, por favor abre un issue o envía un pull request
en GitHub: https://github.com/urian121/nextjs-toast-notify

## Desarrollado por

- [Urian Viera](https://github.com/urian123)
- [Mi portafolio](https://www.urianviera.com)
- [Canal de Youtube](https://www.youtube.com/WebDeveloperUrianViera)
- [¡Donar a través de PayPal!](https://www.paypal.com/donate/?hosted_button_id=4SV78MQJJH3VE)
- [Email](mailto:urian1213viera@gmail.com)

## Copyright

© 2024 Urian Viera. Todos los derechos reservados.

## License

Licensed under MIT

[![GitHub](https://img.shields.io/badge/GitHub-urian121/nextjs--toast--notify-181717?logo=github&style=flat-square)](https://github.com/urian121/nextjs-toast-notify)

## Agradecimientos

¡Gracias a todos los **Devs** 👨‍💻 que han utilizado y contribuido al desarrollo de **Nextjs Toast Notify**! Su apoyo y retroalimentación son fundamentales para mejorar continuamente este paquete.
