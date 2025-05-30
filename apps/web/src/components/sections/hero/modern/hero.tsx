"use client";

import { useRef } from "react";

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="bg-background/[0.96] relative w-full overflow-hidden"
      ref={container}
    >
      <div className="relative z-10 h-[42.5dvh] md:h-[51.2dvh] md:min-h-[50dvh] xl:h-[61.2dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <span>A </span>
              <span className="font-bold">
                <span>passionate </span>
                <span>developer</span>
              </span>
              <br />
              <span className="flex items-center justify-start gap-2 sm:justify-end md:gap-4">
                {/* <span
                  className={`relative mx-2 my-auto inline-block aspect-[1.5/1] h-[3.25rem] overflow-hidden rounded-full bg-linear-to-br from-pink-200 from-40% to-blue-400 md:mx-4 md:h-[7.8rem]`}
                ></span> */}
                <span>from</span>
                <span>South </span>
                <span>Africa</span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* <ParallaxImage
        src="/images/hero.jpg"
        containerRef={container}
        alt="Hero image"
        containerClassName="w-screen lg:mt-28"
        priority
        parallaxOptions={{
          yStart: "-10%",
          yEnd: "10%",
          scaleStart: 1,
          scaleEnd: 1.5,
        }}
      /> */}
    </section>
  );
}

export default Hero;
