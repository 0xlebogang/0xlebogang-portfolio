import type { Stack } from "@/types/stack";
import React from "react";
// import { Icons } from "@repo/ui/icons";
import Image from "next/image";

import { cn } from "@repo/ui";
import { Card, CardContent } from "@repo/ui/card";

interface SkillCardProps extends Stack {
  className?: string;
}

function SkillCard({
  name,
  description,
  className,
  thumbnail,
}: SkillCardProps) {
  return (
    <Card className={cn("bg-muted/40", className)}>
      <CardContent>
        <div className="flex items-center gap-4">
          {/* <Icons.code className="min-h-8 min-w-8" /> */}
          <Image
            src={thumbnail?.src ?? ""}
            alt={`${thumbnail?.alt ?? name} Icon`}
            className="h-8 w-8 rounded-md object-cover"
            width={32}
            height={32}
          />
          <div className="grid gap-0.5">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description ?? ""}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
