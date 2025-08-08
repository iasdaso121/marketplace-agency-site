# WB/OZON Agency — Next.js 14 + Tailwind + Framer Motion

Полноценный адаптивный сайт агентства ведения кабинетов на Wildberries и Ozon.
Стек: Next.js 14, TypeScript, TailwindCSS, Framer Motion, lucide-react.

## Быстрый старт
```bash
pnpm i   # или npm i / yarn
pnpm dev # http://localhost:3000
```

При установке автоматически скачаются реальные фото сотрудников в `public/team` (postinstall-скрипт).
Если загрузка не удалась, скачайте вручную:
- /team/anna.jpg — https://randomuser.me/api/portraits/women/44.jpg
- /team/alex.jpg — https://randomuser.me/api/portraits/men/31.jpg
- /team/irina.jpg — https://randomuser.me/api/portraits/women/65.jpg

## Страницы
- `/` — Главная (герой, преимущества, направления, команда, форма)
- `/services` — Услуги (группы + подпункты)
- `/contacts` — Контакты (форма, контакты, карта Google, команда)

## Данные
Редактируйте массивы `services`, `perks`, `team` в `lib/data.ts`.

## Дизайн
- Liquid glass / glassmorphism: прозрачные панели, blur, glow
- Неоновые акценты фиолетовый/розовый/голубой
- Анимированный градиентный фон с параллаксом (mousemove + scroll)
- Анимации появления и hover-свечения (Framer Motion)

## Билд/деплой
```bash
pnpm build
pnpm start
```
Разворачивается на любой платформе, поддерживающей Next.js (Vercel и т.д.).
