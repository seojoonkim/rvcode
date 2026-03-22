type DividerVariant = "lime" | "blue" | "red" | "mixed";

const variantStyles: Record<
  DividerVariant,
  { gradient: string; dotColor: string; glowColor: string }
> = {
  lime: {
    gradient: "from-transparent via-neon-lime to-transparent",
    dotColor: "bg-neon-lime",
    glowColor: "shadow-[0_0_12px_rgba(204,255,0,0.6)]",
  },
  blue: {
    gradient: "from-transparent via-neon-blue to-transparent",
    dotColor: "bg-neon-blue",
    glowColor: "shadow-[0_0_12px_rgba(0,212,255,0.6)]",
  },
  red: {
    gradient: "from-transparent via-neon-red to-transparent",
    dotColor: "bg-neon-red",
    glowColor: "shadow-[0_0_12px_rgba(255,51,102,0.6)]",
  },
  mixed: {
    gradient: "from-neon-lime via-neon-blue to-neon-red",
    dotColor: "bg-neon-purple",
    glowColor: "shadow-[0_0_12px_rgba(191,95,255,0.6)]",
  },
};

export default function SectionDivider({
  variant = "mixed",
}: {
  variant?: DividerVariant;
}) {
  const style = variantStyles[variant];

  return (
    <div className="relative flex items-center justify-center py-4 px-4">
      {/* Left line */}
      <div
        className={`flex-1 h-px bg-gradient-to-r ${style.gradient} opacity-50`}
      />

      {/* Center diamond dot */}
      <div className="relative mx-4 flex items-center gap-2">
        <div
          className={`w-1.5 h-1.5 rounded-full ${style.dotColor} opacity-40`}
        />
        <div
          className={`w-2.5 h-2.5 rotate-45 ${style.dotColor} ${style.glowColor}`}
        />
        <div
          className={`w-1.5 h-1.5 rounded-full ${style.dotColor} opacity-40`}
        />
      </div>

      {/* Right line */}
      <div
        className={`flex-1 h-px bg-gradient-to-l ${style.gradient} opacity-50`}
      />
    </div>
  );
}
