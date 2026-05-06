import { cn } from "../utils/cn";

export default function Button({
  children,
  variant = "primary",
  icon,
  href,
  onClick,
  external = false,
  className,
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200";

  const variants = {
    primary:
      "bg-text text-bg hover:scale-105 hover:shadow-lg",
    outline:
      "border hover:scale-105",
    ghost:
      "text-text/70 hover:text-text",
  };

  const content = (
    <>
      {children}
      {icon && <span className="flex items-center">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(base, variants[variant], className)}
    >
      {content}
    </button>
  );
}