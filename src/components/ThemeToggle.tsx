import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="text-fg-muted transition-colors hover:text-fg"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
