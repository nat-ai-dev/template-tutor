with open('src/config/tutor.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Находим каждую услугу и добавляем icon и duration
content = content.replace(
    "id: 'lesson-45',\n    name: 'Полноценный урок (45 мин)',\n    description: 'Разбор сложных тем, подготовка к контрольным и экзаменам.',\n    price: 1500,",
    "id: 'lesson-45',\n    name: 'Полноценный урок (45 мин)',\n    description: 'Разбор сложных тем, подготовка к контрольным и экзаменам.',\n    price: 1500,\n    duration: '45 мин',\n    icon: '📚',"
)

content = content.replace(
    "id: 'consult-15',\n    name: 'Короткая консультация (15 мин)',\n    description: 'Быстрый ответ на 1-2 конкретных вопроса по домашнему заданию.',\n    price: 500,",
    "id: 'consult-15',\n    name: 'Короткая консультация (15 мин)',\n    description: 'Быстрый ответ на 1-2 конкретных вопроса по домашнему заданию.',\n    price: 500,\n    duration: '15 мин',\n    icon: '⚡',"
)

content = content.replace(
    "id: 'consult-30',\n    name: 'Расширенная консультация (30 мин)',\n    description: 'Разбор варианта ЕГЭ/ОГЭ или сложной темы.',\n    price: 800,",
    "id: 'consult-30',\n    name: 'Расширенная консультация (30 мин)',\n    description: 'Разбор варианта ЕГЭ/ОГЭ или сложной темы.',\n    price: 800,\n    duration: '30 мин',\n    icon: '🎯',"
)

with open('src/config/tutor.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Конфиг обновлён: добавлены icon и duration!')
