import React from "react";
import MotionWrap from "@/components/motion-wrap";
import { content } from "@/components/sections/stack/config";

import SkillCard from "./stack-card";

function Skills() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="skills">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              My Stack
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my skills where I&apos;ve turned knowledge into
              expertise, making things happen.
            </p>
          </div>
          <div className="grid gap-4">
            {content.stacks.map((stack, index) => (
              <SkillCard
                key={`skill_${index}`}
                name={stack.name}
                description={stack.description}
                thumbnail={stack.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
