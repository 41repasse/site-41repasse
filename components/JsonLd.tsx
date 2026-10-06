"use client";
import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id={`jsonld-${Math.random().toString(36).slice(2)}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ── Pre-built schemas ──────────────────────────────────── */

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["AutoDealer", "LocalBusiness"],
  name: "41 Repasse",
  description:
    "Loja de compra e venda de veículos usados em Curitiba. Vendemos seu carro em até 41 minutos com pagamento via PIX.",
  url: "https://41repasse.com.br",
  telephone: "+5544998038744",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Ver. Toaldo Túlio, 1787",
    addressLocality: "São Braz",
    addressRegion: "PR",
    postalCode: "82320-010",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -25.384,
    longitude: -49.3384,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: ["Curitiba", "Santa Felicidade", "São Braz", "Campo Comprido", "Butiatuvinha"],
  priceRange: "$$",
  sameAs: ["https://www.instagram.com/41repasse.lidervisao/"],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vocês pagam o valor da tabela FIPE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nem sempre. A FIPE é referência de mercado, mas o valor final depende do estado real do veículo, quilometragem, histórico e demanda. Nosso compromisso é uma proposta justa e competitiva.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para receber o pagamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O pagamento é realizado via PIX em até 41 minutos após a aceitação da proposta e conclusão da documentação.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a avaliação gratuita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nossa equipe faz análise completa do seu carro: conservação, quilometragem, histórico e mercado atual. Sem custo e sem compromisso.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês compram carros com financiamento ativo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Podemos avaliar seu veículo mesmo com financiamento em aberto. Nossa equipe cuida de toda a burocracia de quitação.",
      },
    },
    {
      "@type": "Question",
      name: "Quais bairros de Curitiba vocês atendem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estamos em São Braz e atendemos toda Curitiba, com grande concentração de clientes de Santa Felicidade, Campo Comprido, Butiatuvinha e região oeste.",
      },
    },
  ],
};
