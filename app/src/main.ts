import './style.scss';
import App from "./App.ts";
import "./router.ts";

const app = document.querySelector<HTMLDivElement>('#app')!;

if (app) {
  app.innerHTML = App
} else {
  console.error(`No element with ID of 'app' was found`)
}

