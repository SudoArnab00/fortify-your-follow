import { Shield, Terminal } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  title: string;
  bio: string;
  avatarUrl?: string;
}

const ProfileHeader = ({ name, title, bio, avatarUrl }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center mb-10">
      {/* Avatar */}
      <div className="relative mb-6">
        <div className="
          w-32 h-32 rounded-full 
          bg-gradient-to-br from-primary via-secondary to-accent p-[2px]
          animate-glow-pulse
        ">
          <div className="
            w-full h-full rounded-full bg-background 
            flex items-center justify-center overflow-hidden
          ">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <Shield className="w-16 h-16 text-primary" />
            )}
          </div>
        </div>
        {/* Status indicator */}
        <div className="
          absolute bottom-2 right-2 
          w-5 h-5 rounded-full 
          bg-primary border-4 border-background
          animate-pulse
        " />
      </div>

      {/* Name */}
      <h1 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-2 text-glow">
        {name}
      </h1>

      {/* Title with terminal styling */}
      <div className="flex items-center gap-2 mb-4">
        <Terminal className="w-4 h-4 text-primary" />
        <span className="text-primary font-mono text-sm">
          <span className="opacity-60">~/</span>{title}
        </span>
      </div>

      {/* Bio */}
      <p className="text-muted-foreground max-w-md leading-relaxed">
        {bio}
      </p>

      {/* Terminal-style decorator */}
      <div className="mt-6 flex items-center gap-2 text-muted-foreground font-mono text-xs">
        <span className="text-primary">▹</span>
        <span>Available for collaborations</span>
        <span className="w-2 h-4 bg-primary/80 animate-pulse" />
      </div>
    </div>
  );
};

export default ProfileHeader;
