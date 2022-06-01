/* eslint-disable @next/next/no-img-element */
type Benefit = {
  id: number;
  heading: string;
  text: string;
  icon: string;
  backgroundColor: string;
};

interface BenefitProps {
  benefit: Benefit;
}

export const Benefit = ({ benefit }: BenefitProps) => {
  return (
    <li className="w-[335px] h-[227px] border-t border-x border-x-solid border-t-solid border-t-black-200 dark:border-t-gray-300 border-x-gray-300">
      <header
        className="px-5 py-4 flex justify-between items-center"
        style={{ backgroundColor: benefit?.backgroundColor }}
      >
        <h5 className="text-black-100 font-medium text-left text-lg leading-[26px]">
          {benefit?.heading}
        </h5>
        <img src={`/assets/icons/${benefit?.icon}.svg`} alt={benefit?.text} />
      </header>
      <div className="border-y border-y-black-200 dark:border-y-gray-300 h-[167px] px-5 pt-6 pb-10 bg-white dark:bg-dark-background flex items-center justify-center">
        <p className="text-black-300 dark:text-gray-300 text-left text-base w-[295px] font-normal">
          {benefit?.text}
        </p>
      </div>
    </li>
  );
};
