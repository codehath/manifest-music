import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { ArtistGrid } from "@/components/artist-grid";
import { QUERIES } from "@/constants/queries";

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const artists = await client.fetch<SanityDocument[]>(
    QUERIES.ALL,
    {},
    options
  );

  return (
    <div className="container mx-auto pb-8">
      <ArtistGrid artists={artists} />
    </div>
  );
}
