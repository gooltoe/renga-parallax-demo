import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
