import { createContext, useState, useContext, ReactNode } from "react";

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => {
      return prevState === "light" ? "dark" : "light";
    });
  };
  console.log(theme);
  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
