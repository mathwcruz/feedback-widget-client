/* eslint-disable @next/next/no-img-element */

export const Footer = () => {
  return (
    <div className="w-screen bg-primary-100 h-full px-5 py-9 flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center justify-center gap-[18px]">
        <h4 className="text-center text-white max-w-[335px] font-medium text-[32px] leading-[42px]">
          We can take care of the installation
        </h4>
        <p className="text-center text-white max-w-[335px] font-normal text-sm leading-6 text-opacity-80">
          Don’t want to deal with technical stuff? Let us fire up Uvodo for you,
          so you can spend your time selling right away.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-7">
        <div className="flex flex-row justify-center items-center gap-2">
          <img src="/assets/favicon.png" alt="Sirmyt logo" />
          <span className="block text-base text-white font-semibold text-center">
            Sirmyt
          </span>
        </div>
        <span className="block text-center text-white font-medium text-base leading-[18px]">
          © 2022 Sirmyt
        </span>
      </div>
    </div>
  );
};
