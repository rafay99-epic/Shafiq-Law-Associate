import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

interface SocialMediaLinksProps {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}

const SocialIcons = ({
  facebook,
  twitter,
  linkedin,
  instagram,
}: SocialMediaLinksProps) => {
  return (
    <div className="flex justify-center md:justify-start space-x-4 mt-3">
      <a
        href={facebook}
        target="_blank"
        className="text-black hover:text-dracula-pink transition-colors duration-300"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href={twitter}
        target="_blank"
        className="text-black hover:text-dracula-pink transition-colors duration-300"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href={linkedin}
        target="_blank"
        className="text-black hover:text-dracula-pink transition-colors duration-300"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href={instagram}
        target="_blank"
        className="text-black hover:text-dracula-pink transition-colors duration-300"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
