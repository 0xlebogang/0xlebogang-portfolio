import React from "react";
import Image from "next/image";
import Link from "next/link";
import MotionWrap from "@/components/motion-wrap";

import { Button } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";

import { about } from "../config";

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {about.title}
            </h2>
            <div className="space-y-4">
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {about.description}
              </p>
              <div className="flex gap-2">
                <Button asChild variant={"outline"}>
                  <a href={about.resumeUrl} target="_blank">
                    View Resume <Icons.arrowUpRight className="ml-2 size-5" />
                  </a>
                </Button>
                <Button asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6">
            <Image
              alt={about.image?.alt ?? "Image"}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src={about.image?.imageUrl ?? "/images/hero.jpg"}
              sizes="100vw"
              width="550"
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
