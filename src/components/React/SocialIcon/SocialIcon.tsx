import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

interface SocialMediaLinksProps {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

const SocialIcons = ({
  facebook,
  twitter,
  linkedin,
  instagram,
}: SocialMediaLinksProps) => {
  const socialLinks = [
    { href: facebook, icon: FaFacebook, label: "Facebook" },
    { href: twitter, icon: FaTwitter, label: "Twitter" },
    { href: linkedin, icon: FaLinkedin, label: "LinkedIn" },
    { href: instagram, icon: FaInstagram, label: "Instagram" },
  ].filter((link) => link.href);

  if (socialLinks.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="w-10 h-10 bg-dracula-bg/10 rounded-lg flex items-center justify-center text-dracula-bg/70 hover:bg-dracula-cyan hover:text-dracula-bg transition-all duration-300"
        >
          <social.icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
