"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Avaliação gratuita",
    desc: "Nossa equipe especializada inspeciona seu veículo gratuitamente: conservação, quilometragem, histórico e condição mecânica. Sem custo e sem compromisso.",
    img: "/images/how-01-avaliacao.webp",
    imgAlt: "Avaliação gratuita do veículo na 41 Repasse",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    bg: "from-[#06709C]/20 to-[#194D67]/30",
    accent: "#06709C",
  },
  {
    num: "02",
    title: "Anúncio para milhares de compradores",
    desc: "Divulgamos seu carro para nossa rede qualificada de compradores ativos. Mais demanda = melhor proposta. Você não precisa fazer nada.",
    img: "/images/how-02-anuncio.webp",
    imgAlt: "Anúncio do seu carro para compradores em Curitiba",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
    bg: "from-[#194D67]/20 to-[#06709C]/20",
    accent: "#194D67",
  },
  {
    num: "03",
    title: "Dinheiro antes do minuto 42",
    desc: "Proposta aceita, documentação assinada e PIX na sua conta — tudo isso dentro de um único atendimento. Sem espera, sem estresse.",
    img: "/images/how-03-pagamento.webp",
    imgAlt: "Pagamento via PIX em até 41 minutos",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    ),
    bg: "from-[#06709C]/15 to-[#0F3A50]/25",
    accent: "#0C3144",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white flex flex-col md:flex-row min-h-[260px]">
      {/* Image / visual side */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className={`relative md:w-[42%] min-h-[260px] bg-gradient-to-br ${step.bg} flex items-center justify-center overflow-hidden shrink-0`}
      >
        {/* Photo — ocupa todo o espaço quando presente */}
        <img
          src={step.img}
          alt={step.imgAlt}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />

        {/* Overlay escuro sobre a foto */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Decorative circles (visíveis só sem foto) */}
        <div
          className="absolute -top-10 -left-10 w-48 h-48 rounded-full opacity-20"
          style={{ background: step.accent }}
        />
        <div
          className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full opacity-15"
          style={{ background: step.accent }}
        />

        {/* Step number — large background text */}
        <span
          className="absolute bottom-4 right-6 font-sora font-extrabold text-[7rem] leading-none select-none pointer-events-none text-white/20"
        >
          {step.num}
        </span>

        {/* Icon circle */}
        <div
          className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
          style={{ background: step.accent, color: "#fff" }}
        >
          {step.icon}
        </div>
      </motion.div>

      {/* Content side */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
        className="flex flex-col justify-center px-8 py-8 md:py-10 gap-4"
      >
        {/* Step badge */}
        <span
          className="inline-flex items-center gap-2 text-xs font-sora font-semibold uppercase tracking-widest w-fit px-3 py-1 rounded-full"
          style={{ background: `${step.accent}15`, color: step.accent }}
        >
          Passo {step.num}
        </span>

        <h3 className="font-sora font-semibold text-xl md:text-2xl text-[#020617] leading-snug">
          {step.title}
        </h3>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          {step.desc}
        </p>

        <a
          href="#como-funciona"
          className="inline-flex items-center gap-2 text-sm font-sora font-semibold mt-1 w-fit group"
          style={{ color: step.accent }}
        >
          Saiba mais sobre isso
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}

export default function HowSection() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-[860px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="eyebrow text-[#06709C] mb-4 font-sora">Processo simples</span>
          <h2 className="font-sora font-semibold text-3xl md:text-4xl text-[#020617] mt-3">
            Como funciona o processo de<br className="hidden md:block" /> venda do seu veículo?
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
