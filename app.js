/* ============================================================
   Spiritdex — Fortnitemares 2026 (v42.30, 1 октября 2026)
   Данные: FN Sprite Tracker / ESTNN / Yahoo Tech (см. index.html)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- финиши ---------- */
  var PERKS = {
    normal: 'Базовая способность духа — без дополнительных бонусов.',
    gold: 'Бонусный опыт за устранения — быстрее качается.',
    cheatmaster: 'Премиальный финиш сезона: открывается кодом Hack the Lobby. Косметика.',
    loot: '+20% к шансу предметов Loot Hack из сундуков.',
    bounty: 'Шанс найти духа при устранении врага. Опыт капает только за бои.',
    trick: 'Хэллоуинский перекрас (с 8 октября). Косметика.',
    quack: 'Делится 50% своего опыта с остальными духами в матче.'
  };

  var BASE_FINISHES = [
    { id: 'normal', label: 'Normal', perk: PERKS.normal },
    { id: 'gold', label: 'Gold', perk: PERKS.gold },
    { id: 'cheatmaster', label: 'Cheatmaster', perk: PERKS.cheatmaster },
    { id: 'loothacker', label: 'Loot Hacker', perk: PERKS.loot },
    { id: 'bountyhunter', label: 'Bounty Hunter', perk: PERKS.bounty },
    { id: 'trickortreat', label: 'Trick-or-Treat', perk: PERKS.trick }
  ];
  var QUACK = { id: 'quack', label: 'Quack', perk: PERKS.quack };

  /* ---------- арт духов (inline SVG) ---------- */
  var BODY = 'M60 15c17.5 10.5 28 25.5 28 42.5C88 76 75.5 90 60 90S32 76 32 57.5C32 40.5 42.5 25.5 60 15Z';

  function eyes(cx1, cx2, cy, rx, ry, fill) {
    fill = fill || '#0b0715';
    return '<ellipse cx="' + cx1 + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + fill + '"/>' +
           '<ellipse cx="' + cx2 + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + fill + '"/>';
  }

  var ART = {
    /* Тыквенный дух с рывком */
    spooky: '' +
      '<defs>' +
      '<linearGradient id="sp-body" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#ffca6b"/><stop offset="0.55" stop-color="#ff8a3d"/><stop offset="1" stop-color="#e2502a"/></linearGradient>' +
      '<linearGradient id="sp-glow" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#ffd98c"/><stop offset="1" stop-color="#ff7a2f"/></linearGradient>' +
      '</defs>' +
      '<g opacity="0.75" stroke="url(#sp-glow)" stroke-linecap="round" fill="none">' +
      '<path d="M14 52h13" stroke-width="4" opacity="0.7"/>' +
      '<path d="M8 66h17" stroke-width="4" opacity="0.45"/>' +
      '<path d="M17 80h10" stroke-width="3" opacity="0.3"/>' +
      '</g>' +
      '<path d="' + BODY + '" fill="url(#sp-body)"/>' +
      '<g stroke="#c8461f" stroke-width="1.6" opacity="0.5" fill="none">' +
      '<path d="M60 18c-7 14-9 30-8 70"/>' +
      '<path d="M60 18c7 14 9 30 8 70"/>' +
      '<path d="M60 18c-13 10-19 26-20 52"/>' +
      '<path d="M60 18c13 10 19 26 20 52"/>' +
      '</g>' +
      '<path d="M60 17c-2-7 1-12 5-14 1 5 0 9-2 12z" fill="#5fbe4a"/>' +
      '<path d="M46 51l9 5-10 4z" fill="#2a0f1f"/>' +
      '<path d="M74 51l-9 5 10 4z" fill="#2a0f1f"/>' +
      '<path d="M48 70l6-4 6 4 6-4 6 4-3 7H51z" fill="#2a0f1f"/>' +
      '<circle cx="60" cy="60" r="3" fill="#ffd98c" opacity="0.55"/>',

    /* Вампир */
    vampire: '' +
      '<defs>' +
      '<linearGradient id="va-body" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#8b5cf6"/><stop offset="0.5" stop-color="#6d28d9"/><stop offset="1" stop-color="#3b0d4a"/></linearGradient>' +
      '<linearGradient id="va-wing" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#3d1a5c"/><stop offset="1" stop-color="#1b0a2c"/></linearGradient>' +
      '</defs>' +
      '<path d="M34 50c-10-8-22-8-26-2 6 2 8 6 9 11 4-5 8-6 13-5z" fill="url(#va-wing)"/>' +
      '<path d="M86 50c10-8 22-8 26-2-6 2-8 6-9 11-4-5-8-6-13-5z" fill="url(#va-wing)"/>' +
      '<path d="' + BODY + '" fill="url(#va-body)"/>' +
      '<path d="M40 62c6 16 14 24 20 24s14-8 20-24c-6 4-13 6-20 6s-14-2-20-6z" fill="#2a0a3a" opacity="0.85"/>' +
      '<path d="M60 30c-4 8-6 14-6 18h12c0-4-2-10-6-18z" fill="#1b0a2c" opacity="0.8"/>' +
      '<circle cx="50" cy="53" r="4.2" fill="#ff3b58"/><circle cx="70" cy="53" r="4.2" fill="#ff3b58"/>' +
      '<circle cx="50" cy="53" r="1.7" fill="#2a0510"/><circle cx="70" cy="53" r="1.7" fill="#2a0510"/>' +
      '<path d="M52 68l4 7 4-7z" fill="#fff"/><path d="M60 68l4 7 4-7z" fill="#fff"/>' +
      '<path d="M52 66c5 3 11 3 16 0" stroke="#ff8fa3" stroke-width="1.6" fill="none" opacity="0.8"/>',

    /* Олень */
    deer: '' +
      '<defs>' +
      '<linearGradient id="de-body" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#a3e635"/><stop offset="0.5" stop-color="#4d9c46"/><stop offset="1" stop-color="#1f5a3a"/></linearGradient>' +
      '</defs>' +
      '<g stroke="#e6f5c8" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.9">' +
      '<path d="M42 34c-6-10-8-16-8-22"/><path d="M34 20l-8-4"/><path d="M36 26l-9 1"/>' +
      '<path d="M78 34c6-10 8-16 8-22"/><path d="M86 20l8-4"/><path d="M84 26l9 1"/>' +
      '</g>' +
      '<path d="' + BODY + '" fill="url(#de-body)"/>' +
      '<path d="M32 40c-7 1-11 5-12 9 4 2 8 1 11-2z" fill="#2f6d43"/>' +
      '<path d="M88 40c7 1 11 5 12 9-4 2-8 1-11-2z" fill="#2f6d43"/>' +
      '<ellipse cx="60" cy="76" rx="16" ry="12" fill="#d7f5b0" opacity="0.92"/>' +
      eyes(50, 70, 55, 3.2, 4.2, '#12240f') +
      '<path d="M60 80l-4 3h8z" fill="#2b3f1c"/>' +
      '<path d="M42 47c-3-4-3-8-1-11 3 1 5 5 4 9z" fill="#1f5a3a"/>' +
      '<path d="M78 47c3-4 3-8 1-11-3 1-5 5-4 9z" fill="#1f5a3a"/>',

    /* Енот из мусорного бака */
    dumpster: '' +
      '<defs>' +
      '<linearGradient id="du-body" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#5eead4"/><stop offset="0.55" stop-color="#2dd4bf"/><stop offset="1" stop-color="#0f766e"/></linearGradient>' +
      '</defs>' +
      '<path d="M22 30h76" stroke="#94a3b8" stroke-width="5" stroke-linecap="round" opacity="0.55"/>' +
      '<path d="' + BODY + '" fill="url(#du-body)"/>' +
      '<path d="M36 26l-4-12 12 6z" fill="#0f766e"/>' +
      '<path d="M84 26l4-12-12 6z" fill="#0f766e"/>' +
      '<path d="M38 48c6-5 15-5 21 0l-2 8c-6-4-12-4-18 0z" fill="#123a37"/>' +
      '<path d="M82 48c-6-5-15-5-21 0l2 8c6-4 12-4 18 0z" fill="#123a37"/>' +
      '<circle cx="50" cy="54" r="3.6" fill="#e6fffb"/><circle cx="70" cy="54" r="3.6" fill="#e6fffb"/>' +
      '<circle cx="50" cy="54" r="1.5" fill="#0b2523"/><circle cx="70" cy="54" r="1.5" fill="#0b2523"/>' +
      '<ellipse cx="60" cy="70" rx="9" ry="7" fill="#d7fff8" opacity="0.9"/>' +
      '<path d="M60 66l-4 3h8z" fill="#0b2523"/>' +
      '<path d="M38 86c4 0 6-3 6-6M82 86c-4 0-6-3-6-6" stroke="#d7fff8" stroke-width="1.6" fill="none" opacity="0.6"/>',

    /* Пчёлка в мёде */
    honey: '' +
      '<defs>' +
      '<linearGradient id="ho-body" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#ffe9a3"/><stop offset="0.5" stop-color="#fbbf24"/><stop offset="1" stop-color="#d97706"/></linearGradient>' +
      '</defs>' +
      '<g opacity="0.5" fill="#fff" stroke="#fff8dc" stroke-width="0.8">' +
      '<path d="M60 22l6 3.5v7l-6 3.5-6-3.5v-7z" fill="none" opacity="0.35"/>' +
      '</g>' +
      '<ellipse cx="38" cy="42" rx="12" ry="8" fill="#fff8dc" opacity="0.32" transform="rotate(-28 38 42)"/>' +
      '<ellipse cx="82" cy="42" rx="12" ry="8" fill="#fff8dc" opacity="0.32" transform="rotate(28 82 42)"/>' +
      '<path d="' + BODY + '" fill="url(#ho-body)"/>' +
      '<path d="M33 58c9 4 45 4 54 0v9c-9 4-45 4-54 0z" fill="#3b2408" opacity="0.75"/>' +
      '<path d="M35 74c9 3 41 3 50 0v7c-9 3-41 3-50 0z" fill="#3b2408" opacity="0.6"/>' +
      eyes(50, 70, 52, 3.4, 4.4, '#2a1705') +
      '<path d="M52 22c-2-8 0-13 3-16M68 22c2-8 0-13-3-16" stroke="#3b2408" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<circle cx="54" cy="6" r="3" fill="#3b2408"/><circle cx="66" cy="6" r="3" fill="#3b2408"/>' +
      '<path d="M54 70c4 3 8 3 12 0" stroke="#7c3f06" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>'
  };

  /* ---------- данные духов ---------- */
  var SPRITES = [
    {
      id: 'spooky-dash',
      name: 'Spooky Dash',
      ru: 'Жуткий рывок',
      rarity: 'Мифический',
      rarityKey: 'mythic',
      color: '#ffc45c',
      date: '1 октября',
      dateShort: '1 окт',
      art: ART.spooky,
      ability: 'Копит заряды рывка: резкий бросок вперёд с проходом сквозь часть объектов. Заряды восстанавливаются быстрее с уровнем.',
      where: ['Nightmare Neighborhood', 'Wonkeeland', 'Cluster Coast', 'Тыквенные сундуки'],
      finishes: BASE_FINISHES.concat([QUACK])
    },
    {
      id: 'vampire',
      name: 'Vampire',
      ru: 'Вампир',
      rarity: 'Эпический',
      rarityKey: 'epic',
      color: '#a855f7',
      date: '1 октября',
      dateShort: '1 окт',
      art: ART.vampire,
      ability: 'Возвращает здоровье за нанесённый врагам урон. Доля лечения растёт с каждым уровнем духа.',
      where: ['Golden Grove', 'Chopped Shop', 'Sunken Shores', 'Аниматроники FNAF'],
      finishes: BASE_FINISHES
    },
    {
      id: 'the-deer',
      name: 'The Deer',
      ru: 'Олень',
      rarity: 'Легендарный',
      rarityKey: 'legendary',
      color: '#ffa62b',
      date: '1 октября',
      dateShort: '1 окт',
      art: ART.deer,
      ability: 'Усиливает атаки ближнего боя — урон растёт с уровнем. Коллаб с 99 Nights in the Forest.',
      where: ['Тыквенные сундуки', 'Эпические Cheat Codes'],
      finishes: BASE_FINISHES
    },
    {
      id: 'dumpster-dive',
      name: 'Dumpster Dive',
      ru: 'Нырок в бак',
      rarity: 'Эпический',
      rarityKey: 'epic',
      color: '#2dd4bf',
      date: '1 октября',
      dateShort: '1 окт',
      art: ART.dumpster,
      ability: 'Ныряя в укрытие, находишь еду, которая восстанавливает больше здоровья. Лечение растёт с уровнем.',
      where: ['Vaults: Stone Sanctum', 'Мега-лабиринт', 'Редкие сундуки'],
      finishes: BASE_FINISHES
    },
    {
      id: 'honey',
      name: 'Honey',
      ru: 'Мёд',
      rarity: 'Эпический',
      rarityKey: 'epic',
      color: '#fbbf24',
      date: '15 октября',
      dateShort: '15 окт',
      art: ART.honey,
      ability: 'Когда враг ранит тебя, за ним летят пчёлы. Сила роя растёт с уровнем. Победитель Design-a-Sprite.',
      where: ['Сундуки по острову', 'Cheat Codes'],
      finishes: BASE_FINISHES,
      wave: 2
    }
  ];

  var STORAGE_KEY = 'spiritdex-fortnitemares-2026-v1';

  /* ---------- состояние ---------- */
  var state = { found: {}, finishes: {} };

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        state.found = parsed.found && typeof parsed.found === 'object' ? parsed.found : {};
        state.finishes = parsed.finishes && typeof parsed.finishes === 'object' ? parsed.finishes : {};
      }
    } catch (e) { /* приватный режим / file:// без хранилища */ }
  }

  var saveTimer = null;
  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      flashSaved();
    } catch (e) { /* игнорируем */ }
  }

  function flashSaved() {
    var hint = document.getElementById('savedHint');
    if (!hint) return;
    hint.textContent = 'Сохранено ✓';
    hint.classList.add('is-flash');
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      hint.textContent = 'Изменения сохраняются автоматически';
      hint.classList.remove('is-flash');
    }, 1400);
  }

  /* ---------- подсчёты ---------- */
  function totalFinishes() {
    return SPRITES.reduce(function (n, s) { return n + s.finishes.length; }, 0);
  }
  function foundCount() {
    return SPRITES.filter(function (s) { return state.found[s.id]; }).length;
  }
  function finishCount() {
    var n = 0;
    SPRITES.forEach(function (s) {
      s.finishes.forEach(function (f) {
        if (state.finishes[s.id + ':' + f.id]) n++;
      });
    });
    return n;
  }
  function spriteFinishCount(sprite) {
    return sprite.finishes.filter(function (f) {
      return state.finishes[sprite.id + ':' + f.id];
    }).length;
  }

  /* ---------- рендер ---------- */
  var grid = document.getElementById('spriteGrid');

  function cardHTML(s) {
    var found = !!state.found[s.id];
    var fCount = spriteFinishCount(s);
    var chips = s.finishes.map(function (f) {
      var on = !!state.finishes[s.id + ':' + f.id];
      return '<button type="button" class="finish' + (on ? ' is-on' : '') + '"' +
        ' data-sprite="' + s.id + '" data-finish="' + f.id + '"' +
        ' aria-pressed="' + on + '" title="' + f.perk.replace(/"/g, '&quot;') + '">' +
        f.label + '</button>';
    }).join('');
    var places = s.where.map(function (w) {
      return '<li>' + w + '</li>';
    }).join('');

    return '' +
      '<article class="sprite' + (found ? ' is-found' : '') + '" data-id="' + s.id + '"' +
      ' data-rarity="' + s.rarityKey + '" style="--r:' + s.color + '">' +
        '<div class="sprite__head">' +
          '<span class="badge">' + s.rarity + '</span>' +
          '<span class="sprite__date">' + s.dateShort + ' 2026</span>' +
        '</div>' +
        '<div class="avatar" aria-hidden="true">' +
          '<svg viewBox="0 0 120 120" role="img">' + s.art + '</svg>' +
          '<span class="sprite__stamp">Найден</span>' +
        '</div>' +
        '<div class="sprite__title">' +
          '<h3>' + s.name + '</h3>' +
          '<span>' + s.ru + '</span>' +
        '</div>' +
        '<p class="ability">' + s.ability + '</p>' +
        '<div class="find">' +
          '<h4>Где искать</h4>' +
          '<ul>' + places + '</ul>' +
        '</div>' +
        '<div class="finishes">' +
          '<div class="finishes__head"><span>Финиши</span><b data-fcount>' + fCount + ' / ' + s.finishes.length + '</b></div>' +
          '<div class="chips">' + chips + '</div>' +
          '<p class="finish-note" data-note></p>' +
        '</div>' +
        '<button type="button" class="mark" aria-pressed="' + found + '">' +
          '<span class="mark__check">✓</span><span data-mark-label>' + (found ? 'Найден' : 'Отметить как найденного') + '</span>' +
        '</button>' +
      '</article>';
  }

  function summaryHTML() {
    return '' +
      '<article class="summary" id="summaryCard">' +
        '<div class="summary__top">' +
          '<p class="summary__eyebrow">Итоги коллекции</p>' +
          '<p class="summary__big"><b data-found-big>0</b><span>/ 5</span></p>' +
          '<p class="summary__big-label">духов найдено</p>' +
        '</div>' +
        '<div class="summary__main">' +
          '<p class="summary__label">По редкости</p>' +
          '<ul class="summary__list">' +
            '<li><span><i style="--r:#ffc45c"></i>Мифические</span><b><span data-rar="mythic">0</span> <em>/ 1</em></b></li>' +
            '<li><span><i style="--r:#ffa62b"></i>Легендарные</span><b><span data-rar="legendary">0</span> <em>/ 1</em></b></li>' +
            '<li><span><i style="--r:#a855f7"></i>Эпические</span><b><span data-rar="epic">0</span> <em>/ 3</em></b></li>' +
          '</ul>' +
          '<div class="summary__block">' +
            '<div class="summary__finishes"><span>Финиши</span><b><span data-finish-summary>0</span> / 31</b></div>' +
            '<div class="bar"><span id="summaryBar"></span></div>' +
          '</div>' +
        '</div>' +
        '<p class="summary__note">Пять духов и 31 финиш — всё, что принесли обновления <b>v42.30</b> (1 октября) и <b>v42.40</b> (15 октября). Сезон закрылся 31 октября, но коллекция осталась в Sprite Garden.</p>' +
      '</article>';
  }

  function render() {
    grid.innerHTML = SPRITES.map(cardHTML).join('') + summaryHTML();
    updateProgress();
    applyFilter(currentFilter);
  }

  /* ---------- прогресс ---------- */
  var C = 2 * Math.PI * 52;

  function updateProgress() {
    var f = foundCount();
    var total = SPRITES.length;
    var pct = Math.round((f / total) * 100);

    document.getElementById('foundCount').textContent = f;
    document.getElementById('ringPercent').textContent = pct + '%';
    document.getElementById('barFill').style.width = pct + '%';
    document.getElementById('miniFound').textContent = f;
    document.getElementById('finishCount').textContent = finishCount();

    var ring = document.getElementById('ringFg');
    ring.style.strokeDasharray = C;
    ring.style.strokeDashoffset = C * (1 - f / total);
    ring.style.opacity = f === 0 ? '0' : '1';
    document.querySelector('.topbar__progress').setAttribute('title', 'Найдено духов: ' + f + ' из ' + total);

    ['mythic', 'legendary', 'epic'].forEach(function (key) {
      var el = document.querySelector('[data-rar="' + key + '"]');
      if (!el) return;
      el.textContent = SPRITES.filter(function (s) {
        return s.rarityKey === key && state.found[s.id];
      }).length;
    });

    var fcEl = document.querySelector('[data-finish-summary]');
    var sBar = document.getElementById('summaryBar');
    if (fcEl) fcEl.textContent = finishCount();
    if (sBar) sBar.style.width = Math.round((finishCount() / totalFinishes()) * 100) + '%';
    var big = document.querySelector('[data-found-big]');
    if (big) big.textContent = f;
  }

  /* ---------- фильтр ---------- */
  var currentFilter = 'all';

  function applyFilter(filter) {
    currentFilter = filter;
    var cards = grid.querySelectorAll('.sprite');
    var visible = 0;
    cards.forEach(function (card) {
      var found = state.found[card.dataset.id];
      var show = filter === 'all' || (filter === 'found' && found) || (filter === 'missing' && !found);
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    var summary = document.getElementById('summaryCard');
    if (summary) summary.style.display = filter === 'all' ? '' : 'none';
    document.getElementById('emptyState').hidden = visible !== 0;
  }

  /* ---------- уведомления ---------- */
  var toastTimer = null;
  function toast(msg) {
    var el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('is-visible'); }, 2600);
  }

  function celebrate() {
    var box = document.getElementById('confetti');
    var colors = ['#ffc45c', '#ff8a3d', '#b45cff', '#41e6d0', '#ffffff'];
    for (var i = 0; i < 46; i++) {
      var p = document.createElement('i');
      p.style.left = Math.random() * 100 + '%';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.setProperty('--dx', (Math.random() * 220 - 110).toFixed(0) + 'px');
      p.style.setProperty('--rot', (Math.random() * 900 + 180).toFixed(0) + 'deg');
      p.style.animationDuration = (2.4 + Math.random() * 1.6).toFixed(2) + 's';
      p.style.animationDelay = (Math.random() * 0.5).toFixed(2) + 's';
      p.style.opacity = '0.9';
      box.appendChild(p);
      (function (node) {
        setTimeout(function () { node.remove(); }, 4600);
      })(p);
    }
  }

  /* ---------- действия ---------- */
  function toggleFound(id, card) {
    var before = state.found[id];
    state.found[id] = !before;
    if (!state.found[id]) {
      // снимаем отметку — чистим и финиши этого духа
      var sprite = SPRITES.filter(function (s) { return s.id === id; })[0];
      if (sprite) {
        sprite.finishes.forEach(function (f) { delete state.finishes[id + ':' + f.id]; });
      }
    }
    if (card) {
      card.classList.toggle('is-found', !!state.found[id]);
      var mark = card.querySelector('.mark');
      mark.setAttribute('aria-pressed', String(!!state.found[id]));
      card.querySelector('[data-mark-label]').textContent = state.found[id] ? 'Найден' : 'Отметить как найденного';
      card.querySelector('[data-fcount]').textContent = spriteFinishCountById(id) + ' / ' + finishesOf(id).length;
      card.querySelectorAll('.finish').forEach(function (b) {
        var on = !!state.finishes[id + ':' + b.dataset.finish];
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-pressed', String(on));
      });
    }
    save();
    updateProgress();
    applyFilter(currentFilter);

    var f = foundCount();
    if (state.found[id] && f === 1) toast('Первый дух в коллекции — так держать!');
    else if (state.found[id] && f === SPRITES.length) {
      toast('Все 5 духов Fortnitemares собраны! 🎃');
      celebrate();
    } else if (state.found[id] && f === Math.ceil(SPRITES.length / 2)) {
      toast('Половина коллекции позади!');
    }
  }

  function finishesOf(id) {
    var s = SPRITES.filter(function (x) { return x.id === id; })[0];
    return s ? s.finishes : [];
  }
  function spriteFinishCountById(id) {
    var n = 0;
    finishesOf(id).forEach(function (f) { if (state.finishes[id + ':' + f.id]) n++; });
    return n;
  }

  function toggleFinish(spriteId, finishId, btn) {
    var key = spriteId + ':' + finishId;
    state.finishes[key] = !state.finishes[key];
    var on = !!state.finishes[key];

    if (btn) {
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', String(on));

      var card = btn.closest('.sprite');
      card.querySelector('[data-fcount]').textContent = spriteFinishCountById(spriteId) + ' / ' + finishesOf(spriteId).length;

      var finish = finishesOf(spriteId).filter(function (f) { return f.id === finishId; })[0];
      var note = card.querySelector('[data-note]');
      if (finish) note.innerHTML = '<b>' + finish.label + '</b> — ' + finish.perk;

      // финиш есть — значит и дух найден
      if (on && !state.found[spriteId]) {
        toggleFound(spriteId, card);
        return;
      }
    }

    save();
    updateProgress();
  }

  function resetAll() {
    if (!confirm('Сбросить весь прогресс по духам Fortnitemares 2026?')) return;
    state = { found: {}, finishes: {} };
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    render();
    toast('Прогресс сброшен');
  }

  /* ---------- события ---------- */
  grid.addEventListener('click', function (e) {
    var finishBtn = e.target.closest('.finish');
    if (finishBtn) {
      e.stopPropagation();
      toggleFinish(finishBtn.dataset.sprite, finishBtn.dataset.finish, finishBtn);
      return;
    }
    var card = e.target.closest('.sprite');
    if (!card) return;
    if (e.target.closest('a')) return;
    toggleFound(card.dataset.id, card);
  });

  document.querySelectorAll('.filters .chip').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filters .chip').forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });
      applyFilter(btn.dataset.filter);
    });
  });

  document.getElementById('resetBtn').addEventListener('click', resetAll);

  /* ---------- старт ---------- */
  load();
  render();
})();
