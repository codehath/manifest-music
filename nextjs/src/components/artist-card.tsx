"use client";

import Image from "next/image";
import { SiSpotify, SiInstagram, SiTiktok } from "react-icons/si";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Artist {
  _id: string;
  name?: string;
  image?: SanityImageSource;
  instagram?: string;
  spotify?: string;
  tiktok?: string;
}

export function ArtistCard({ artist }: { artist: Artist }) {
  const imageProps = useNextSanityImage(
    client,
    artist.image || { asset: { _ref: "" } }
  );
  return (
    // Add tabIndex to make the div focusable, allowing group-focus to work on tap
    <div className="group relative" tabIndex={0}>
      <Image
        {...(artist.image
          ? imageProps
          : { src: "/placeholder.svg", width: 600, height: 400 })}
        alt={artist.name || "Artist"}
        className="aspect-[3/2] w-full object-cover rounded-[20px] transition-all duration-300
                   [@media(hover:hover)]:group-hover:filter [@media(hover:hover)]:group-hover:blur-sm
                   group-focus:filter group-focus:blur-sm"
      />
      {/* Dimming overlay */}
      <div
        className="absolute inset-0 bg-black opacity-0
                   [@media(hover:hover)]:group-hover:opacity-30
                   group-focus:opacity-30
                   transition-opacity duration-300 rounded-[20px]"
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0
                   [@media(hover:hover)]:group-hover:opacity-100
                   group-focus:opacity-100
                   transition-opacity duration-300 z-10">
        <h3 className="mb-6 text-xl font-bold justify-center text-center">
          {artist.name || "Unknown Artist"}
        </h3>

        <div className="flex space-x-4">
          {artist.spotify && (
            <Link
              href={artist.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <SiSpotify className="h-6 w-6" />
            </Link>
          )}
          {artist.instagram && (
            <Link
              href={artist.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <SiInstagram className="h-6 w-6" />
            </Link>
          )}
          {artist.tiktok && (
            <Link
              href={artist.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <SiTiktok className="h-6 w-6" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
