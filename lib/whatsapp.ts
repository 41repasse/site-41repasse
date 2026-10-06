export const WA_PHONE = "5544998038744";
export const WA_BASE = `https://wa.me/${WA_PHONE}`;

/** Monta link direto sem mensagem */
export const WA_LINK_BASE = WA_BASE;

/** Monta link com mensagem pré-preenchida */
export function waLink(msg: string): string {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
}

const HOME_MSG = "Olá! Vi o site da 41 Repasse e quero vender meu carro.";

/** Retorna o link completo do WhatsApp com a mensagem padrão do site */
export function waLinkForPath(_pathname?: string | null): string {
  return waLink(HOME_MSG);
}
