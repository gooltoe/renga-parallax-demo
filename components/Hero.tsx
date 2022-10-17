import React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";

type Props = {};

function Hero({}: Props) {
  // const { ref } = useParallax<HTMLDivElement>({ opacity: [0, 1] });

  return (
    <div>
      <div className="h-screen w-screen"></div>

      <div className="h-screen w-screen fixed top-0 left-0">
        <img src="/1.png" alt="" />
      </div>
      <div className="h-screen w-screen"></div>
      <Parallax
        startScroll={0}
        endScroll={1200}
        opacity={[0, 1, "easeIn"]}
        className="h-screen w-screen fixed top-0 left-0 "
      >
        <img src="/2.png" alt="" />
      </Parallax>
      <div className="h-screen w-screen"></div>

      <Parallax
        startScroll={1200}
        endScroll={2400}
        translateX={[100, 0, "easeIn"]}
        className="h-screen w-screen fixed top-0 left-0"
      >
        <img src="/3.gif" alt="" />
      </Parallax>

      <div className="h-screen w-screen"></div>
      <Parallax
        translateY={[100, 0, "easeIn"]}
        startScroll={2400}
        endScroll={3600}
        className="h-screen w-screen fixed top-0 left-0"
      >
        <img src="/4.png" alt="" />
      </Parallax>

      <div className="h-screen w-screen"></div>
      <Parallax
        opacity={[0, 1, "easeIn"]}
        startScroll={3600}
        endScroll={4800}
        className="h-screen w-screen fixed top-0 left-0"
      >
        <img src="/5.png" alt="" />
      </Parallax>
      <div className="h-screen w-screen z-[100]"></div>
      <div className="h-screen w-screen z-[100]"></div>

      <Parallax
        opacity={[0, 1, "easeIn"]}
        startScroll={4800}
        endScroll={6000}
        className="h-screen w-screen fixed top-0 left-0"
      >
        <img src="/Renga_logo_Slim_White.svg" alt="" />
      </Parallax>
      <div className="h-screen w-screen z-[100]"></div>
    </div>
  );
}

export default Hero;
