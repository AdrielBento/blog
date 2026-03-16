import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../lib/theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Alternar para modo ${isDark ? "claro" : "escuro"}`}
      title={`Alternar para modo ${isDark ? "claro" : "escuro"}`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="theme-toggle__label">{isDark ? "Claro" : "Escuro"}</span>
    </button>
  );
}
