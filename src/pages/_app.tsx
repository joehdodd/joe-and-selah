import React from "react";
import { Markazi_Text } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const markazi = Markazi_Text({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${markazi.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
