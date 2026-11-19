"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExperienceInterface } from "@/config/experience";

interface CertificatesSectionProps {
  experiences: ExperienceInterface[];
}

export default function CertificatesSection({
  experiences,
}: CertificatesSectionProps) {
  const certifiedExperiences = experiences.filter(
    (exp) => exp.certificate !== undefined
  );

  if (certifiedExperiences.length === 0) return null;

  return (
    <section className="mt-16 space-y-6">
      <AnimatedSection direction="up">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide uppercase">
            <Icons.award className="w-5 h-5 text-amber-500" />
            Verified Credentials & Awards
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Official Certificates of Excellence & Completion
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Formal recognition and certificates awarded for technical leadership,
            architecture, and delivery across key engineering engagements.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifiedExperiences.map((exp, index) => {
          const cert = exp.certificate!;
          return (
            <AnimatedSection
              key={exp.id}
              delay={0.15 * (index + 1)}
              direction="up"
            >
              <Card className="h-full flex flex-col overflow-hidden border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="relative aspect-[16/11] bg-muted/40 border-b border-border overflow-hidden group">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-background/95 text-foreground shadow-sm hover:bg-background transition-colors"
                    >
                      <Icons.externalLink className="w-3.5 h-3.5" />
                      View High-Resolution Certificate
                    </a>
                  </div>
                </div>

                <CardContent className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        <Icons.award className="w-3.5 h-3.5" />
                        {cert.type}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {cert.issuedDate}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-foreground line-clamp-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed italic border-l-2 border-primary/30 pl-2.5">
                      &ldquo;{cert.description}&rdquo;
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border flex items-center justify-between gap-2 flex-wrap">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/experience/${exp.id}`}>
                        Role Details
                        <Icons.chevronRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={cert.image}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icons.externalLink className="w-3.5 h-3.5 mr-1" />
                          Image
                        </a>
                      </Button>
                      {cert.pdf && (
                        <Button size="sm" asChild>
                          <a
                            href={cert.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                          >
                            <Icons.download className="w-3.5 h-3.5 mr-1" />
                            PDF
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
