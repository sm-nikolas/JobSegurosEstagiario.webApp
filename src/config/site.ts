/**
 * Configurações centralizadas do site.
 * Para futuros sites, copie este arquivo e ajuste logo/mensagem.
 * O número abaixo será usado pela IA de atendimento no WhatsApp.
 */
export const siteConfig = {
  logoIcon: '/logo-separada-jobseguros.png',

  whatsapp: {
    /** Número completo com DDI + DDD (19 99315-7475) */
    number: import.meta.env.VITE_WHATSAPP_NUMBER ?? '5519993157475',
    display: '(19) 99315-7475',
    /** Mensagem inicial — útil para identificar origem e treinar a IA */
    defaultMessage:
      import.meta.env.VITE_WHATSAPP_MESSAGE ??
      'Olá! Vim pelo site de Seguro para Estagiários e gostaria de mais informações.',
  },
} as const;

export function getWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}
