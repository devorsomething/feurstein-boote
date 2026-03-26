import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bootsvermietung Feurstein | Boot mieten am Bodensee in Bregenz",
  description:
    "Erlebt den Bodensee vom Wasser aus! Tretboot, Kajak, SUP, Segelboot & Bootstaxi in Bregenz. Saison Mai – September. Jetzt Boote mieten!",
  keywords: "Bootsvermietung Bregenz, Bodensee Boot mieten, Tretboot, Kajak, SUP, Segelboot, Bootstaxi, Bregenz",
  openGraph: {
    title: "Bootsvermietung Feurstein Bregenz",
    description: "Bootsvermietung am Bodensee — Tretboot, Kajak, Segelboot & mehr",
    images: [
      {
        url: '/og?name=Bootsvermietung%20Feurstein&tagline=Der%20Bodensee%20wartet%20auf%20euch&color=%230077BE',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bootsvermietung Feurstein Bregenz",
    description: "Bootsvermietung am Bodensee — Tretboot, Kajak, Segelboot & mehr",
    images: ['/og'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
