import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "atelier-theme";
const ThemeContext = createContext(null);

function getSystemTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  let storedTheme = null;
  try {
    storedTheme = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    storedTheme = null;
  }

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return getSystemTheme();
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // noop: localStorage can be unavailable in restricted contexts.
    }
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
