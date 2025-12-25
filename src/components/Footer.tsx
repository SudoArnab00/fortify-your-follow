import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 pb-8 text-center">
      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm font-mono">
        <Code className="w-4 h-4" />
        <span>Built with</span>
        <Heart className="w-4 h-4 text-destructive animate-pulse" />
        <span>and</span>
        <span className="text-primary">cybersecurity</span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
