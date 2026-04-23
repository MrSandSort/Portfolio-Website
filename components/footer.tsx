import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>{new Date().getFullYear()} {profile.name}. Designed for clarity, performance, and long-term maintainability.</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-foreground">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="transition hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
