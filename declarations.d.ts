// Declaraciones de tipos para archivos de audio
declare module "*.mp3" {
  const value: string;
  export default value;
}

declare module "*.wav" {
  const value: string;
  export default value;
}

declare module "*.ogg" {
  const value: string;
  export default value;
}

// Declaraciones de tipos para archivos CSS
declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.css?inline" {
  const content: string;
  export default content;
}

// Declaraciones específicas para los archivos del proyecto
declare module "./styles/nextjs-toast-notify.css" {
  const content: string;
  export default content;
}

declare module "./sonidos/chasquido.mp3" {
  const value: string;
  export default value;
}