// src/services/telegramService.js

/**
 * Отправляет сообщение в Telegram через бота
 * @param {string} phone - Номер телефона клиента
 * @returns {Promise<object>} - Результат отправки сообщения
 */
export const sendCallbackRequest = async (phone) => {
  try {
    // Настройки бота и чата
    const botToken = '7711196040:AAF3aNxpZEY_B2BOOFj4DT1qWqEqelI77xc';
    
    // Используем ID группы "Ddd"
    const chatId = '-4779788458';
    
    // Форматируем сообщение
    const text = `🔔 Новый заказ звонка!\n📱 Телефон: ${phone}\n📅 Дата: ${new Date().toLocaleString('ru-RU')}`;
    
    // Используем CORS-прокси для обхода ограничений
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const telegramApiUrl = `${corsProxy}https://api.telegram.org/bot${botToken}/sendMessage`;
    
    console.log('Отправка запроса в Telegram через CORS-прокси...');
    console.log('Используем ID группы Ddd:', chatId);
    
    // Отправляем запрос к API Telegram через прокси
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': window.location.origin
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    const result = await response.json();
    console.log('Ответ от API Telegram:', result);
    
    if (!result.ok) {
      console.error('Ошибка в ответе API Telegram:', result);
      throw new Error(result.description || 'Ошибка отправки сообщения в Telegram');
    }
    
    return result;
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
    throw error;
  }
};

/**
 * Отправляет данные формы консультации в Telegram
 * 
 * @param {Object} formData - Данные формы
 * @param {string} formData.name - Имя клиента
 * @param {string} formData.phone - Телефон клиента
 * @param {string} formData.area - Площадь помещения
 * @param {string} formType - Тип формы (для включения в сообщение)
 * @returns {Promise<object>} - Результат отправки сообщения
 */
export const sendConsultationRequest = async (formData, formType = "Консультация") => {
  try {
    // Настройки бота и чата
    const botToken = '7711196040:AAF3aNxpZEY_B2BOOFj4DT1qWqEqelI77xc';
    
    // Используем ID группы "Ddd"
    const chatId = '-4779788458';
    
    // Форматируем сообщение
    const text = `🔔 Новый запрос: ${formType}!\n👤 Имя: ${formData.name}\n📱 Телефон: ${formData.phone}\n📐 Площадь: ${formData.area}\n📅 Дата: ${new Date().toLocaleString('ru-RU')}`;
    
    // Используем CORS-прокси для обхода ограничений
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const telegramApiUrl = `${corsProxy}https://api.telegram.org/bot${botToken}/sendMessage`;
    
    console.log(`Отправка запроса "${formType}" в Telegram через CORS-прокси...`);
    
    // Отправляем запрос к API Telegram через прокси
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': window.location.origin
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    const result = await response.json();
    console.log('Ответ от API Telegram:', result);
    
    if (!result.ok) {
      console.error('Ошибка в ответе API Telegram:', result);
      throw new Error(result.description || 'Ошибка отправки сообщения в Telegram');
    }
    
    return result;
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
    throw error;
  }
};