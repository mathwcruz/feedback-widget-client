/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { ArrowLineUp } from "phosphor-react";

import { Widget } from "components/Widget";

import { About } from "components/About";
import { Benefits } from "components/Benefits";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Payment } from "components/Payment";
import { Testimonial } from "components/Testimonial";

const Home: NextPage = () => {
  const [backToTopButtonIsVisible, setBackToTopButtonIsVisible] =
    useState<boolean>(false);

  const toggleBackToTopButtonVisible = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setBackToTopButtonIsVisible(true);
    } else if (scrolled <= 300) {
      setBackToTopButtonIsVisible(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleBackToTopButtonVisible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-tertiary-300 w-screen h-full">
      <Head>
        <title>Sirmyt</title>
      </Head>
      <main className="w-full h-full pt-5 px-10 flex-col flex items-center justify-center">
        <Header />
        <About />
        <Benefits />
        <Payment />
        <Testimonial />
        <Footer />
      </main>
      <button
        className={`fixed bottom-5 left-4 md:bottom-10 md:left-8 flex flex-col items-center justify-center p-2 bg-primary-100 border border-white rounded-full cursor-pointer ${
          backToTopButtonIsVisible
            ? "opacity-100 transition-all duration-200"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <ArrowLineUp className="w-5 h-5 text-white" weight="fill" />
      </button>
      <Widget />
    </div>
  );
};

export default Home;
