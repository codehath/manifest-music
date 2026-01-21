import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export enum SocialLinkType {
  Instagram = "instagram",
  Email = "email",
  Spotify = "spotify",
}

interface SocialLinkProps {
  type: SocialLinkType;
  url: string;
  color?: "black" | "white";
}

const SocialLink = ({ type, url, color = "white" }: SocialLinkProps) => {
  const iconClass = color === "black" ? "text-black" : "text-white";

  // Determine the correct href based on the type
  const href = type === SocialLinkType.Email ? `mailto:${url}` : url;

  // Determine the Font Awesome icon object and screen reader text based on the type
  let faIcon; // This will hold the imported icon object (e.g., faInstagram)
  let screenReaderText: string;

  switch (type) {
    case SocialLinkType.Instagram:
      faIcon = faInstagram;
      screenReaderText = "Instagram";
      break;
    case SocialLinkType.Email:
      faIcon = faEnvelope; // Use the envelope icon for email
      screenReaderText = "Email";
      break;
    case SocialLinkType.Spotify:
      faIcon = faSpotify; // Use the spotify icon
      screenReaderText = "Spotify";
      break;
    default:
      console.warn(`Unknown social link type: ${type}`);
      return null;
  }

  return (
    <Link
      href={href}
      className={`transition-colors ${iconClass} hover:opacity-75 inline-block`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Use the FontAwesomeIcon component */}
      <FontAwesomeIcon icon={faIcon} className="h-8 w-8" />{" "}
      {/* Pass the icon object */}
      <span className="sr-only">{screenReaderText}</span>
    </Link>
  );
};

export default SocialLink;
