/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "phosphor-react";

type LOCALES = "en" | "pt";

export const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [locale, setLocale] = useState<LOCALES>(
    router.locale!.split("-")[0] as LOCALES
  );

  useEffect(() => {
    router.push(router.pathname, router.pathname, { locale });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = () => theme === "dark";

  return (
    <header className="w-full flex justify-between items-center">
      <div className="flex flex-row justify-center items-center gap-2">
        <img src="/assets/favicon.png" alt="Sirmyt logo" />
        <span className="block text-lg text-black-100 dark:text-gray-300 font-semibold text-center">
          Sirmyt
        </span>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <button onClick={() => setTheme(isDark() ? "light" : "dark")}>
          {isDark() ? (
            <Sun
              weight="regular"
              className="w-6 h-6 text-black-100 dark:text-gray-300 transition-all duration-200"
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
              locale === "pt" ? "cursor-not-allowed" : "opacity-30"
            }`}
            onClick={() => setLocale("pt")}
          >
            <img
              src="/assets/icons/brazilian-flag.svg"
              alt="Change application language to portuguese (ptBR)"
            />
          </button>
          <button
            className={`flex items-center justify-center w-8 h-8 ${
              locale === "en" ? "cursor-not-allowed" : "opacity-30"
            }`}
            onClick={() => setLocale("en")}
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
