import { experience } from "@/lib/portfolio-data";

import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-space">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Product delivery across platform, cloud, and developer productivity."
          description="This section is structured like an engineering review: scope, responsibilities, and the kinds of measurable improvements each role delivered."
        />

        <div className="relative mt-12 space-y-8 before:absolute before:left-[1.15rem] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-line/80 sm:before:left-6">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 90}>
              <article className="relative pl-12 sm:pl-16">
                <div className="absolute left-0 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-background text-accent shadow-soft dark:shadow-darksoft sm:left-[0.375rem]">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                </div>

                <div className="panel p-6 sm:p-8">
                  <div className="flex flex-col gap-3 border-b border-line/70 pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">{item.role}</h3>
                      <p className="mt-2 text-base text-accent">{item.company}</p>
                    </div>
                    <div className="text-sm text-muted sm:text-right">
                      <p>{item.period}</p>
                      <p className="mt-1">{item.location}</p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-4 text-base leading-7 text-muted">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
