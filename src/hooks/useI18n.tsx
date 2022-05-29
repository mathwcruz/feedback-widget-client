import { useCallback, useEffect, useState } from "react";

type Language = "pt-BR" | "en-US";

export const useI18n = () => {
  //TODO: change localStorage to Cookies
  const [language, setLanguage] = useState<Language>("en-US");

  const toggleChangeLanguage = useCallback(() => {
    setLanguage(language === "pt-BR" ? "en-US" : "pt-BR");
    localStorage.setItem("language", language === "pt-BR" ? "en-US" : "pt-BR");
  }, [language]);

  useEffect(() => {
    const language = localStorage.getItem("language") as Language;
    setLanguage(language || "en-US");
  }, []);

  return { language, toggleChangeLanguage };
};
