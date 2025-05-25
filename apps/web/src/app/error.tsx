"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@repo/ui";
import { buttonVariants } from "@repo/ui/button";

const ErrorPage: React.FC = () => {
  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      <div className="z-30 flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl md:text-6xl">Something went wrong</h1>
        <div className="w-full rounded-full bg-[#efefef]">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full self-center rounded-full px-8 py-2 md:self-start",
            )}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
