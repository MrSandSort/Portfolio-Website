import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p>
    </div>
  );
}
