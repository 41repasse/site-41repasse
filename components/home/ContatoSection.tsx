import { waLink, WA_BASE } from "@/lib/whatsapp";

const WA = waLink("Olá! Quero agendar uma avaliação gratuita do meu carro.");

export default function ContatoSection() {
  return (
    <section
      id="contato"
      className="py-20"
      style={{ background: "linear-gradient(300deg, #06709C 0%, #194D67 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div className="text-white">
            <h2 className="font-sora font-semibold text-3xl md:text-4xl text-white mb-8">
              Visite nossa loja
            </h2>
            <ul className="flex flex-col gap-6 mb-8">
              {[
                { icon: "📍", label: "Endereço", value: "Av. Ver. Toaldo Túlio, 1787\nSão Braz, Curitiba – PR, 82320-010" },
                { icon: "📱", label: "WhatsApp / Telefone", value: "(44) 9 9803-8744", href: WA_BASE },
                { icon: "📸", label: "Instagram", value: "@41repasse.lidervisao", href: "https://www.instagram.com/41repasse.lidervisao/" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 min-w-[44px] rounded-full bg-white/15 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <strong className="font-sora font-semibold text-sm text-white block mb-1">{item.label}</strong>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors text-sm whitespace-pre-line">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white/85 text-sm whitespace-pre-line">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="font-sora font-semibold text-white text-sm mb-3">Horário de funcionamento</h4>
              <p className="text-white/82 text-sm">Segunda a sexta: 09h às 18h</p>
              <p className="text-white/82 text-sm">Sábado: 09h às 13h</p>
              <p className="text-white/82 text-sm">Domingo: Fechado</p>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 bg-white text-[#06709C] font-sora font-semibold px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Agendar avaliação gratuita
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=Av.+Ver.+Toaldo+T%C3%BAlio,+1787,+S%C3%A3o+Braz,+Curitiba&output=embed"
              title="Localização da 41 Repasse — São Braz, Curitiba"
              loading="lazy"
              allowFullScreen
              className="w-full h-full border-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
