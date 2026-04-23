import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { profile } from "@/lib/portfolio-data";

import { ContactForm } from "../contact-form";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="section-space pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about products that need strong engineering judgment."
          description="Whether the work is AI-enabled product development, backend architecture, or platform reliability, I care most about clear scope, measurable outcomes, and disciplined execution."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-6">
            <Reveal>
              <div className="panel p-6 sm:p-8">
                <div className="space-y-5 text-base text-muted">
                  <a href={`mailto:${profile.email}`} className="flex items-start gap-3 transition hover:text-foreground">
                    <Mail className="mt-1 h-5 w-5 text-accent" />
                    <span>{profile.email}</span>
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition hover:text-foreground">
                    <Linkedin className="mt-1 h-5 w-5 text-accent" />
                    <span>LinkedIn profile</span>
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition hover:text-foreground">
                    <Github className="mt-1 h-5 w-5 text-accent" />
                    <span>GitHub repositories</span>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-accent" />
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="panel p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">Preferred Engagements</p>
                <div className="mt-5 space-y-4 text-base leading-7 text-muted">
                  <p>Platform engineering and backend modernization</p>
                  <p>AI workflows with clear evaluation and guardrails</p>
                  <p>High-ownership product builds for teams that value delivery rigor</p>
                </div>
                <a href={profile.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-foreground">
                  Review selected work
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
