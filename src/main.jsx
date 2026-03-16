import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import App from "./App";
import { mdxComponents } from "./lib/mdxComponents";
import "../styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MDXProvider components={mdxComponents}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MDXProvider>
  </React.StrictMode>,
);
