import { LucideCpu, LucideGlobe, LucideLock, LucidePalette } from "lucide-react";

const metrics = [
  {
    icon: LucideCpu,
    title: "Material You Engine",
    subtitle: "Dynamic color, motion, and tactile micro-interactions"
  },
  {
    icon: LucideLock,
    title: "Edge-to-Edge Security",
    subtitle: "AES-256 encrypted, biometric locked threads"
  },
  {
    icon: LucidePalette,
    title: "Creative Canvas",
    subtitle: "Live emoji labs, glyph captions, soundscapes"
  },
  {
    icon: LucideGlobe,
    title: "Global Sync",
    subtitle: "Realtime translation with zero-latency delivery"
  }
];

export function MetricsGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-4">
      {metrics.map((metric) => (
        <article
          key={metric.title}
          className="flex flex-col gap-3 rounded-3xl bg-white/70 p-4 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <metric.icon className="h-5 w-5" />
          </span>
          <h3 className="text-sm font-semibold text-surface-900">{metric.title}</h3>
          <p className="text-xs text-slate-500">{metric.subtitle}</p>
        </article>
      ))}
    </section>
  );
}
