"use client";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels?: string[];
}

const defaultLabels = ["Услуга", "Дата и время", "Контакты"];

export function StepIndicator({ currentStep, totalSteps, stepLabels = defaultLabels }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center flex-1">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                step < currentStep
                  ? "bg-blue-600 text-white"
                  : step === currentStep
                  ? "bg-blue-100 text-blue-600 border-2 border-blue-600"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              {step < currentStep ? "✓" : step}
            </div>
            <span className="text-xs mt-2 text-gray-500 font-medium">
              ШАГ {step}
            </span>
            <span className="text-sm font-bold text-gray-900 text-center mt-1">
              {stepLabels[step - 1]}
            </span>
          </div>
          {step < totalSteps && (
            <div
              className={`flex-1 h-0.5 mx-4 ${
                step < currentStep ? "bg-blue-600" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
