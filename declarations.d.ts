declare module "*.mp3" {
    const value: string;
    export default value;
  }
  
declare module "*.css?inline" {
  const css: string;
  export default css;
}