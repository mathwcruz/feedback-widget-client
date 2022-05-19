import type { NextPage } from "next";
import Head from "next/head";

import { Widget } from "components/Widget";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shopify</title>
      </Head>
      <Widget />
    </div>
  );
};

export default Home;
