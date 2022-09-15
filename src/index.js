import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { QuizProvider } from "./context/QuizContext";
import "./index.css";
import registerServiceWorker from "./serviceWorkerReg";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QuizProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QuizProvider>
);

registerServiceWorker();
