import toggleStyles from "./themeToggle.module.css";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState(undefined);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";


  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (activeTheme === undefined && savedTheme) {
      document.body.dataset.theme = savedTheme;
      savedTheme && setActiveTheme(savedTheme);
      return
    } else if (activeTheme === undefined) {
      setActiveTheme("dark");
    }
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <form action="#">
      <label className={toggleStyles.switch}>
        <input
        type="checkbox"
        onChange={() => setActiveTheme(inactiveTheme)}
        checked={activeTheme === "dark"}
      />
        <span className={`${toggleStyles.slider} ${toggleStyles.round}`}></span>
      </label>
    </form>
  )
}
