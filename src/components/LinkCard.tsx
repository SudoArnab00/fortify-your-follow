import { LucideIcon } from "lucide-react";

interface LinkCardProps {
  title: string;
  description?: string;
  href: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary" | "accent";
}

const LinkCard = ({ title, description, href, icon: Icon, variant = "primary" }: LinkCardProps) => {
  const variantStyles = {
    primary: "hover:border-primary hover:cyber-glow",
    secondary: "hover:border-secondary hover:cyber-glow-secondary",
    accent: "hover:border-accent hover:cyber-glow-accent",
  };

  const iconStyles = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative block w-full p-4 
        bg-card border border-border rounded-lg
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:-translate-y-1
        ${variantStyles[variant]}
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`
          flex items-center justify-center w-12 h-12 
          rounded-lg bg-muted/50 
          transition-colors duration-300
          group-hover:bg-muted
        `}>
          <Icon className={`w-6 h-6 ${iconStyles[variant]} transition-all duration-300 group-hover:scale-110`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-sans font-semibold text-foreground truncate">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground truncate">
              {description}
            </p>
          )}
        </div>
        <div className={`
          w-8 h-8 flex items-center justify-center 
          rounded-full border border-border
          transition-all duration-300
          group-hover:border-primary group-hover:bg-primary/10
        `}>
          <svg
            className="w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
