/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { List } from "phosphor-react";

import { Widget } from "components/Widget";

import "../i18n";

const Home: NextPage = () => {
  return (
    <div className="bg-tertiary-300 w-screen h-screen">
      <Head>
        <title>Shopify</title>
      </Head>
      <main className="w-full h-full p-4 flex-col flex items-center justify-center">
        <header className="w-full flex justify-between items-center">
          <img src="/assets/icons/logo.svg" alt="Open menu" />
          <List weight="regular" className="w-7 h-7 text-black-100" />
        </header>
        <div className="h-full">
          <div className="w-full flex flex-col items-center justify-center gap-11 mt-11">
            <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="text-primary-100 text-center max-w-[335px] font-bold text-[42px] leading-[52px]">
                The platform commerce is built on.
              </h1>
              <p className="text-black-300 text-center max-w-[335px] font-normal text-lg">
                Millions of the world&apos;s most successful brands trust
                Shopify to sell, ship and process payments anywhere.
              </p>
            </div>
            <img
              className="w-[320px] h-[227px]"
              src="/assets/images/platform-view-one.png"
              alt="A screenshot showing a piece of the platform"
            />
          </div>
        </div>
      </main>
      <Widget />
    </div>
  );
};

export default Home;
