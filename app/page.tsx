import type { Metadata } from "next";
import JsonLd, { localBusinessSchema, faqSchema } from "@/components/JsonLd";
import Hero from "@/components/home/Hero";
import WhySection from "@/components/home/WhySection";
import HowSection from "@/components/home/HowSection";
import DiferenciaisSection from "@/components/home/DiferenciaisSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NumerosSection from "@/components/home/NumerosSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import ContatoSection from "@/components/home/ContatoSection";

export const metadata: Metadata = {
  title: "41 Repasse | Venda seu carro em até 41 minutos — São Braz, Curitiba",
  description:
    "Venda seu carro com segurança em até 41 minutos em Curitiba. Avaliação gratuita, pagamento via PIX, sem burocracia. Loja de repasse em São Braz, Curitiba.",
  alternates: { canonical: "https://41repasse.com.br/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <Hero />
      <WhySection />
      <HowSection />
      <DiferenciaisSection />
      <TestimonialsSection />
      <NumerosSection />
      <FaqSection />
      <CtaSection />
      <ContatoSection />
    </>
  );
}
