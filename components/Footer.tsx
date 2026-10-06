import Logo from "./Logo";
import { WA_BASE } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#0C3144] text-white/75 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#inicio" className="flex items-center gap-3 mb-4" aria-label="41 Repasse — Voltar ao topo">
              <Logo size={40} />
              <span className="font-sora font-semibold text-lg text-white">41 Repasse</span>
            </a>
            <p className="text-sm leading-relaxed">
              Loja de repasse de veículos em São Braz, Curitiba. Vendemos seu carro em até 41 minutos com pagamento via PIX.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/41repasse.lidervisao/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram 41 Repasse"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#06709C] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
                  </svg>
              </a>
              <a
                href={WA_BASE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp 41 Repasse"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2DB742] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-7 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} 41 Repasse. Todos os direitos reservados.</p>
          <p>Av. Ver. Toaldo Túlio, 1787 — São Braz, Curitiba – PR, 82320-010</p>
        </div>
      </div>
    </footer>
  );
}
