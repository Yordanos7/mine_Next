"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import profileImg from "@/public/profile-img.jpg";

export default function GithubRedirectCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full h-fit max-w-sm overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] mt-5 border-muted/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="mb-6 rounded-full overflow-hidden border-4 border-primary/20 p-1 transition-all duration-500 hover:border-primary/40">
          <Image
            src={profileImg}
            alt={siteConfig.authorName}
            width={100}
            height={100}
            className={`rounded-full transition-all duration-500 ease-out ${isHovered ? "scale-110 rotate-3" : ""
              }`}
          />
        </div>
        <h2 className="font-heading text-2xl tracking-tight lg:text-3xl duration-300 font-bold italic">
          Let&#39;s Connect!
        </h2>
        <p className="mt-3 mb-8 text-muted-foreground leading-relaxed">
          I&#39;m always building new things. Follow me on GitHub to stay updated with my latest projects and open-source explorations.
        </p>
        <Icons.gitHub className="w-12 h-12 text-muted-foreground/60 mb-6 transition-colors duration-300 hover:text-foreground" />
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0">
        <Link
          href={siteConfig.links.github}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "grow bg-background hover:bg-accent border-2 transition-all duration-300 py-6 text-base font-semibold italic shadow-sm hover:shadow-md"
          )}
        >
          <span className="mr-2">Follow @Yordanos7</span>
          <ExternalLink className="w-5 h-5 ml-1" />
        </Link>
      </CardFooter>
      <div
        className={`h-1.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 transition-all duration-500 ease-in-out ${isHovered ? "opacity-100 w-full" : "opacity-0 w-0"
          }`}
      ></div>
    </Card>
  );
}
