const GridBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(160 100% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(160 100% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />
      
      {/* Scanlines overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(160 100% 50% / 0.5) 2px,
            hsl(160 100% 50% / 0.5) 4px
          )`,
        }}
      />
    </div>
  );
};

export default GridBackground;
