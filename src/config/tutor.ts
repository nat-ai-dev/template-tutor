export const tutorConfig = {
  name: "Имя Фамилия репетитора",
  subject: "Физика (9-11 класс, ЕГЭ/ОГЭ)",
  experience: "8 лет опыта",
  education: "МГУ, физический факультет",
  rating: 4.9,
  reviewsCount: 127,
  
  services: [
  {
    id: 'lesson-45',
    name: 'Полноценный урок (45 мин)',
    description: 'Разбор сложных тем, подготовка к контрольным и экзаменам.',
    price: 1500,
    duration: '45 мин',
    icon: '📚',
    availableTimes: ['14:00', '14:45', '15:30', '16:15', '17:00']
  },
  {
    id: 'consult-15',
    name: 'Короткая консультация (15 мин)',
    description: 'Быстрый ответ на 1-2 конкретных вопроса по домашнему заданию.',
    price: 500,
    duration: '15 мин',
    icon: '⚡',
    availableTimes: ['14:00', '14:15', '14:30', '14:45', '15:00', '15:15']
  },
  {
    id: 'consult-30',
    name: 'Расширенная консультация (30 мин)',
    description: 'Разбор варианта ЕГЭ/ОГЭ или сложной темы.',
    price: 800,
    duration: '30 мин',
    icon: '🎯',
    availableTimes: ['14:00', '14:30', '15:00', '15:30', '16:00']
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
