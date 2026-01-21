/**
 * GROQ queries used across the application
 */

const DOCUMENT_TYPES = {
  MUSICIAN: "musician",
  SETTINGS: "settings",
} as const;

/**
 * Base query for artists with a specific type
 * @param type - The type of artist to query for
 */
export const getArtistsByTypeQuery = (type: string) =>
  `*[_type == "${DOCUMENT_TYPES.MUSICIAN}" && type == "${type}"]`;

// Predefined queries for specific artist types
export const QUERIES = {
  ALL: `*[_type == "${DOCUMENT_TYPES.MUSICIAN}"] | order(displayOrder asc)`,
  ARTISTS: getArtistsByTypeQuery("artist"),
  PRODUCER_WRITERS: getArtistsByTypeQuery("producer-writer"),
  SETTINGS: `*[_type == "${DOCUMENT_TYPES.SETTINGS}"][0]`,
} as const;
