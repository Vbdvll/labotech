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
  title: "Labo Tech | Agence digitale & développement web",
  description: "Création de sites web, applications mobiles, SaaS et solutions digitales au Sénégal.",
  keywords: "agence web Dakar, développement web, SaaS, applications mobiles, Labo Tech",
  openGraph: {
    title: "Labo Tech",
    description: "Solutions digitales modernes",
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
