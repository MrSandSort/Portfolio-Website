import { skills } from "@/lib/portfolio-data";

import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="section-space">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies and e"
          description="I bias toward technologies that keep teams fast, systems observable, and architecture flexible enough to evolve without expensive rewrites."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 80}>
              <div className="panel h-full p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{group.category}</h3>
                    <p className="mt-3 text-base leading-7 text-muted">{group.description}</p>
                  </div>
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Core
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-line/70 bg-background/65 px-4 py-2 text-sm text-foreground transition hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
