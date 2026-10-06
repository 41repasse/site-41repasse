"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    icon: "🏆",
    title: "A melhor oferta do Brasil",
    desc: "Conectamos seu veículo a uma rede de milhares de compradores ativos. Mais competição = melhor preço para você.",
  },
  {
    icon: "⚡",
    title: "Venda rápida e fácil",
    desc: "Esqueça semanas anunciando e negociando com desconhecidos. Com a gente, tudo acontece em um único atendimento.",
  },
  {
    icon: "🔒",
    title: "Segurança em primeiro lugar",
    desc: "Pagamento via PIX verificado, documentação cuidada pela nossa equipe e zero risco de cheques ou golpes.",
  },
];

function Card({ icon, title, desc, delay }: { icon: string; title: string; desc: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="rounded-[10px] p-10 text-white flex flex-col gap-4 hover:-translate-y-1.5 hover:shadow-2xl transition-all"
      style={{ background: "linear-gradient(132deg, #06709C 0%, rgba(25,77,103,0.98) 100%)" }}
    >
      <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center text-2xl">{icon}</div>
      <h3 className="font-sora font-semibold text-xl text-white">{title}</h3>
      <p className="text-white/85 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function WhySection() {
  return (
    <section id="por-que" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-sora font-semibold text-3xl md:text-4xl text-[#194D67] text-center mb-12">
          Por que vender meu carro com a 41 Repasse?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {cards.map((c, i) => (
            <Card key={c.title} {...c} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
