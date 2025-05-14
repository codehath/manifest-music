"use client";

import Image from "next/image";
import { SiSpotify, SiInstagram } from "react-icons/si";
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
}

export function ArtistCard({ artist }: { artist: Artist }) {
  const imageProps = useNextSanityImage(
    client,
    artist.image || { asset: { _ref: "" } }
  );
  return (
    <div className="group relative">
      <Image
        {...(artist.image
          ? imageProps
          : { src: "/placeholder.svg", width: 600, height: 400 })}
        alt={artist.name || "Artist"}
        className="aspect-[3/2] w-full object-cover rounded-[20px] transition-transform duration-300 group-hover:filter group-hover:blur-sm"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="mb-6 text-2xl font-bold">
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
        </div>
      </div>
    </div>
  );
}
