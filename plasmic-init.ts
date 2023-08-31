import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

if (!process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID) {
  throw new Error("Error: missing NEXT_PUBLIC_PLASMIC_PROJECT_ID in env.");
}

if (!process.env.NEXT_PUBLIC_PLASMIC_TOKEN) {
  throw new Error("Error: missing NEXT_PUBLIC_PLASMIC_TOKEN in env.");
}

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID,
      token: process.env.NEXT_PUBLIC_PLASMIC_TOKEN,
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: process.env.NODE_ENV === "development",
});