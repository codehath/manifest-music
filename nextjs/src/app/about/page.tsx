"use client";

import Image from "next/image";
import SocialLink, { SocialLinkType } from "@/components/social-link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/image";
import { useSettings } from "@/contexts/SettingsContext";

const renderSocialLink = (type: SocialLinkType, url: string) => (
  <SocialLink type={type} url={url} color="black" />
);

export default function AboutPage() {
  const settings = useSettings();
  const logoUrl = settings.logo5
    ? urlFor(settings.logo5).url()
    : "/logos/manifest-text-logo-black.svg";

  return (
    <div className="container flex items-center justify-center mx-auto px-4 py-24">
      <div className="flex flex-col items-center justify-center space-y-16">
        <Image src={logoUrl} alt="Manifest Music" width={250} height={48} />
        <div className="prose text-xl font-normal text-black text-center">
          <PortableText value={settings.about} />
        </div>
        <div className="flex items-center gap-4">
          {settings.instagram &&
            renderSocialLink(SocialLinkType.Instagram, settings.instagram)}
          {settings.spotify &&
            renderSocialLink(SocialLinkType.Spotify, settings.spotify)}
          {settings.email &&
            renderSocialLink(SocialLinkType.Email, settings.email)}
        </div>
      </div>
    </div>
  );
}
