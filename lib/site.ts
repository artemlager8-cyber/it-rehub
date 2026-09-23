export const site = {
  url: "https://it-rehub.tech",
  name: "IT Rehub",
  phone: "+77080685141",
  phoneDisplay: "+7 708 068 51 41",
  email: "contact@it-rehub.tech",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
