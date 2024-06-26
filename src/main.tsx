import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodoContextProvider } from "./todo-context/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
