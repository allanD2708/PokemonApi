import ReactDOM from "react-dom/client";
import { App } from "./App";
import './sass/index.scss'


const root = ReactDOM.createRoot(document.querySelector('#root'));

console.log(root);
root.render(<App />)
