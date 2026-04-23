import { githubHeatmap, githubStats } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

const levelClasses = [
  "bg-line/60",
  "bg-accent/20",
  "bg-accent/40",
  "bg-accent/65",
  "bg-secondary/80"
];

export function GitHubSection() {
  return (
    <section id="github" className="section-space">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="GitHub"
          title="A concise snapshot of  consistency."
          description="Instead of decorative widgets, this section uses a lightweight activity surface and a few signal metrics that fit the overall design language."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {githubStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 70}>
                <div className="panel h-full p-6">
                  <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <div className="panel p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">Contribution Rhythm</p>
                  <p className="mt-3 text-lg text-foreground">A compact 12-week activity view with restrained styling.</p>
                </div>
                <div className="hidden items-center gap-2 text-xs text-muted sm:flex">
                  <span>Less</span>
                  {levelClasses.map((levelClass, index) => (
                    <span key={index} className={cn("h-3 w-3 rounded-sm border border-white/10", levelClass)} />
                  ))}
                  <span>More</span>
                </div>
              </div>

              <div className="mt-8 overflow-x-auto">
                <div className="grid min-w-max grid-flow-col grid-rows-7 gap-2">
                  {githubHeatmap.map((cell) => (
                    <div
                      key={cell.day}
                      className={cn(
                        "h-4 w-4 rounded-[4px] border border-white/10 transition duration-300 hover:scale-110",
                        levelClasses[cell.level]
                      )}
                      title={`Activity level ${cell.level}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
