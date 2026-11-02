# Spiritdex — духи Fortnite из сезона, стартовавшего 1 октября 2026

Одностраничный сайт-чек-лист: отмечаешь духов Fortnite, которых нашёл и вынес,
и отдельно — финиши, которые у тебя есть. Прогресс хранится в `localStorage`
браузера, ничего никуда не отправляется.

## Что внутри

Обновление **v42.30** от **1 октября 2026** (Chapter 7 Season 4 «Override»,
Fortnitemares) добавило четырёх духов, вторая волна **v42.40** (15 октября) — ещё одного:

| Дух | Редкость | Способность | Где искать |
|---|---|---|---|
| Spooky Dash | Мифический | заряды рывка, проход сквозь объекты | Nightmare Neighborhood, Wonkeeland, Cluster Coast |
| Vampire | Эпический | лечение за нанесённый урон | Golden Grove, Chopped Shop, Sunken Shores, аниматроники FNAF |
| The Deer | Легендарный | усиление ближнего боя (коллаб 99 Nights in the Forest) | тыквенные сундуки, эпические Cheat Codes |
| Dumpster Dive | Эпический | больше лечения от найденной еды в укрытиях | Vaults (Stone Sanctum), Мега-лабиринт, редкие сундуки |
| Honey | Эпический | пчёлы атакуют того, кто тебя ранил | сундуки по острову, Cheat Codes |

Финиши: Normal, Gold, Cheatmaster, Loot Hacker, Bounty Hunter, Trick-or-Treat,
у Spooky Dash дополнительно Quack — всего 31 позиция.

## Как открыть

Просто открой `index.html` двойным щелчком — сайт статический, без сборки и сервера.
Если хочется через локальный сервер: `python -m http.server 8000` в этой папке,
затем `http://localhost:8000`.

## Файлы

- `index.html` — разметка страницы;
- `styles.css` — оформление (тёмная тема, свечения по редкости, адаптив);
- `app.js` — данные духов, SVG-арт, чек-лист, сохранение в `localStorage`.

## Возможности

- отметка «дух найден» кликом по карточке или кнопке;
- отдельные финиши внутри карточки (отметка финиша автоматически отмечает духа);
- общий прогресс: кольцо, полоса, счётчик финишей, разбивка по редкости;
- фильтры «Все / Найденные / Не найденные»;
- конфетти и уведомления на 5/5;
- сброс прогресса;
- адаптив под телефон, планшет и десктоп;
- уважение `prefers-reduced-motion`.

## Данные

Сайт фанатский, не связан с Epic Games. Наборы финишей и хотспоты собраны из
открытых источников (данные на 2 ноября 2026):

- [FN Sprite Tracker — Fortnitemares 2026](https://fnsprites.app/fortnitemares-sprites)
- [FN Sprite Tracker — все духи и механика](https://fnsprites.app/sprites)
- [ESTNN — даты v42.30 и конца сезона](https://estnn.com/fortnite-chapter-7-season-4-end-date-mini-season-chapter-8/)
- [Yahoo Tech — способности духов](https://tech.yahoo.com/gaming/articles/fortnite-fortnitemares-sprites-abilities-them-095916743.html)
- [Fortnite Sprite Tracker — чек-лист](https://fortnitespritetracker.org/checklist-sprites-fortnite/)

Epic не публикует точные проценты дропа, поэтому в интерфейсе их нет.
