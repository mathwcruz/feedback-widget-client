/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";

import { Widget } from "components/Widget";

import { Benefits } from "components/Benefits";
import { Header } from "components/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-tertiary-300 w-screen h-full">
      <Head>
        <title>Shopify</title>
      </Head>
      <main className="w-full h-full pt-5 px-10 flex-col flex items-center justify-center">
        <Header />
        <div className="w-full flex flex-col items-center justify-center gap-11 mt-11">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-primary-100 text-center max-w-[335px] font-bold text-[42px] leading-[52px]">
              The platform commerce is built on.
            </h1>
            <p className="text-black-300 text-center max-w-[335px] font-normal text-lg">
              Millions of the world&apos;s most successful brands trust Shopify
              to sell, ship and process payments anywhere.
            </p>
          </div>
          <img
            className="w-[320px] h-[227px]"
            src="/assets/images/platform-view-one.png"
            alt="A screenshot showing a piece of the platform"
          />
        </div>
        <Benefits />
      </main>
      <Widget />
    </div>
  );
};

export default Home;
