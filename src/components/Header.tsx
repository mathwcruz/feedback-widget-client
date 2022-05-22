/* eslint-disable @next/next/no-img-element */

import { List } from "phosphor-react";

export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <img src="/assets/icons/logo.svg" alt="Open menu" />
      <List weight="regular" className="w-7 h-7 text-black-100" />
    </header>
  );
};
