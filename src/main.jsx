import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import App from "./App";
import { mdxComponents } from "./lib/mdxComponents";
import { ThemeProvider } from "./lib/theme";
import "./styles/app.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <MDXProvider components={mdxComponents}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <App />
        </BrowserRouter>
      </MDXProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
