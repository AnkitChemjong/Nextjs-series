import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipe App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.png" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      <body className={inter.className}>
        <Suspense fallback={<Loading/>}>

        {children}
        </Suspense>
        </body>
    </html>
  );
}
