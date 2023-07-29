import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useStore } from "react-redux";
export default function App({ Component, pageProps }: AppProps) {
  const isClient = typeof window == "undefined";
  const store: any = useStore();
  const isServer = typeof window === "undefined";
  return (
    <div className={` dark:bg-black`}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}
