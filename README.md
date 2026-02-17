# InfraDev Meetup

Сайт для серии митапов по инфраструктурной разработке — от разработчиков для разработчиков.

## Технологии

- **React 19** + **Vite** — современный фронтенд
- **React Router** — клиентская маршрутизация
- **GitHub Actions** — автоматический деплой на GitHub Pages

## Структура проекта

```
├── .github/workflows/    # CI/CD для GitHub Pages
├── public/               # Статические файлы (картинки)
│   └── img/
├── src/
│   ├── components/       # React компоненты
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/            # Страницы
│   │   ├── HomePage.jsx
│   │   ├── MeetupPage.jsx
│   │   └── CFPPage.jsx
│   ├── App.jsx           # Роутер
│   ├── index.css         # Стили
│   └── main.jsx          # Entry point
├── index.html
└── vite.config.js
```

## Локальная разработка

```bash
npm install
npm run dev
```

## Сборка для продакшена

```bash
npm run build
```

## Деплой

Деплой происходит автоматически при пуше в ветку `main` через GitHub Actions.

## Добавление нового митапа

1. Отредактируй `src/pages/MeetupPage.jsx` — добавь данные митапа в объект `meetupsData`
2. Добавь картинку митапа в `public/img/`
3. Обнови список на главной в `src/pages/HomePage.jsx`

Пример добавления митапа:

```javascript
const meetupsData = {
  5: {
    date: '15 марта 2026',
    title: 'Название митапа',
    subtitle: 'Подзаголовок',
    videoId: '123456789', // ID видео VK
    image: '/img/5.jpg',
    photoUrl: 'https://vk.com/album-...',
    description: 'Описание митапа',
    talks: [
      {
        title: 'Название доклада',
        speaker: 'Имя спикера, компания',
        description: 'Описание доклада',
      },
    ],
  },
};
```

## Лицензия

MIT
