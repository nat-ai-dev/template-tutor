"use client";

import { useState } from "react";
import { StepIndicator } from "@/components/booking/StepIndicator";
import { tutorConfig } from "@/config/tutor";

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", grade: "10", comment: "" });
  const [isSuccess, setIsSuccess] = useState(false);

const handleNext = async () => {
  if (currentStep < 3) {
    setCurrentStep(currentStep + 1);
  } else {
    try {
      const serviceName = tutorConfig.services.find(s => s.id === selectedService)?.name || '';
      await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          service: serviceName,
          date: selectedDate,
          time: selectedTime,
          phone: formData.phone,
          grade: formData.grade,
          comment: formData.comment,
        }),
      });
    } catch (error) {
      console.error('Ошибка отправки в Telegram:', error);
    }
    setIsSuccess(true);
  }
};

  const handleBack = () => {
    if (isSuccess) {
      setIsSuccess(false);
      setCurrentStep(1);
      setSelectedService(null);
      setSelectedDate(null);
      setSelectedTime(null);
      setFormData({ name: "", phone: "", grade: "10", comment: "" });
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const dates = [
    "29 октября (Вт)", "30 октября (Ср)", "31 октября (Чт)",
    "1 ноября (Пт)", "2 ноября (Сб)", "3 ноября (Вс)", "4 ноября (Пн)"
  ];

  const timeSlots = ["10:00", "11:30", "14:00", "15:30", "17:00", "18:30", "20:00"];

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Вы успешно записаны!</h2>
          <p className="text-gray-600 mb-6">Павел свяжется с вами в WhatsApp для подтверждения.</p>
          <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-gray-700">Услуга: <span className="font-semibold text-gray-900">{tutorConfig.services.find(s => s.id === selectedService)?.name}</span></p>
            <p className="text-sm text-gray-700">Дата: <span className="font-semibold text-gray-900">{selectedDate} в {selectedTime}</span></p>
            <p className="text-sm text-gray-700">Ученик: <span className="font-semibold text-gray-900">{formData.name}</span></p>
          </div>
          <button onClick={handleBack} className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium">
            Записать ещё одного ученика
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Онлайн-запись</h1>
          <p className="text-gray-600">{tutorConfig.name} · {tutorConfig.subject}</p>
        </div>

        <StepIndicator currentStep={currentStep} totalSteps={3} stepLabels={["Услуга", "Дата и время", "Контакты"]} />

        <div className="bg-white rounded-xl shadow-lg p-8">
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Выберите услугу</h2>
              <p className="text-gray-600 mb-6">Цена и длительность указаны для базового варианта</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tutorConfig.services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                      selectedService === service.id ? "border-blue-600 bg-blue-50" : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-blue-600">
                            {service.price === 0 ? "Бесплатно" : service.price + " ₽"}
                          </span>
                          <span className="text-gray-600 font-medium">{service.duration} мин</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Выберите дату и время</h2>
              <p className="text-gray-600 mb-6">Доступные слоты на ближайшую неделю</p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Дата:</h3>
                <div className="flex gap-3 flex-wrap">
                  {dates.map((date) => (
                    <button
                      key={date}
                      onClick={() => { setSelectedDate(date); setSelectedTime(null); }}
                      className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                        selectedDate === date 
                          ? "border-blue-600 bg-blue-600 text-white" 
                          : "border-gray-300 text-gray-900 hover:border-blue-400 hover:bg-blue-50"
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Время:</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 rounded-lg border-2 font-medium transition-all ${
                          selectedTime === time 
                            ? "border-blue-600 bg-blue-600 text-white" 
                            : "border-gray-300 text-gray-900 hover:border-blue-400 hover:bg-blue-50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ваши данные</h2>
              <p className="text-gray-600 mb-6">Заполните форму, чтобы Павел мог подготовиться к занятию</p>
              
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Имя ученика *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 placeholder-gray-400"
                    placeholder="Иван Петров"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Телефон (WhatsApp) *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 placeholder-gray-400"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Класс</label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-gray-900"
                  >
                    <option value="9">9 класс</option>
                    <option value="10">10 класс</option>
                    <option value="11">11 класс</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Комментарий (необязательно)</label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 placeholder-gray-400"
                    rows={3}
                    placeholder="Слабая тригонометрия, нужно подтянуть оценки..."
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={handleBack}
              disabled={currentStep === 1 && !isSuccess}
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 font-medium"
            >
              Назад
            </button>
            <button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !selectedService) ||
                (currentStep === 2 && (!selectedDate || !selectedTime)) ||
                (currentStep === 3 && (!formData.name || !formData.phone))
              }
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {currentStep === 3 ? "Подтвердить запись" : "Далее"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}