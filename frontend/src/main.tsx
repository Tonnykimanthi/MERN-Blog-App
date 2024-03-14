import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import BlogsContextProvider from "./contexts/BlogsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BlogsContextProvider>
      <App />
    </BlogsContextProvider>
  </React.StrictMode>,
);
