import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rotas America FM",
    template: "%s | Rotas America FM",
  },
  description:
    "A trilha sonora da sua estrada. Música, companhia e informação para quem vive na rota.",
  keywords: [
    "Rotas America FM",
    "rádio online",
    "Euro Truck Simulator 2",
    "música na estrada",
    "EuroAmerica Brasil",
  ],
  openGraph: {
    title: "Rotas America FM",
    description: "A trilha sonora da sua estrada.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#07111f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
