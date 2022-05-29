import { benefits } from "utils/benefits";

import { Benefit } from "./Benefit";

export const Benefits = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-12">
      <span className="block text-primary-100 text-center text-base leading-5 font-medium">
        360° CUSTOMIZABLE
      </span>
      <div className="flex flex-col items-center justify-center gap-5 mt-2">
        <h3 className="text-center max-w-[335px] text-[32px] leading-[42px] text-primary-100 font-medium">
          Have full control over your online store
        </h3>
        <p className="text-center max-w-[335px] text-black-400 font-normal text-sm leading-6">
          Take total control of your eCommerce business by owning the source
          code and data that drive it.
        </p>
      </div>
      <ul className="mt-9 flex flex-col items-center justify-center gap-6">
        {benefits?.map((benefit) => (
          <Benefit key={benefit?.id} benefit={benefit} />
        ))}
      </ul>
    </div>
  );
};
