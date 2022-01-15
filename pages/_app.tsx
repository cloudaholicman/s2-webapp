import type { AppProps } from "next/app";
import "reset-css/reset.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
