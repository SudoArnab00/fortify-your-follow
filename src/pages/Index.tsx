import { 
  Shield, 
  Linkedin, 
  Twitter, 
  Github, 
  Globe, 
  Award, 
  Link as LinkIcon,
  BookOpen,
  Youtube,
  Mail,
  Target,
  Boxes
} from "lucide-react";
import GridBackground from "@/components/GridBackground";
import ProfileHeader from "@/components/ProfileHeader";
import SectionTitle from "@/components/SectionTitle";
import LinkCard from "@/components/LinkCard";
import BadgeCard from "@/components/BadgeCard";
import Footer from "@/components/Footer";

const Index = () => {
  // Profile data - customize these!
  const profile = {
    name: "Your Name",
    title: "Cybersecurity Professional",
    bio: "Passionate about securing digital infrastructure, ethical hacking, and sharing knowledge. Let's make the internet safer together.",
    avatarUrl: "", // Add your avatar URL
  };

  // Main links
  const mainLinks = [
    {
      title: "TryHackMe",
      description: "My learning journey & achievements",
      href: "https://tryhackme.com/p/yourusername",
      icon: Target,
      variant: "primary" as const,
    },
    {
      title: "Hack The Box",
      description: "Pentesting labs & challenges",
      href: "https://app.hackthebox.com/profile/yourid",
      icon: Boxes,
      variant: "secondary" as const,
    },
    {
      title: "Credly Badges",
      description: "Verified certifications & badges",
      href: "https://www.credly.com/users/yourusername",
      icon: Award,
      variant: "accent" as const,
    },
    {
      title: "Blog / Portfolio",
      description: "Articles, write-ups & projects",
      href: "https://yourblog.com",
      icon: BookOpen,
      variant: "primary" as const,
    },
  ];

  // Social links
  const socialLinks = [
    {
      title: "LinkedIn",
      description: "Professional network",
      href: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
      variant: "secondary" as const,
    },
    {
      title: "Twitter / X",
      description: "Cyber news & thoughts",
      href: "https://twitter.com/yourusername",
      icon: Twitter,
      variant: "primary" as const,
    },
    {
      title: "GitHub",
      description: "Open source projects & tools",
      href: "https://github.com/yourusername",
      icon: Github,
      variant: "accent" as const,
    },
    {
      title: "YouTube",
      description: "Tutorials & walkthroughs",
      href: "https://youtube.com/@yourusername",
      icon: Youtube,
      variant: "secondary" as const,
    },
  ];

  // Featured certifications
  const certifications = [
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      href: "https://www.credly.com/badges/your-badge-id",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      href: "https://www.credly.com/badges/your-badge-id",
    },
    {
      title: "CEH",
      issuer: "EC-Council",
      href: "https://www.credly.com/badges/your-badge-id",
    },
    {
      title: "OSCP",
      issuer: "Offensive Security",
      href: "https://www.credly.com/badges/your-badge-id",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <GridBackground />
      
      <main className="relative z-10 container max-w-2xl mx-auto px-4 py-12">
        {/* Profile Header */}
        <ProfileHeader 
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
          avatarUrl={profile.avatarUrl}
        />

        {/* Main Links Section */}
        <section className="mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <SectionTitle title="Learning Platforms" icon={<Shield className="w-5 h-5" />} />
          <div className="space-y-3">
            {mainLinks.map((link, index) => (
              <div 
                key={link.title}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <LinkCard {...link} />
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <SectionTitle title="Certifications" icon={<Award className="w-5 h-5" />} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <BadgeCard {...cert} />
              </div>
            ))}
          </div>
        </section>

        {/* Social Links Section */}
        <section className="mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <SectionTitle title="Connect" icon={<LinkIcon className="w-5 h-5" />} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socialLinks.map((link, index) => (
              <div 
                key={link.title}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <LinkCard {...link} />
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a
            href="mailto:your@email.com"
            className="
              group flex items-center justify-center gap-3 
              w-full p-4 rounded-lg
              bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10
              border border-primary/30
              transition-all duration-300
              hover:border-primary hover:cyber-glow
              hover:scale-[1.02]
            "
          >
            <Mail className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
            <span className="font-sans font-semibold text-foreground">Get in Touch</span>
          </a>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
