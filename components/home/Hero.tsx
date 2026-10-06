"use client";

import { motion } from "framer-motion";
import Logo from "@/components/Logo";

import { waLink } from "@/lib/whatsapp";

const WA = waLink("Olá! Vi o site da 41 Repasse e quero vender meu carro.");

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-20 bg-gradient-hero"
      style={{ background: "linear-gradient(300deg, #06709C 0%, #0F3A50 70%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <Logo size={94} />
            </div>
            <span className="eyebrow text-white mb-4 font-sora">
              A forma mais ágil de fazer negócio
            </span>
            <h1 className="font-sora font-semibold text-4xl sm:text-5xl xl:text-[56px] leading-tight text-white mb-6">
              Seu carro vendido antes do minuto&nbsp;42
            </h1>
            <p className="text-white/85 text-lg leading-relaxed mb-10 font-light">
              Avaliação 100% gratuita,{" "}
              <strong className="font-semibold text-white">proposta na hora</strong>{" "}
              e pagamento via PIX em até 41 minutos. Sem anúncios, sem negociação,
              sem burocracia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#06709C] font-sora font-semibold px-10 py-4 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <span>▶</span> Quero vender agora
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-sora font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all"
              >
                Como funciona
              </a>
            </div>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden border-4 border-black/40 shadow-2xl aspect-video bg-black"
          >
            <iframe
              src="https://www.youtube.com/embed/wzu7ILrdkC0?rel=0&modestbranding=1"
              title="Conheça a 41 Repasse — venda seu carro em até 41 minutos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
