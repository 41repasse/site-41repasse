import { waLink } from "@/lib/whatsapp";

const WA = waLink("Olá! Preciso vender meu carro. Podem me ajudar?");

export default function CtaSection() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-sora font-semibold text-3xl md:text-4xl text-[#194D67] mb-4">
          Precisa vender seu carro agora?
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
          Não perca tempo com anúncios e negociações. Fale com a 41 Repasse e receba sua proposta hoje mesmo.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06709C] text-white font-sora font-semibold text-lg px-12 py-5 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            Falar no WhatsApp agora
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 border-2 border-[#06709C] text-[#06709C] font-sora font-semibold px-12 py-5 rounded-full hover:bg-[#06709C]/5 transition-all"
          >
            Ver localização
          </a>
        </div>
      </div>
    </section>
  );
}
