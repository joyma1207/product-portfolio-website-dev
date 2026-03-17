import { type LucideIcon } from "lucide-react";

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

/**
 * Grid card for Skills & Capabilities: icon (accent) + title + description.
 */
export function AboutCard({ icon: Icon, title, children }: AboutCardProps) {
  return (
    <div
      className="rounded-lg border border-gray-200/70 bg-white p-5 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-[var(--accent-blue)] focus-within:ring-offset-2"
      tabIndex={0}
    >
      <div
        className="mb-3 flex h-10 w-10 items-center justify-center rounded-md text-teal-600"
        style={{ backgroundColor: "var(--accent-blue)" }}
        aria-hidden
      >
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h4 className="text-lg font-semibold tracking-brand text-gray-900">
        {title}
      </h4>
      <div className="mt-2 text-sm text-gray-600 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
