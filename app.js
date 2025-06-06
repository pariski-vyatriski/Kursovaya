const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// Настройка статических файлов (теперь смотрит в корень проекта)
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Курсовая работа</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          line-height: 1.6;
        }
        h1 {
          color: #2c3e50;
        }
        .description {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
        }
        .gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 30px;
        }
        .gallery img {
          max-width: 300px;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
	.action-button {
          margin-top: 20px;
          padding: 12px 24px;
          background-color: #ff6b6b;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .action-button.clicked {
          background-color: #51cf66;
        }
      </style>
    </head>
    <body>
      <h1>Hello World!</h1>
      
      <div class="description">
        <h2>Описание курсовой работы</h2>
        <p>Тема: Pазработка автоматизированной системы интеграции и развертывания веб-приложений на основе ключевых DevOps-практик </p>
      </div>
      
      <div class="gallery">
        <img src="/GitHub.png" alt="Пример 1">
        <img src="/Docker.png" alt="Пример 2">
        <img src="/JS.png" alt="Пример 3">
      </div>
      <button class="action-button" onclick="this.textContent='Молодец!'; this.classList.add('clicked')">
        Прочитал? Если да то нажми на кнопку)
      </button>

    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
