/* eslint-disable @next/next/no-img-element */

export const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-11 mt-11">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-primary-100 text-center max-w-[335px] font-bold text-[42px] leading-[52px]">
          The platform commerce is built on.
        </h1>
        <p className="text-black-300 dark:text-gray-300 text-center max-w-[335px] font-normal text-lg">
          Millions of the world&apos;s most successful brands trust Sirmyt to
          sell, ship and process payments anywhere.
        </p>
      </div>
      <img
        className="w-[320px] h-[227px]"
        src="/assets/images/platform-view-one.png"
        alt="A screenshot showing a piece of the platform"
      />
    </div>
  );
};
