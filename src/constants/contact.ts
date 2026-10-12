export const WORKSHOP_PHONE = "0509201536";
export const WORKSHOP_PHONE_INTL = "+966509201536";
export const WORKSHOP_PHONE_DISPLAY = "0509201536";
export const WHATSAPP_RAW_NUMBER = "966509201536";

export const createWhatsAppLink = (message?: string) => {
  const defaultMsg = "السلام عليكم، أحتاج خدمة ورشة متنقلة لصيانة سيارتي في موقعي.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${text}`;
};

export const createTelLink = () => {
  return `tel:${WORKSHOP_PHONE_INTL}`;
};
