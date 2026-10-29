import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const token = process.env.TELEGRAM_BOT_TOKEN || '';
    const chatId = process.env.TELEGRAM_CHAT_ID || '';
    
    const message = `🔥 *Новая запись!*\n\n👤 *Ученик:* ${data.name}\n *Услуга:* ${data.service}\n📅 *Дата:* ${data.date}\n⏰ *Время:* ${data.time}\n📱 *Телефон:* ${data.phone}\n🎓🎓 *Класс:* ${data.grade}\n📞 *Связь:* ${data.contactMethod || 'Не указано'}\n\n💬 *Комментарий:* ${data.comment || 'Нет'}`;
    
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
