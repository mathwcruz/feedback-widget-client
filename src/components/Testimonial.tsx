/* eslint-disable @next/next/no-img-element */
import { CaretLeft, CaretRight } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import { customers } from "utils/customers";

type Customer = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const I18N_BASE_PATH = "components:testimonial";

export const Testimonial = () => {
  const { t } = useTranslation();

  const [currentCustomer, setCurrentCustomer] = useState<Customer>(
    customers?.[0]
  );
  const [canGoForward, setCanGoForward] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const customerIndex = customers?.findIndex(
      (customer) => customer?.id === currentCustomer?.id
    );

    if (customerIndex < customers?.length - 1) {
      setCanGoForward(true);
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
      setCanGoForward(false);
    }
  }, [currentCustomer]);

  const handleGoToPreviousCustomerTestimonial = useCallback(() => {
    const customerIndex = customers?.findIndex(
      (customer) => customer?.id === currentCustomer?.id
    );

    setCurrentCustomer(customers?.[customerIndex - 1]);
  }, [currentCustomer?.id]);

  const handleGoToNextCustomerTestimonial = useCallback(() => {
    const customerIndex = customers?.findIndex(
      (customer) => customer?.id === currentCustomer?.id
    );

    setCurrentCustomer(customers?.[customerIndex + 1]);
  }, [currentCustomer?.id]);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between px-5 pb-[52px] justify-center">
      <img
        src={`/assets/images/${currentCustomer?.image}.png`}
        alt=""
        className="h-60 lg:h-[400px] self-center mb-10 transition-all duration-1000"
      />
      <div className="flex flex-col justify-center gap-[18px] lg:mt-10">
        <h4 className="text-left text-primary-100 max-w-[270px] lg:max-w-[400px] font-medium text-[32px] lg:text-[50px] leading-[42px] lg:leading-[64px]">
          {t(`${I18N_BASE_PATH}.heading`, "What Our Customers Say")}
        </h4>
        <p className="text-left max-w-[335px] lg:max-w-[370px] text-black-400 dark:text-gray-300 font-normal text-sm lg:text-base leading-6 lg:leading-7">
          {t(
            `${I18N_BASE_PATH}.paragraph.`,
            "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis viverra amet elit est proin tgestas neque quis aliq vel. Viverra gravida orci vitae at aliquam sit accums rutrum ut convallis."
          )}
        </p>
        <div className="flex flex-row lg:flex-col lg:items-start lg:gap-9 items-center justify-between">
          <div className="flex flex-row">
            <span className="self-start justify-self-start w-3 h-[2px] bg-primary-100" />
            <div className="flex flex-col justify-center ml-2 -mt-1">
              <span className="font-medium text-sm leading-3 text-primary-100 text-left block">
                {currentCustomer?.name}
              </span>
              <span className="font-medium text-sm leading-4 text-black-300 dark:text-gray-300 text-left block mt-[10px]">
                {t(currentCustomer?.role, currentCustomer?.role)}
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-6">
            <button
              disabled={!canGoBack}
              className={`text-primary-100 flex items-center justify-center rounded-full w-[35px] h-[35px] border border-black-400 dark:border-primary-100 hover:opacity-75 duration-150 transition-opacity bg-primary-100 dark:bg-dark-background disabled:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
              onClick={handleGoToPreviousCustomerTestimonial}
            >
              <CaretLeft
                weight="bold"
                className={`w-4 h-4 text-${!canGoBack ? "black-400" : "white"}`}
              />
            </button>
            <button
              disabled={!canGoForward}
              className={`text-primary-100 flex items-center justify-center rounded-full w-[35px] h-[35px] border border-black-400 dark:border-primary-100 hover:opacity-75 duration-150 transition-opacity bg-primary-100 dark:bg-dark-background disabled:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
              onClick={handleGoToNextCustomerTestimonial}
            >
              <CaretRight
                weight="bold"
                className={`w-4 h-4 dark:text-${
                  !canGoForward ? "black-500" : "gray-300"
                } text-${!canGoForward ? "black-400" : "white"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
