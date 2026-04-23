import { ArrowUpRight, Github } from "lucide-react";

import { projects } from "@/lib/portfolio-data";

import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-space">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with product context, technical depth, and measurable outcomes."
          description="Each project is framed around the same lens I use in real engineering work: what problem mattered, what system solved it, and what changed after it shipped."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <article className="panel group h-full p-6 sm:p-8">

                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {project.type}
                  </span>
                  <div className="flex items-center gap-3 text-muted">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm transition hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm transition hover:text-foreground"
                      >
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted">
                  {project.summary}
                </p>

                <div className="mt-6 rounded-3xl border border-line/70 bg-background/65 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                    Impact
                  </p>
                  <p className="mt-3 text-base leading-7 text-foreground">
                    {project.impact}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line/70 px-4 py-2 text-sm text-muted transition group-hover:border-accent/25 group-hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}