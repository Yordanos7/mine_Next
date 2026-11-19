import Link from "next/link";
import React from "react";

import { Icons } from "@/components/common/icons";
import { contributionsInterface } from "@/config/contributions";

interface ContributionCardProps {
  contributions: contributionsInterface[];
}

export default function ContributionCard({
  contributions,
}: ContributionCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {contributions.map((contribution, id) => (
        <Link
          href={contribution.link}
          target="_blank"
          rel="noopener noreferrer"
          key={id}
          className="h-full block group"
        >
          <div className="relative rounded-lg border border-border bg-background p-5 hover:bg-muted/40 hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between shadow-sm hover:shadow-md">
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-bold text-base flex items-center gap-2 text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  <Icons.gitRepoIcon size={18} className="flex-shrink-0 text-primary" />
                  <span>{contribution.repo}</span>
                </h3>
                <Icons.externalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-foreground flex-shrink-0 mt-1 transition-colors"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                {contribution.contibutionDescription}
              </p>
            </div>
            <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-medium">
                <Icons.gitOrgBuilding size={14} className="text-muted-foreground" />
                {contribution.repoOwner}
              </span>
              <span className="text-primary font-medium group-hover:underline flex items-center gap-1">
                GitHub <span>→</span>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
