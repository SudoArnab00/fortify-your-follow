interface SectionTitleProps {
  title: string;
  icon?: React.ReactNode;
}

const SectionTitle = ({ title, icon }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      {icon && (
        <div className="text-primary">
          {icon}
        </div>
      )}
      <h2 className="font-sans text-xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
    </div>
  );
};

export default SectionTitle;
