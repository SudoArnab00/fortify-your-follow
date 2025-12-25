interface BadgeCardProps {
  title: string;
  issuer: string;
  href: string;
  imageUrl?: string;
}

const BadgeCard = ({ title, issuer, href, imageUrl }: BadgeCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative flex flex-col items-center p-4
        bg-card border border-border rounded-lg
        transition-all duration-300 ease-out
        hover:border-accent hover:cyber-glow-accent
        hover:scale-[1.02] hover:-translate-y-1
      "
    >
      <div className="
        w-16 h-16 mb-3 rounded-full 
        bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20
        flex items-center justify-center
        border border-border
        transition-all duration-300
        group-hover:border-accent
      ">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-12 h-12 object-contain rounded-full" />
        ) : (
          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        )}
      </div>
      <h4 className="font-sans font-medium text-sm text-foreground text-center line-clamp-2">
        {title}
      </h4>
      <p className="text-xs text-muted-foreground mt-1">
        {issuer}
      </p>
    </a>
  );
};

export default BadgeCard;
