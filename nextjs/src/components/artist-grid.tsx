// src/components/artist-grid.tsx
import { ArtistCard, Artist } from "@/components/artist-card";

interface ArtistGridProps {
  artists: Artist[];
}

export function ArtistGrid({ artists }: ArtistGridProps) {
  if (!artists || artists.length === 0) {
    return <div>No artists found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {artists.map((artist) => (
        <ArtistCard key={artist._id} artist={artist} />
      ))}
    </div>
  );
}
