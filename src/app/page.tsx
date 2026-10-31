import { tutorConfig } from "@/config/tutor";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Онлайн-запись к репетитору
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {tutorConfig.name} · Ваш предмет
        </p>
        
        <div className="mb-8">
          <img 
            src="/hero-image.png" 
            alt="Образование" 
            className="max-w-md mx-auto"
          />
        </div>

        <a
          href="/booking"
          className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Записаться на занятие →
        </a>
      </div>
    </div>
  );
}
