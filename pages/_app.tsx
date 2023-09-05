import "../styles/global.css";
import type { AppProps } from "next/app";
// This is a placeholder for adding Directus
// import { DataProvider } from "@plasmicapp/loader-nextjs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // This is a placeholder for adding Directus, DO NOT DELETE
    // <DataProvider
    //   name="env"
    //   data={{
    //     DIRECTUS_URL: process.env.NEXT_PUBLIC_DIRECTUS_URL,
    //   }}
    // >
    <Component {...pageProps} />
    // </DataProvider>
  );
}
