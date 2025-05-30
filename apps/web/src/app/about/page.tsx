"use client";

import React from "react";
import SkillCard from "@/app/about/_components/stack-card";
import Link from "@/components/fancy/link";
import TextReveal from "@/components/fancy/text-reveal";
import { contact } from "@/components/sections/contact/config";
import { content as experienceContent } from "@/components/sections/experience/config";
import ExperienceCard from "@/components/sections/experience/cozy/experience-card";
import { content as stackContent } from "@/components/sections/stack/config";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@repo/ui";
import { Button, buttonVariants } from "@repo/ui/button";
import { Icons } from "@repo/ui/icons";
import { Separator } from "@repo/ui/separator";

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-24">
      <section className="relative -mx-4 flex h-[calc(100svh-(--spacing(14)))] items-center justify-center overflow-hidden pb-12 sm:-mx-8 md:-mx-12 lg:-mx-16 2xl:-mx-24">
        <div className="relative container mx-auto flex flex-col items-center px-4">
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Aspiring
          </TextReveal>
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Backend
          </TextReveal>
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Engineer
          </TextReveal>
          <motion.div
            className="mt-8"
            style={{ opacity }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Icons.chevronDown className="h-8 w-8" />
          </motion.div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">About</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="space-y-8">
              <TextReveal
                as="h3"
                className="font-serif text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                I am an aspiring backend engineer with an interest in creating
                efficient and scalable systems.
              </TextReveal>
              <TextReveal
                as="p"
                className="text-muted-foreground text-base leading-relaxed sm:text-lg md:text-lg lg:text-xl xl:text-2xl"
              >
                My journey into tech comes after a background in the Sciences.
                My first ever programming language was Python, which I used to
                automate tasks tedious tasks on my machine. Since then, I have
                expanded my skill set to include TypeScript, Node.js, and
                various backend technologies. I am passionate about building
                robust APIs and microservices that power modern applications.
              </TextReveal>
              <Button asChild variant={"outline"} className="rounded-full px-6">
                <a href="/resume.pdf" target="_blank">
                  View Resume <Icons.arrowUpRight className="ml-2 size-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Skills</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6 xl:grid-cols-2">
              {stackContent.stacks.map((skill, index) => (
                <SkillCard
                  key={`skill_${index}`}
                  index={index + 1}
                  name={skill.name}
                  description={skill.description}
                  thumbnail={skill.thumbnail}
                  className="flex rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Experience</h2>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 md:gap-6 xl:grid-cols-2">
              {experienceContent.experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience_${index}`}
                  name={experience.name}
                  description={experience.description}
                  company={experience.company}
                  duration={experience.duration}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold sm:text-2xl">Contact</h2>
            <div className="mt-2 flex flex-col gap-1">
              <Link
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "h-min w-min p-0 text-sm font-normal sm:text-base md:text-lg",
                )}
                href={`mailto:${contact.email}`}
              >
                <Icons.mail className="h-4 w-4" />
                {contact.email}
              </Link>
              {contact.socials.map(({ Icon, name, href }, index) => (
                <Link
                  target="_blank"
                  href={href}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "h-min w-min gap-1 p-0 text-sm sm:text-base md:text-lg",
                  )}
                  key={`contact-social_${index}`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
