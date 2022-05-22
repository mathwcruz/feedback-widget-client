import type { AppProps } from "next/app";

import "../i18n";
import "styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
