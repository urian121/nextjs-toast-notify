# Nextjs ttoast Notify

[![npm version](https://img.shields.io/npm/v/nextjs-toast-notify.svg?style=flat-square)](https://www.npmjs.com/package/nextjs-toast-notify)
[![GitHub Repo](https://img.shields.io/badge/repository-GitHub-blue?style=flat-square&logo=github)](https://github.com/urian121/nextjs-toast-notify)
[![npm](https://img.shields.io/npm/dt/nextjs-toast-notify.svg)](https://www.npmjs.com/package/nextjs-toast-notify)


**Nextjs ttoast Notify** Un paquete para notificaciones emergentes (toasts) en aplicaciones Next.js. Inspirado en React-Toastify, ofrece una solución simple y personalizable para mostrar mensajes de alerta, éxito, error y más.



# npm init -y

# Instalar Vite y los plugins necesarios:

### npm install vite @vitejs/plugin-react typescript

# npm install vite-plugin-dts --save-dev


import React from 'react';
import { showToast } from 'nextjs-toast-notify';
import 'nextjs-toast-notify/dist/nextjs-toast-notify.css';

const App = () => {
   const handleShowToast = () => {
    toast.success('¡La operación se realizó con éxito!', {
      duration: 5000,
      progress: true,
      position: 'top-center',
      pauseOnHover: true,
    });
  };

  return (
    <div className="App">
      <button onClick={handleShowToast}>Mostrar Toast</button>
    </div>
  );
};

export default App;

