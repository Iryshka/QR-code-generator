import { useContext } from "react";
import { PiSun, PiMoon } from "react-icons/pi";
import ThemeButtonStyles from "./ThemeButton.module.css";
import ThemeContext from "../../context/ThemeContext.tsx";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={ThemeButtonStyles.theme__button}>
      {theme === "light" ? (
        <PiMoon className={ThemeButtonStyles.icon} />
      ) : (
        <PiSun className={ThemeButtonStyles.icon} />
      )}
    </button>
  );
}

export default ThemeButton;
