# npm init -y

# Instalar Vite y los plugins necesarios:

### npm install vite @vitejs/plugin-react typescript

# npm install vite-plugin-dts --save-dev

import React from 'react';
import { showToast } from 'nextjs-toast-notify';
import 'nextjs-toast-notify/dist/style.css';

const App = () => {
  const handleShowToast = () => {
    showToast({ message: 'La operación se realizó con éxito.' });
  };

  return (
    <div className="App">
      <button onClick={handleShowToast}>Mostrar Toast</button>
    </div>
  );
};

export default App;

