interface SectionHeaderProps {
  badge?: string;
  badgeEmoji?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  badgeEmoji,
  title,
  subtitle,
  light = false,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            light
              ? "bg-white/10 text-white/90"
              : "bg-primary-100 text-primary-700"
          }`}
        >
          {badgeEmoji && <span>{badgeEmoji}</span>}
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight ${
          light ? "text-white" : "text-steel-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${
            center ? "mx-auto" : ""
          } leading-relaxed ${light ? "text-white/70" : "text-steel-500"}`}
        >
          {subtitle}
        </p>
      )}
      {/* Industrial accent line */}
      <div
        className={`mt-6 h-1 w-20 rounded-full ${
          center ? "mx-auto" : ""
        } bg-gradient-to-r from-primary-500 to-accent-500`}
      />
    </div>
  );
}
