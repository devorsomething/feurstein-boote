import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bootsvermietung Feurstein | Boot mieten am Bodensee in Bregenz",
  description:
    "Erlebt den Bodensee vom Wasser aus! Tretboot, Kajak, SUP, Segelboot & Bootstaxi in Bregenz. Saison Mai – September. Jetzt Boote mieten!",
  keywords: "Bootsvermietung Bregenz, Bodensee Boot mieten, Tretboot, Kajak, SUP, Segelboot, Bootstaxi, Bregenz",
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
