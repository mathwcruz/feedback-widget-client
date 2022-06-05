import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <ToastContainer />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
