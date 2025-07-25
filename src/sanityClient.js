import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'hn5zmrpx',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-07-24',
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}