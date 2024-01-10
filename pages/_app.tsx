import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>LCK 4부 리그</title>
        <meta property="og:type" content="website" />
        <meta name="url" property="og:url" content={"https://www.lck4.lol"} />
        <meta name="title" property="og:title" content={"LCK 4부리그"} />
        <meta
          name="image"
          property="og:image"
          content={"/png/lck4_image.png"}
        />
        <meta
          name="description"
          property="og:description"
          content={"LCK 1부리그에 진출하기 위해 노력하는 사람들"}
        />
        <meta property="og:site_name" content="LCK 4부 리그" />
        <meta property="og:locale" content="en_US" />
        <meta property="" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </RecoilRoot>
  );
}
