export const tutorConfig = {
  name: "Павел Омельянович",
  subject: "Физика (9-11 класс, ЕГЭ/ОГЭ)",
  experience: "8 лет опыта",
  education: "МГУ, физический факультет",
  rating: 4.9,
  reviewsCount: 127,
  
  services: [
    {
      id: "trial",
      name: "Пробная консультация",
      description: "Знакомство, определение уровня, план подготовки",
      price: 0,
      duration: 20,
      icon: ""
    },
    {
      id: "single",
      name: "Разовое занятие",
      description: "Индивидуальный урок по выбранной теме",
      price: 2000,
      duration: 60,
      icon: "📚"
    },
    {
      id: "package",
      name: "Пакет 8 занятий",
      description: "Подготовка к ЕГЭ/ОГЭ, экономия 15%",
      price: 14000,
      duration: 480,
      icon: "💎"
    }
  ],
  
  formats: ["Zoom", "Skype", "Google Meet"],
  
  theme: {
    primary: "#2563EB",
    primaryLight: "#DBEAFE",
    secondary: "#10B981",
    background: "#F9FAFB",
    card: "#FFFFFF"
  },
  
  telegram: {
    chatId: "",
    botToken: ""
  },
  
  calendar: {
    calendarId: "primary"
  }
};

export type Service = typeof tutorConfig.services[0];
export type TutorConfig = typeof tutorConfig;
