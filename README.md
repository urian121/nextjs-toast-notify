# Nextjs ttoast Notify

[![npm version](https://img.shields.io/npm/v/nextjs-toast-notify.svg?style=flat-square)](https://www.npmjs.com/package/nextjs-toast-notify)
[![GitHub Repo](https://img.shields.io/badge/repository-GitHub-blue?style=flat-square&logo=github)](https://github.com/urian121/nextjs-toast-notify)
[![npm](https://img.shields.io/npm/dt/nextjs-toast-notify.svg)](https://www.npmjs.com/package/nextjs-toast-notify)


# NextJS Toast Notify

**NextJS Toast Notify** es un paquete npm diseñado para mostrar notificaciones emergentes (toasts) en aplicaciones web. Estas notificaciones se utilizan comúnmente para proporcionar retroalimentación al usuario de manera visual y temporal, sin interrumpir la experiencia de navegación, ofrece una solución simple y personalizable para mostrar mensajes de alerta, éxito, error y más.

## ¿Para Qué Fue Creado?

Este paquete fue creado para simplificar la implementación de notificaciones en aplicaciones web, permitiendo a los desarrolladores agregar mensajes informativos, de éxito, advertencia o error de forma rápida y sencilla. **NextJS Toast Notify** es altamente personalizable y compatible con diferentes posiciones en la pantalla, así como con varios efectos de animación para mejorar la experiencia del usuario.

## Necesidad que Resuelve

En muchas aplicaciones web, los desarrolladores necesitan una forma efectiva de mostrar mensajes de notificación al usuario sin interrumpir la interacción actual. Las notificaciones (toasts) proporcionan una manera elegante y no intrusiva de informar al usuario sobre eventos importantes, resultados de acciones o errores. **NextJS Toast Notify** resuelve esta necesidad al ofrecer una solución fácil de integrar y altamente configurable.

## Ventajas y Caracteristicas

- **Fácil Integración**: Simple de agregar y utilizar en cualquier proyecto web.
- **Altamente Configurable**: Personaliza la duración, la posición, el progreso y el tipo de notificación.
- **Efectos de Animación**: Soporta diferentes efectos de animación para las notificaciones de entrada y salida.
- **Control del Progreso**: Incluye una barra de progreso opcional para mostrar la duración restante de la notificación.

## Características Clave

- **Posiciones de Notificación**: Soporta múltiples posiciones en la pantalla: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`.
- **Tipos de Notificación**: Cuatro tipos de notificación predefinidos: `success`, `error`, `warning`, `info`.
- **Animaciones**: Soporte para animaciones de entrada y salida configurables (`fadeIn`, `fadeOut`, `bounceIn`, `bounceOut`).
- **Barra de Progreso**: Opcional para mostrar el progreso de la notificación.
- **Cierre Manual**: Permite al usuario cerrar las notificaciones mediante un botón de cierre.
- **Configuración por Defecto**: Las animaciones y el comportamiento de la notificación se pueden personalizar a través de las opciones de configuración.

## Instalación

Puedes instalar el paquete usando npm:


## Instalación

    $ npm install nextjs-toast-notify --save
    $ yarn add nextjs-toast-notify


## Casos de uso:

## Ejemplo Práctico utilizando React.js

```jsx
import toast from 'nextjs-toast-notify';
import 'nextjs-toast-notify/dist/nextjs-toast-notify.css';

function App() {
  const handleShowToasCenter = () => {
    toast.error('¡La operación se realizó con éxito!', {
      duration: 5000,
      progress: true,
      position: 'top-center',
      transition: 'bounceIn'
    });
  };

  return (
        <button id="top-center" onClick={handleShowToasCenter}>Top center</button>
  );
}

export default App;
```


## API

La API de **NextJS Toast Notify** te permite mostrar notificaciones emergentes con una amplia gama de configuraciones. A continuación, se detalla cómo utilizar los métodos disponibles y qué opciones puedes configurar.

### Métodos

**NextJS Toast Notify** expone métodos estáticos para los diferentes tipos de notificaciones:

- **`toast.success(message: string, options?: ToastOptions): void`**  
  Muestra una notificación de éxito.

- **`toast.error(message: string, options?: ToastOptions): void`**  
  Muestra una notificación de error.

- **`toast.warning(message: string, options?: ToastOptions): void`**  
  Muestra una notificación de advertencia.

- **`toast.info(message: string, options?: ToastOptions): void`**  
  Muestra una notificación informativa.

### Opciones

Las opciones para personalizar las notificaciones se pueden pasar como el segundo parámetro a cada uno de los métodos anteriores. Las opciones disponibles son:

- **`duration`**:  
  `number`  
  La duración de la notificación en milisegundos.  
  _Default_: `5000`

- **`progress`**:  
  `boolean`  
  Si se debe mostrar una barra de progreso para la notificación.  
  _Default_: `true`

- **`position`**:  
  `'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'`  
  La posición de la notificación en la pantalla.  
  _Default_: `'top-right'`

- **`transition`**:  
  `'fadeIn' | 'fadeOut' | 'bounceIn' | 'bounceOut'`  
  El efecto de animación de entrada o salida para la notificación.  
  _Default_: `'fadeIn'`

### Ejemplos prácticos

Aquí tienes algunos ejemplos de cómo usar los métodos para mostrar notificaciones:

#### Mostrar una notificación de éxito con animación personalizada

```jsx
  import toast from 'nextjs-toast-notify';
  import 'nextjs-toast-notify/dist/nextjs-toast-notify.css';

  function App() {
    const handleShowSuccessToast = () => {
      toast.success('¡La operación se realizó con éxito!', {
        duration: 5000,
        progress: true,
        position: 'top-right',
        transition: 'bounceIn'
      });
    };

    return (
        <button id="top-center" onClick={handleShowSuccessToast}>Toast Success</button>
    );
  }
  export default App;
```

## Mostrar una notificación de error sin barra de progreso

```jsx
  import toast from 'nextjs-toast-notify';
  import 'nextjs-toast-notify/dist/nextjs-toast-notify.css';

  function App() {
  const handleShowErrorToast = () => {
    toast.error('Ocurrió un error al procesar la solicitud.', {
      duration: 7000,
      progress: false,
      position: 'bottom-left'
    });
  };

    return (
        <button id="top-center" onClick={handleShowErrorToast}>Toast Error</button>
    );
  }
  export default App;
```

## Mostrar una notificación informativa con animación de salida

```jsx
  import toast from 'nextjs-toast-notify';
  import 'nextjs-toast-notify/dist/nextjs-toast-notify.css';

  function App() {
    const handleShowInfoToast = () => {
      toast.info('Información importante disponible.', {
        duration: 4000,
        progress: true,
        position: 'bottom-center',
        transition: 'fadeOut'
      });
    };

    return (
      <button id="top-center" onClick={handleShowInfoToast}>Toast Info</button>
    );
  }

  export default App;
```

## Mostrar una notificación Warning con animación de salida

```jsx
  import toast from 'nextjs-toast-notify';
  import 'nextjs-toast-notify/dist/nextjs-toast-notify.css';

  function App() {
    const handleShowWarningToast = () => {
      toast.warning('Información importante disponible.', {
        duration: 4000,
        progress: true,
        position: 'bottom-center',
      });
    };

    return (
      <button id="top-center" onClick={handleShowInfoToast}>Toast Warning</button>
    );
  }

  export default App;
```

## Mostrar notificaciones en posiciones diferentes

Para mostrar notificaciones en diferentes posiciones, puedes utilizar el siguiente código de ejemplo. Asegúrate de tener el paquete `nextjs-toast-notify` y el CSS importado en tu proyecto.

```jsx
import toast from 'nextjs-toast-notify';
import 'nextjs-toast-notify/dist/nextjs-toast-notify.css';

function App() {
  const handleShowToastLeft = () => {
    toast.success('¡La operación se realizó con éxito!', {
      duration: 5000,
      progress: true,
      position: 'top-left',
    });
  };

  const handleShowToastCenter = () => {
    toast.error('¡La operación se realizó con éxito!', {
      duration: 5000,
      progress: true,
      position: 'top-center',
    });
  };

  const handleShowToastRight = () => {
    toast.warning('¡La operación se realizó con éxito!', {
      duration: 5000,
      progress: true,
      position: 'top-right',
    });
  };

  const handleShowToastBottomLeft = () => {
    toast.info('¡La operación se realizó con éxito!', {
      duration: 5000,
      progress: true,
      position: 'bottom-left',
    });
  };

  const handleShowToastBottomCenter = () => {
    toast.info('¡La operación se realizó con éxito!', {
      duration: 5000,
      progress: true,
      position: 'bottom-center',
      transition: 'bounceIn',
    });
  };

  const handleShowToastBottomRight = () => {
    toast.info('¡La operación se realizó con éxito!', {
      duration: 5000,
      progress: true,
      position: 'bottom-right',
      transition: '', // Usará la transición por defecto si no se define ninguna
    });
  };

  return (
    <>
      <button onClick={handleShowToastLeft}>Top left</button>
      <button onClick={handleShowToastCenter}>Top center</button>
      <button onClick={handleShowToastRight}>Top right</button>
      <button onClick={handleShowToastBottomLeft}>Bottom left</button>
      <button onClick={handleShowToastBottomCenter}>Bottom center</button>
      <button onClick={handleShowToastBottomRight}>Bottom right</button>
    </>
  );
}

export default App;
```