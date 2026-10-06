"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const items = [
  { title: "Pagamento garantido em até 41 minutos", desc: "PIX confirmado antes de você sair da loja. Sem promessas, sem pendências." },
  { title: "Avaliação 100% gratuita", desc: "Nenhum centavo cobrado pela vistoria, mesmo que você não feche negócio." },
  { title: "Cuidamos de toda a documentação", desc: "Transferência, DETRAN, contrato — nossa equipe resolve tudo por você." },
  { title: "Compramos com financiamento ativo", desc: "Seu carro ainda está financiado? Sem problema. Cuidamos da quitação com o banco." },
  { title: "Rede de compradores qualificados", desc: "Mais de 500 compradores ativos na nossa base. Mais demanda = melhor preço." },
  { title: "Zero risco de golpes", desc: "Sem cheques, sem transferências suspeitas. Tudo rastreável e seguro." },
  { title: "+ de 10 anos de experiência em Curitiba", desc: "Conhecemos o mercado local como ninguém. Proposta justa baseada em dados reais." },
];

export default function DiferenciaisSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div ref={ref}>
            <span className="eyebrow text-[#06709C] font-sora mb-3">Nossos diferenciais</span>
            <h2 className="font-sora font-semibold text-3xl md:text-4xl text-[#194D67] mb-10">
              O que nos torna diferentes
            </h2>
            <ul className="flex flex-col gap-4">
              {items.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#06709C]/5 transition-colors"
                >
                  <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#06709C] flex items-center justify-center mt-0.5">
                    <Check size={14} color="white" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-sora font-semibold text-[#194D67] text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-2xl hidden lg:block"
            style={{ background: "linear-gradient(300deg, #06709C 0%, #194D67 100%)" }}
          >
            <div className="aspect-[4/3] flex flex-col items-center justify-center text-white/60 gap-4 p-10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3M9 21H21a2 2 0 002-2v-8a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="text-center font-sora text-lg">Loja 41 Repasse<br />São Braz, Curitiba</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
