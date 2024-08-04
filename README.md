# Nextjs Toast Notify

[![npm version](https://img.shields.io/npm/v/nextjs-toast-notify.svg?style=flat-square)](https://www.npmjs.com/package/nextjs-toast-notify)
[![GitHub Repo](https://img.shields.io/badge/repository-GitHub-blue?style=flat-square&logo=github)](https://github.com/urian121/nextjs-toast-notify)
[![npm](https://img.shields.io/npm/dt/nextjs-toast-notify.svg)](https://www.npmjs.com/package/nextjs-toast-notify)


**NextJS Toast Notify** es un paquete npm diseñado para mostrar notificaciones emergentes (toasts) en aplicaciones web. Estas notificaciones se utilizan comúnmente para proporcionar retroalimentación al usuario de manera visual y temporal, sin interrumpir la experiencia de navegación, ofrece una solución simple y personalizable para mostrar mensajes de alerta, éxito, error y más.

## ¿Para Qué Fue Creado?

Este paquete fue creado para simplificar la implementación de notificaciones en aplicaciones web, permitiendo a los desarrolladores agregar mensajes informativos, de éxito, advertencia o error de forma rápida y sencilla. **NextJS Toast Notify** es altamente personalizable y compatible con diferentes posiciones en la pantalla, así como con varios efectos de animación para mejorar la experiencia del usuario.

## Necesidad que Resuelve

En muchas aplicaciones web, los desarrolladores necesitan una forma efectiva de mostrar mensajes de notificación al usuario sin interrumpir la interacción actual. Las notificaciones (toasts) proporcionan una manera elegante y no intrusiva de informar al usuario sobre eventos importantes, resultados de acciones o errores. **NextJS Toast Notify** resuelve esta necesidad al ofrecer una solución fácil de integrar y altamente configurable.

## Ventajas

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

    $ npm install nextjs-toast-notify --save
    $ yarn add nextjs-toast-notify


## Casos de uso:

## Ejemplo Práctico utilizando React.js

```jsx
import toast from 'nextjs-toast-notify';
import 'nextjs-toast-notify/dist/nextjs-toast-notify.css';

function App() {
  const handleShowToastCenter = () => {
    toast.success('¡La operación se realizó con éxito!', {
      duration: 15000,
      progress: true,
      position: 'bottom-center',
      transition: 'bounceIn',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>',
      sonido: true,
    });
  };

  return (
    <button id="top-center" onClick={handleShowToastCenter}>Top center</button>
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

- **`icon`**:  
  `string`
  Icono personalizado para la notificación (opcional). Si no se proporciona, se usa un ícono predeterminado basado en el tipo de notificación. 

- **`icon`**:  
  `boolean`
  Reproduce un sonido cuando se muestra la notificación.
  _Default_: `'false'`


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
toast.success('¡Operación exitosa!', {
  position: 'top-right',
});

```