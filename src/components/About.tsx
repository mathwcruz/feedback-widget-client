/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";

const I18N_BASE_PATH = "components:about";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-11 mt-11">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-primary-100 text-center lg:text-left max-w-[335px] font-bold text-[42px] leading-[52px]">
          {t(`${I18N_BASE_PATH}.heading`, "The platform commerce is built on.")}
        </h1>
        <p className="text-black-300 dark:text-gray-300 text-center lg:text-left max-w-[335px] font-normal text-lg">
          {t(
            `${I18N_BASE_PATH}.paragraph`,
            "Millions of the world&apos;s most successful brands trust Sirmyt to sell, ship and process payments anywhere."
          )}
        </p>
      </div>
      <img
        className="w-[320px] h-[227px] lg:w-[650px] lg:h-[465px]"
        src="/assets/images/platform-view-one.png"
        alt={t(
          `${I18N_BASE_PATH}.altImage`,
          "A screenshot showing a piece of the platform"
        )}
      />
    </div>
  );
};
