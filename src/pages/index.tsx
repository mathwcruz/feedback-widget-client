/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

import { Widget } from "components/Widget";

import { About } from "components/About";
import { BackToTopButton } from "components/BackToTopButton";
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
    <div className="bg-tertiary-300 dark:bg-dark-background w-screen h-full">
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
      <BackToTopButton
        backToTopButtonIsVisible={backToTopButtonIsVisible}
        scrollToTop={scrollToTop}
      />
      <Widget />
    </div>
  );
};

export default Home;
