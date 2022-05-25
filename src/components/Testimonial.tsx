/* eslint-disable @next/next/no-img-element */
import { CaretLeft, CaretRight } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";

import { useTranslation } from "hooks/useTranslation";
import { customers } from "utils/customers";

type Customer = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export const Testimonial = () => {
  const { currentTranslation } = useTranslation();

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
    <div className="w-screen h-full flex flex-col px-5 pb-[52px] justify-center">
      <img
        src={`/assets/images/${currentCustomer?.image}.png`}
        alt=""
        className="h-60 self-center mb-10 transition-all duration-1000"
      />
      <div className="flex flex-col justify-center gap-[18px]">
        <h4 className="text-left text-primary-100 max-w-[270px] font-medium text-[32px] leading-[42px]">
          {currentTranslation?.components?.testimonial?.heading ||
            "What Our Customers Say"}
        </h4>
        <p className="text-left max-w-[335px] text-black-400 font-normal text-sm leading-6">
          {currentTranslation?.components?.testimonial?.paragraph ||
            "Lorem ipsum dolor sit amet consectetur adipiscing elit turpis viverra amet elit est proin tgestas neque quis aliq vel. Viverra gravida orci vitae at aliquam sit accums rutrum ut convallis."}
        </p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row">
            <span className="self-start justify-self-start w-3 h-[2px] bg-primary-100" />
            <div className="flex flex-col justify-center ml-2 -mt-1">
              <span className="font-medium text-sm leading-3 text-primary-100 text-left block">
                {currentCustomer?.name}
              </span>
              <span className="font-medium text-sm leading-3 text-black-300 text-left block mt-[10px]">
                {currentCustomer?.role}
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-6">
            <button
              disabled={!canGoBack}
              className={`text-primary-100 flex items-center justify-center rounded-full w-[35px] h-[35px] border border-black-400 hover:opacity-75 duration-150 transition-opacity bg-primary-100 disabled:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
              onClick={handleGoToPreviousCustomerTestimonial}
            >
              <CaretLeft
                weight="bold"
                className={`w-4 h-4 text-${!canGoBack ? "black-400" : "white"}`}
              />
            </button>
            <button
              disabled={!canGoForward}
              className={`text-primary-100 flex items-center justify-center rounded-full w-[35px] h-[35px] border border-black-400 hover:opacity-75 duration-150 transition-opacity bg-primary-100 disabled:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
              onClick={handleGoToNextCustomerTestimonial}
            >
              <CaretRight
                weight="bold"
                className={`w-4 h-4 text-${
                  !canGoForward ? "black-400" : "white"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
