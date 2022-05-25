/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import { Moon, Sun } from "phosphor-react";

export const Header = () => {
  const handleChangeLanguage = useCallback((language: "pt-BR" | "en-US") => {},
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
            onClick={() => handleChangeLanguage("pt-BR")}
          >
            <img
              src="/assets/icons/brazilian-flag.svg"
              alt="Change application language to portuguese (pt-BR)"
            />
          </button>
          <button
            className={`flex items-center justify-center w-8 h-8 opacity-50`}
            onClick={() => handleChangeLanguage("en-US")}
          >
            <img
              src="/assets/icons/usa-flag.svg"
              alt="Change application language to english (en-US)"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
