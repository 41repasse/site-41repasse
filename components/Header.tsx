"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { waLinkForPath } from "@/lib/whatsapp";

const navLinks = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#numeros", label: "Números" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const WA_LINK = waLinkForPath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0C3144] shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3" aria-label="41 Repasse — Voltar ao topo">
          <Logo size={44} />
          <span className="font-sora font-semibold text-lg text-white hidden sm:block">
            41 Repasse
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navegação principal">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sora text-sm text-white/85 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-white text-[#06709C] font-sora font-semibold text-sm px-6 py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Avaliar meu carro
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white z-50"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0C3144] flex flex-col items-center justify-center gap-8 z-40">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-sora text-2xl text-white hover:text-[#63B6D8] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-white text-[#06709C] font-sora font-semibold text-lg px-8 py-3 rounded-full"
          >
            Avaliar meu carro
          </a>
        </div>
      )}
    </header>
  );
}
