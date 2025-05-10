// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/send-telegram', async (req, res) => {
  try {
    const { phone } = req.body;
    
    const botToken = '7711196040:AAF3aNxpZEY_B2BOOFj4DT1qWqEqelI77xc';
    const chatId = '-4693607504';
    const text = `🔔 Новый заказ звонка!\n📱 Телефон: ${phone}\n📅 Дата: ${new Date().toLocaleString('ru-RU')}`;
    
    const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});