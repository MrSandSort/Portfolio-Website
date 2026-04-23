import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

import { profile } from "@/lib/portfolio-data";

import { Reveal } from "../reveal";

export function HeroSection() {
  const photo = {
    src: "/images/sandesh.jpeg",
    alt: `Portrait of ${profile.name}`
  };

  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-20 sm:pt-24 lg:pb-28 lg:pt-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/10 px-4 py-2 text-sm text-accent shadow-soft dark:shadow-darksoft">
            <Sparkles className="h-4 w-4" />
            <span>{profile.heroBadge}</span>
          </div>

          <h1 className="mt-8 font-heading text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-xl font-medium text-accent sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="button-primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="button-secondary">
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-foreground">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-foreground">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-foreground">
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto flex w-full max-w-[34rem] items-center justify-center lg:-translate-y-6 lg:translate-x-6 lg:justify-end">
            <div className="absolute h-[22rem] w-[22rem] rounded-full bg-accent/20 blur-3xl sm:h-[28rem] sm:w-[28rem] lg:h-[34rem] lg:w-[34rem]" />
            <div className="absolute right-0 top-6 h-36 w-36 rounded-full bg-secondary/20 blur-3xl sm:h-44 sm:w-44 lg:h-52 lg:w-52" />
            <div className="absolute left-4 bottom-4 h-28 w-28 rounded-full bg-accent/15 blur-3xl sm:h-36 sm:w-36 lg:h-44 lg:w-44" />

            <div className="relative flex flex-col items-center">
              <div className="relative h-[20rem] w-[20rem] rounded-full shadow-soft dark:shadow-darksoft sm:h-[25rem] sm:w-[25rem] lg:h-[30rem] lg:w-[30rem]">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 30vw, 80vw"
                    className="object-cover object-center scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
