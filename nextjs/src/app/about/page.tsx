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
    <div className="container mx-auto md:py-20">
      <div className="grid gap-20 lg:grid-cols-4">
        {/* Left Column */}
        <div className="space-y-16 lg:col-span-3">
          <Image src={logoUrl} alt="Manifest Music" width={250} height={48} />
          <div className="prose text-xl font-normal text-black">
            <PortableText value={settings.about} />
          </div>
          <div className="flex items-center gap-4">
            {settings.instagram &&
              renderSocialLink(SocialLinkType.Instagram, settings.instagram)}
            {settings.email &&
              renderSocialLink(SocialLinkType.Email, settings.email)}
          </div>
        </div>
      </div>
    </div>
  );
}
