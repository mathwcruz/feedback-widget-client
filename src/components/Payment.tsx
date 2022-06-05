/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";

const I18N_BASE_PATH = "components:payment";

export const Payment = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-screen h-full bg-primary-100 flex flex-col items-center justify-center mt-[60px] gap-[18px] pt-9 px-5">
        <h3 className="text-center max-w-[335px] lg:max-w-[970px] text-[32px] lg:text-[50px] leading-[42px] lg:leading-[64px] text-white dark:text-gray-300 font-medium">
          {t(
            `${I18N_BASE_PATH}.heading`,
            "Managing your ecommerce business on the go is easy."
          )}
        </h3>
        <p className="text-center lg:mb-8 max-w-[335px] lg:max-w-[665px] text-white dark:text-gray-300 text-opacity-70 font-normal text-sm lg:text-base leading-6 lg:leading-7">
          {t(
            `${I18N_BASE_PATH}.paragraph`,
            "Our customers enjoy complete freedom of doing business online by managing every aspect of their online store from their mobile and web devices."
          )}
        </p>
        <img
          src="/assets/images/platform-view-one.png"
          alt={t(
            `${I18N_BASE_PATH}.platformView.altImage`,
            "An image showing a graph, an armchair and a screenshot for our platform"
          )}
        />
      </div>
      <div className="w-screen h-full bg-white dark:bg-dark-background px-5 py-20 flex flex-col lg:flex-row justify-center">
        <section className="lg:order-last">
          <span className="block text-primary-100 font-medium text-base leading-5 text-left mb-2">
            {t(`${I18N_BASE_PATH}.card.first.title`, "PWA READY STOREFRONT")}
          </span>
          <h4 className="mb-[18px] text-primary-100 font-medium text-[32px] leading-[42px] text-left max-w-[335px]">
            {t(
              `${I18N_BASE_PATH}.card.first.heading`,
              "Own everything forever with a single payment."
            )}
          </h4>
          <p className="mb-8 text-black-400 dark:text-gray-300 font-regular text-sm  leading-6 text-left max-w-[290px]">
            {t(
              `${I18N_BASE_PATH}.card.first.paragraph`,
              "Build your dream business. Never worry about paying monthly fees or recurring payments again."
            )}
          </p>
        </section>
        <img
          src="/assets/images/bill-amount-card.png"
          alt={t(
            `${I18N_BASE_PATH}.card.first.altImage`,
            "An imagem showing a list of three men with their respective data an a card showing amount bill"
          )}
          className="lg:max-w-[440px] lg:max-h-[415px] w-full h-full"
        />
      </div>
      <div className="w-screen h-full bg-white dark:bg-dark-background px-5 pb-20 flex flex-col lg:flex-row justify-center">
        <section>
          <span className="block text-primary-100 font-medium text-base leading-5 text-left mb-2">
            {t(`${I18N_BASE_PATH}.card.second.title`, "PAY ONCE, USE LIFETIME")}
          </span>
          <h4 className="mb-[18px] text-primary-100 font-medium text-[32px] leading-[42px] text-left max-w-[335px]">
            {t(
              `${I18N_BASE_PATH}.card.second.heading`,
              "Getting your products sold on the easy."
            )}
          </h4>
          <p className="mb-8 text-black-400 dark:text-gray-300 font-regular text-sm  leading-6 text-left max-w-[290px]">
            {t(
              `${I18N_BASE_PATH}.card.second.paragraph`,
              "Sell your products online, and turn your social media accounts into marketing channels."
            )}
          </p>
        </section>
        <img
          src="/assets/images/dashboard-card.png"
          alt={t(
            `${I18N_BASE_PATH}.card.second.altImage`,
            "An imagem showing billing data: total income, worst selling and a graph showing stats about total growth"
          )}
          className="lg:order-last lg:max-w-[440px] lg:max-h-[415px] w-full h-full"
        />
      </div>
    </>
  );
};
