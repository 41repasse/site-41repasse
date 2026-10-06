"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Vocês pagam o valor da tabela FIPE?",
    a: "Nem sempre. A FIPE é uma referência de mercado, mas o valor final depende do estado real do veículo, quilometragem, histórico e demanda atual. Nosso compromisso é uma proposta justa e competitiva, frequentemente acima dos marketplaces tradicionais.",
  },
  {
    q: "Quanto tempo leva para receber o pagamento?",
    a: "O pagamento é realizado via PIX em até 41 minutos após a aceitação da proposta e conclusão da documentação. Tudo é feito no mesmo atendimento, sem necessidade de retornar à loja.",
  },
  {
    q: "Como funciona a avaliação gratuita?",
    a: "Nossa equipe faz uma análise completa do seu carro: conservação visual, quilometragem, histórico de sinistros, documentação e mercado atual. Tudo isso sem custo algum e sem compromisso de vender.",
  },
  {
    q: "Vocês compram carros com financiamento ativo?",
    a: "Sim! Podemos avaliar e comprar seu veículo mesmo com financiamento em aberto. Nossa equipe cuida de toda a burocracia de quitação com o banco, você recebe o valor líquido via PIX.",
  },
  {
    q: "Quais bairros de Curitiba vocês atendem?",
    a: "Estamos localizados em São Braz e atendemos toda Curitiba e região metropolitana. Grande concentração de clientes de Santa Felicidade, Campo Comprido, Butiatuvinha, Cascatinha e região oeste.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20"
      style={{ background: "linear-gradient(300deg, #06709C 0%, #194D67 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <span className="eyebrow text-white text-center block mb-3 font-sora">Dúvidas frequentes</span>
        <h2 className="font-sora font-semibold text-3xl md:text-4xl text-white text-center mb-12">
          Perguntas frequentes
        </h2>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#63B6D8]">
              <button
                className="w-full text-left flex justify-between items-center gap-4 py-6 font-sora text-white text-base hover:text-[#63B6D8] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-white/50 flex items-center justify-center text-white/80 text-lg leading-none"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-white/85 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
