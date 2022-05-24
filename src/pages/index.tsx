/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";

import { Widget } from "components/Widget";

import { About } from "components/About";
import { Benefits } from "components/Benefits";
import { Header } from "components/Header";
import { Payment } from "components/Payment";
import { Testimonial } from "components/Testimonial";

const Home: NextPage = () => {
  return (
    <div className="bg-tertiary-300 w-screen h-full">
      <Head>
        <title>Shopify</title>
      </Head>
      <main className="w-full h-full pt-5 px-10 flex-col flex items-center justify-center">
        <Header />
        <About />
        <Benefits />
        <Payment />
        <Testimonial />
      </main>
      <Widget />
    </div>
  );
};

export default Home;
