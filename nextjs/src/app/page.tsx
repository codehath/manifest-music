"use client";

import Image from "next/image";
import Link from "next/link";
import VideoBackground from "@/components/video-background";
import SocialLink from "@/components/social-link";
import { urlFor } from "@/sanity/image";
import { useSettings } from "@/contexts/SettingsContext";

export default function LandingPage() {
  const settings = useSettings();

  const renderSocialLink = (type: string, url: string) => (
    <SocialLink type={type} url={url} round={true} />
  );

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">
      <VideoBackground src="/videos/reel.mp4" className="z-[-1]" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="absolute right-8 top-8 flex items-center gap-4">
          {settings.instagram &&
            renderSocialLink("instagram", settings.instagram)}
          {settings.email && renderSocialLink("email", settings.email)}
        </div>
        <div className="flex h-full flex-col items-center justify-center px-4">
          {/* <Link href="/all" className="group"> */}
          {settings.logo4 ? (
            <div className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px]">
              <Image
                src={urlFor(settings.logo4).url()}
                alt="Manifest Music"
                fill
                sizes="(max-width: 768px) 200px, 400px"
                className="object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ) : (
            <p className="text-white">Logo not available</p>
          )}
          {/* </Link> */}
        </div>
        <div className="absolute bottom-10 w-full text-center">
          <p className="text-sm text-white/70 md:text-lg">
            Music Publishing • Management • Records
          </p>
        </div>
      </div>
    </div>
  );
}
