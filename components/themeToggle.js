import toggleStyles from "./themeToggle.module.css";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <form action="#">
      <label className={toggleStyles.switch}>
        <input
          aria-label={`Change to ${inactiveTheme} mode`}
          type="checkbox"
          onChange={() => setActiveTheme(inactiveTheme)}
          checked={activeTheme === "dark"}
        />
        <span
          className={`${toggleStyles.slider} ${toggleStyles.round}`}
          aria-label={`Change to ${inactiveTheme} mode`}
        ></span>
      </label>
    </form>
  )
}
