import { aboutHighlights, profile } from "@/lib/portfolio-data";

import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-space">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="I build systems that stay useful after the launch week."
          description="The goal is not just to ship code. It is to create leverage for the business, remove repeated friction for users and teams, and make the next iteration easier than the last."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="panel p-8 sm:p-10">
              <p className="text-lg leading-8 text-muted">
                {profile.summary}
              </p>
              <p className="mt-6 text-lg leading-8 text-muted">
                I am most effective where product ambition meets backend complexity: distributed services, internal platforms, AI-assisted workflows, and engineering environments where performance and reliability matter because real users depend on them every day.
              </p>
              <div className="mt-8 inline-flex rounded-full border border-line/70 bg-background/65 px-4 py-2 text-sm text-muted">
                {profile.location}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {aboutHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="panel h-full p-6">
                  <p className="text-lg font-semibold text-foreground">{item.title}</p>
                  <p className="mt-3 text-base leading-7 text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
