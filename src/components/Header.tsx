/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import { Moon, Sun } from "phosphor-react";

import { useTheme } from "hooks/useTheme";
import { useI18n } from "hooks/useI18n";

export const Header = () => {
  const { theme, toggleChangeTheme } = useTheme();
  const { language, toggleChangeLanguage } = useI18n();

  return (
    <header className="w-full flex justify-between items-center">
      <div className="flex flex-row justify-center items-center gap-2">
        <img src="/assets/favicon.png" alt="Sirmyt logo" />
        <span className="block text-lg text-black-100 font-semibold text-center">
          Sirmyt
        </span>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <button onClick={toggleChangeTheme}>
          {theme === "dark" ? (
            <Sun
              weight="regular"
              className="w-6 h-6 text-black-100 transition-all duration-200"
            />
          ) : (
            <Moon
              weight="regular"
              className="w-6 h-6 text-black-100 transition-all duration-200"
            />
          )}
        </button>
        <div className="flex flex-row items-center justify-center gap-2">
          <button
            className={`flex items-center justify-center w-7 h-7 ${
              language === "pt-BR" ? "cursor-not-allowed" : "opacity-50 "
            }`}
            onClick={toggleChangeLanguage}
          >
            <img
              src="/assets/icons/brazilian-flag.svg"
              alt="Change application language to portuguese (ptBR)"
            />
          </button>
          <button
            className={`flex items-center justify-center w-8 h-8 ${
              language === "en-US" ? "cursor-not-allowed" : "opacity-50 "
            }`}
            onClick={toggleChangeLanguage}
          >
            <img
              src="/assets/icons/usa-flag.svg"
              alt="Change application language to english (enUS)"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
