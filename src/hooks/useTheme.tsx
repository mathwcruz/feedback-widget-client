import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  //TODO: change localStorage to Cookies
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleChangeTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  }, [theme]);

  useEffect(() => {
    const theme = localStorage.getItem("theme") as Theme;
    setTheme(theme || "dark");
  }, []);

  return { theme, toggleChangeTheme };
};
