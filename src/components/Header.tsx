/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import { Moon, Sun } from "phosphor-react";

import { useTranslation } from "hooks/useTranslation";

export const Header = () => {
  const { currentTranslation } = useTranslation();

  const handleChangeLanguage = useCallback((language: "ptBR" | "enUS") => {},
  []);

  return (
    <header className="w-full flex justify-between items-center">
      <div className="flex flex-row justify-center items-center gap-2">
        <img src="/assets/favicon.png" alt="Sirmyt logo" />
        <span className="block text-lg text-black-100 font-semibold text-center">
          Sirmyt
        </span>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <Moon
          weight="regular"
          className="w-6 h-6 text-black-100 transition-all duration-200"
        />
        <div className="flex flex-row items-center justify-center gap-2">
          <button
            className={`flex items-center justify-center w-7 h-7`}
            onClick={() => handleChangeLanguage("ptBR")}
          >
            <img
              src="/assets/icons/brazilian-flag.svg"
              alt={
                currentTranslation?.components?.header?.countryFlagsAltText
                  ?.ptBR || "Change application language to portuguese (ptBR)"
              }
            />
          </button>
          <button
            className={`flex items-center justify-center w-8 h-8 opacity-50`}
            onClick={() => handleChangeLanguage("enUS")}
          >
            <img
              src="/assets/icons/usa-flag.svg"
              alt={
                currentTranslation?.components?.header?.countryFlagsAltText
                  ?.enUS || "Change application language to english (enUS)"
              }
            />
          </button>
        </div>
      </div>
    </header>
  );
};
