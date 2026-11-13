import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// import WhatsAppButton from '@/components/atoms/WhatsAppButton'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
{/* <WhatsAppButton /> */}
export const metadata = {
  title: "Labo Tech | Solutions digitales pour indépendants et PME à Dakar",
  description: "Labo Tech conçoit des applications web et mobiles, des solutions SaaS et des automatisations pour les indépendants et petites entreprises au Sénégal. Produits : DevisFacture et MiniShop.",
  keywords: "labotech, devisfacture, minshop, développement web, SaaS, Sénégal, indépendants, PME",
  openGraph: {
    title: "Labo Tech | Solutions digitales pour indépendants et PME à Dakar",
    description: "Labo Tech conçoit des applications web et mobiles, des solutions SaaS et des automatisations pour les indépendants et petites entreprises au Sénégal. Produits : DevisFacture et MiniShop.",
    type: "website"
  }
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
