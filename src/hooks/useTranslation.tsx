import ptBR from "i18n/pt-BR.json";
import enUS from "i18n/en-US.json";

type Language = "enUS" | "ptBR";

export const useTranslation = () => {
  const language: Language = "enUS";
  const translations = {
    enUS,
    ptBR,
  };

  const currentTranslation = translations?.[language];

  return { currentTranslation, language };
};
