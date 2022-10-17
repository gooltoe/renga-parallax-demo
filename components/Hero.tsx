import React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

type Props = {};

function Hero({}: Props) {
  const { width, page_height } = useWindowDimensions();

  return (
    <div>
      <div className="h-screen w-screen"></div>
      <div className="h-screen w-screen"></div>
      <div className="h-screen w-screen"></div>
      <div className="h-screen w-screen"></div>
      <div className="h-screen w-screen"></div>
      <div className="h-screen w-screen"></div>

      <div className="h-screen w-screen fixed top-0 left-0 bg-[url('/../1.png')] bg-cover bg-center	"></div>

      <Parallax
        startScroll={0}
        endScroll={page_height}
        opacity={[0, 1, "easeIn"]}
        className="h-screen w-screen fixed top-0 left-0 bg-[url('/../2.png')] bg-cover bg-center	"
      ></Parallax>

      <Parallax
        startScroll={page_height * 1}
        endScroll={page_height * 2}
        translateX={[100, 0, "easeIn"]}
        className="h-screen w-screen fixed top-0 left-0 bg-[url('/../3.gif')] bg-cover bg-center	"
      ></Parallax>

      <Parallax
        translateY={[100, 0, "easeIn"]}
        startScroll={page_height * 2}
        endScroll={page_height * 3}
        className="h-screen w-screen fixed top-0 left-0 bg-[url('/../4.png')] bg-cover bg-center	"
      ></Parallax>

      <Parallax
        opacity={[0, 1, "easeIn"]}
        startScroll={page_height * 3}
        endScroll={page_height * 4}
        className="h-screen w-screen fixed top-0 left-0 bg-[url('/../5.png')] bg-cover	"
      ></Parallax>

      <Parallax
        opacity={[0, 1, "easeIn"]}
        startScroll={page_height * 4}
        endScroll={page_height * 5}
        className="h-screen w-screen fixed top-0 left-0 "
      >
        <div className="flex w-full h-full items-center justify-center">
          <img
            src="/Renga_logo_Slim_White.svg"
            alt=""
            className="items-center px-[30vw] pt-"
          />
        </div>
      </Parallax>
    </div>
  );
}

export default Hero;
