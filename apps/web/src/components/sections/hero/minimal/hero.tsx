import React from "react";
import MotionWrap from "@/components/motion-wrap";
import { hero } from "@/components/sections/hero/config";

function Hero() {
  return (
    <MotionWrap className="flex h-[calc(100dvh-(--spacing(14)))] w-full items-center justify-center">
      <div className="flex w-full items-center justify-center gap-4 px-4 md:grid-cols-2 md:px-6 lg:gap-10">
        <div className="flex w-full items-center justify-center space-y-3 text-left">
          <div className="flex w-full max-w-(--breakpoint-xl) flex-col items-center center">
            <h1 className="text-end text-7xl sm:text-8xl font-bold tracking-tight md:text-9xl lg:text-[14rem]">
              {hero.name}
            </h1>
            <div className="text-xs dark:bg-foreground/10 mb-4 inline-block w-fit rounded-lg bg-gray-100 px-3 py-1 sm:text-sm ml-auto">
              {hero.label}
            </div>
          </div>
          {/* inspired by https://artistrytemplate.framer.website/ */}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Hero;
