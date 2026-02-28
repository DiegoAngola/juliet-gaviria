import { createClient } from "@sanity/client";

// TODO: Configure Sanity Client
// 1. Get your Project ID and Dataset from manage.sanity.io
// 2. Add them to your .env file:
//    VITE_SANITY_PROJECT_ID=your_project_id
//    VITE_SANITY_DATASET=production

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your_project_id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

// Helper to fetch data
export async function getPortfolioItems() {
  // const posts = await client.fetch('*[_type == "portfolio"]');
  // return posts;
  return [];
}
