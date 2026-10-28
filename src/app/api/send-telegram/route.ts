import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const token = '9253866978:AAELiXS7VrKzbckKj_L7hrkfAuJra6BFMkU';
    const chatId = '5121381529';
    
    const message = `🔥 *Новая запись!*\n\n👤 *Ученик:* ${data.name}\n *Услуга:* ${data.service}\n📅 *Дата:* ${data.date}\n⏰ *Время:* ${data.time}\n📱 *Телефон:* ${data.phone}\n🎓 *Класс:* ${data.grade}\n\n💬 *Комментарий:* ${data.comment || 'Нет'}`;
    
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
