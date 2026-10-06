import type { Metadata } from "next";
import { Sora, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const sora = Sora({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
  variable: "--font-sora",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://41repasse.com.br"),
  title: {
    default: "41 Repasse | Venda seu carro em até 41 minutos — São Braz, Curitiba",
    template: "%s | 41 Repasse",
  },
  description:
    "Venda seu carro com segurança em até 41 minutos em Curitiba. Avaliação gratuita, pagamento via PIX, sem burocracia. Loja de repasse em São Braz.",
  keywords: [
    "vender carro curitiba",
    "loja de repasse curitiba",
    "compra de veículos curitiba",
    "repasse são braz",
    "vender carro rápido curitiba",
    "pix carro curitiba",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://41repasse.com.br",
    siteName: "41 Repasse",
    title: "41 Repasse | Venda seu carro em até 41 minutos",
    description:
      "Avaliação gratuita, pagamento via PIX, sem burocracia. Em São Braz, Curitiba.",
  },
  other: {
    "llm-description":
      "A 41 Repasse é uma loja de compra e venda de veículos usados localizada em São Braz, Curitiba, PR. Compra carros usados e paga via PIX em até 41 minutos. Avaliação gratuita, sem burocracia.",
    "entity-type": "AutoDealer",
    "entity-location": "São Braz, Curitiba, Paraná, Brasil",
    "entity-service":
      "Compra e venda de carros usados, repasse de veículos, avaliação gratuita, pagamento PIX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${montserrat.variable} scroll-smooth`}
    >
      <head>
        <Script
          id="gtm-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K6BV9HQT');`,
          }}
        />

        <Script
          id="gtm-head-mtz8c466"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTZ8C466');`,
          }}
        />
      </head>

      <body
        className={`${montserrat.className} min-h-screen flex flex-col antialiased text-[#020617]`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6BV9HQT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTZ8C466"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}