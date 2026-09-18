/*!
 * accessible-version.js — Версия для слабовидящих
 * Версия 2.2.1
 * Лицензия MIT — свободное использование, авторство указывать не требуется.
 *
 * Возможности (по ГОСТ Р 52872-2019):
 *   1. Размер текста — фиксированные коэффициенты: 100% → 150% → 200%
 *   2. Межбуквенный интервал (кернинг): стандартный / средний / большой
 *   3. Цветовые схемы:
 *      - чёрным по белому (основная)
 *      - белым по чёрному
 *      - тёмно-синим по голубому
 *   4. Фильтры: инверсия цветов, оттенки серого
 *   5. Скрыть изображения (включая CSS background-image — важно для
 *      сайтов, где картинки выводятся фоном элементов, например Nuxt/Vue)
 *   6. Увеличенный межстрочный интервал
 *
 * Настройки сохраняются в localStorage и применяются на всех страницах
 * сайта, где подключён плагин.
 *
 * Кнопка вызова: полноценная кнопка в шапке сайта. Добавьте атрибут
 * data-av-trigger своей кнопке — плагин привяжется к ней. Если кнопки нет,
 * создаётся компактная кнопка в правом верхнем углу экрана.
 *
 * Не зависит от фреймворков (Vue / Nuxt / React / Angular / jQuery).
 * Интерфейс изолирован через Shadow DOM. Стили страницы не изменяются.
 */
(function () {
  "use strict";

  /* Защита от двойного подключения */
  if (window.__AccessibleVersionLoaded) return;
  window.__AccessibleVersionLoaded = true;

  /* ──────────────────────────── Константы ──────────────────────────── */

  var STORAGE_KEY = "accessible-version-settings";
  var PANEL_ID = "accessible-version-panel";
  var SCALES = [100, 150, 200]; /* фиксированные коэффициенты: 1.5x и 2x */

  var defaults = {
    scaleIndex: 0,          /* индекс в SCALES */
    colorScheme: "none",    /* none | darkOnWhite | whiteOnBlack | blueOnLightblue */
    kerning: "none",        /* none | medium | large */
    invert: false,
    grayscale: false,
    hideImages: false,
    lineSpacing: false
  };

  /* ─────────────────────────── Состояние ───────────────────────────── */

  var settings = loadSettings();
  var host = null;
  var panelOpen = false;
  var restoreFocusTo = null;
  var docKeydownHandler = null;
  var outsideClickHandler = null;
  var repositionHandler = null;
  var fallbackBtn = null;
  var triggers = [];        /* привязанные кнопки на странице */
  var anchorEl = null;      /* элемент, к которому привязывается панель */
  var rescanTimer = null;

  function loadSettings() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return cloneDefaults();
      var parsed = JSON.parse(raw);
      var merged = cloneDefaults();
      for (var key in defaults) {
        if (Object.prototype.hasOwnProperty.call(parsed, key)) {
          merged[key] = parsed[key];
        }
      }
      /* Миграция со старых версий (до 2.2): visualMode → схема + фильтры */
      if (typeof parsed.visualMode === "string") {
        if (parsed.visualMode === "contrast") merged.colorScheme = "darkOnWhite";
        else if (parsed.visualMode === "invert") merged.invert = true;
        else if (parsed.visualMode === "grayscale") merged.grayscale = true;
      }
      /* Санитизация значений из хранилища */
      if (
        typeof merged.scaleIndex !== "number" ||
        isNaN(merged.scaleIndex) ||
        merged.scaleIndex % 1 !== 0 ||
        merged.scaleIndex < 0 ||
        merged.scaleIndex >= SCALES.length
      ) {
        merged.scaleIndex = 0;
      }
      if (["none", "darkOnWhite", "whiteOnBlack", "blueOnLightblue"].indexOf(merged.colorScheme) === -1) {
        merged.colorScheme = "none";
      }
      if (["none", "medium", "large"].indexOf(merged.kerning) === -1) {
        merged.kerning = "none";
      }
      merged.invert = merged.invert === true;
      merged.grayscale = merged.grayscale === true;
      merged.hideImages = merged.hideImages === true;
      merged.lineSpacing = merged.lineSpacing === true;
      return merged;
    } catch (e) {
      return cloneDefaults();
    }
  }

  function cloneDefaults() {
    return {
      scaleIndex: defaults.scaleIndex,
      colorScheme: defaults.colorScheme,
      kerning: defaults.kerning,
      invert: defaults.invert,
      grayscale: defaults.grayscale,
      hideImages: defaults.hideImages,
      lineSpacing: defaults.lineSpacing
    };
  }

  function saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      /* localStorage может быть недоступен (приватный режим, квоты) */
    }
  }

  /* ─────────────────────── Внутренние стили панели ─────────────────── */

  var FONT_STACK = "'Montserrat', -apple-system, 'Segoe UI', Roboto, Arial, sans-serif";

  var PANEL_CSS = [
    ":host { all: initial; }",
    "",
    "*, *::before, *::after { box-sizing: border-box; }",
    "",
    "/* ── Фолбэк-кнопка (если на странице нет своей кнопки с data-av-trigger) ── */",
    ".fallback-btn {",
    "  position: fixed;",
    "  top: 12px;",
    "  right: 16px;",
    "  height: 42px;",
    "  padding: 0 14px;",
    "  border-radius: 10px;",
    "  border: 1px solid rgba(11, 94, 215, 0.35);",
    "  background: #ffffff;",
    "  color: #0b5ed7;",
    "  cursor: pointer;",
    "  display: flex;",
    "  align-items: center;",
    "  gap: 8px;",
    "  font-family: " + FONT_STACK + ";",
    "  font-size: 14px;",
    "  font-weight: 600;",
    "  white-space: nowrap;",
    "  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);",
    "  z-index: 2147483647;",
    "  transition: background-color 0.15s ease;",
    "}",
    ".fallback-btn:hover { background: #eef4fe; }",
    ".fallback-btn:focus-visible { outline: 3px solid #ffbf47; outline-offset: 2px; }",
    ".fallback-btn svg { width: 26px; height: 17px; fill: currentColor; pointer-events: none; flex-shrink: 0; }",
    "",
    "/* ── Панель ── */",
    ".panel {",
    "  position: fixed;",
    "  width: 320px;",
    "  max-width: calc(100vw - 16px);",
    "  max-height: min(560px, calc(100vh - 16px));",
    "  background: #ffffff;",
    "  color: #1f2937;",
    "  border: 1px solid #d1d5db;",
    "  border-radius: 12px;",
    "  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);",
    "  font-family: " + FONT_STACK + ";",
    "  font-size: 15px;",
    "  line-height: 1.45;",
    "  overflow: hidden;",
    "  display: none;",
    "  z-index: 2147483647;",
    "}",
    ".panel.open { display: flex; flex-direction: column; }",
    "",
    "/* ── Шапка ── */",
    ".panel-header {",
    "  display: flex;",
    "  align-items: center;",
    "  justify-content: space-between;",
    "  gap: 8px;",
    "  padding: 12px 14px;",
    "  background: #0b5ed7;",
    "  color: #ffffff;",
    "  flex-shrink: 0;",
    "}",
    ".panel-title {",
    "  margin: 0;",
    "  font-size: 16px;",
    "  font-weight: 700;",
    "  letter-spacing: 0.01em;",
    "}",
    ".panel-close {",
    "  background: transparent;",
    "  border: 1px solid rgba(255, 255, 255, 0.5);",
    "  border-radius: 8px;",
    "  color: #ffffff;",
    "  width: 32px;",
    "  height: 32px;",
    "  cursor: pointer;",
    "  display: flex;",
    "  align-items: center;",
    "  justify-content: center;",
    "  flex-shrink: 0;",
    "  transition: background-color 0.15s ease;",
    "}",
    ".panel-close:hover { background: rgba(255, 255, 255, 0.18); }",
    ".panel-close:focus-visible { outline: 3px solid #ffbf47; outline-offset: 2px; }",
    ".panel-close svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; pointer-events: none; }",
    "",
    "/* ── Тело панели ── */",
    ".panel-body {",
    "  padding: 10px 14px 14px;",
    "  overflow-y: auto;",
    "  display: flex;",
    "  flex-direction: column;",
    "  gap: 8px;",
    "}",
    ".panel-body::-webkit-scrollbar { width: 8px; }",
    ".panel-body::-webkit-scrollbar-track { background: transparent; }",
    ".panel-body::-webkit-scrollbar-thumb { background: #c7cdd6; border-radius: 4px; }",
    ".panel-body::-webkit-scrollbar-thumb:hover { background: #9aa3af; }",
    "",
    ".section-label {",
    "  font-size: 12px;",
    "  font-weight: 700;",
    "  text-transform: uppercase;",
    "  letter-spacing: 0.06em;",
    "  color: #6b7280;",
    "  margin: 4px 0 2px;",
    "}",
    "",
    "/* ── Строка-переключатель ── */",
    ".row {",
    "  display: flex;",
    "  align-items: center;",
    "  justify-content: space-between;",
    "  gap: 10px;",
    "  width: 100%;",
    "  padding: 10px 12px;",
    "  border: 1px solid #d1d5db;",
    "  border-radius: 10px;",
    "  background: #f8fafc;",
    "  color: #1f2937;",
    "  cursor: pointer;",
    "  font-family: inherit;",
    "  font-size: 15px;",
    "  text-align: left;",
    "  transition: background-color 0.12s ease, border-color 0.12s ease;",
    "}",
    ".row:hover { background: #eef2f7; border-color: #94a3b8; }",
    ".row:focus-visible { outline: 3px solid #ffbf47; outline-offset: 2px; }",
    ".row .row-label { display: flex; align-items: center; gap: 9px; pointer-events: none; }",
    ".row .row-label svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }",
    ".row .state { font-size: 13px; color: #6b7280; flex-shrink: 0; pointer-events: none; }",
    ".row[aria-checked='true'] { background: #e7f0fe; border-color: #0b5ed7; color: #0a4fb5; font-weight: 600; }",
    ".row[aria-checked='true'] .state { color: #0a4fb5; }",
    "",
    "/* ── Размер текста ── */",
    ".scale-row { display: flex; gap: 8px; }",
    ".scale-btn {",
    "  flex: 1;",
    "  padding: 12px 6px;",
    "  border: 1px solid #d1d5db;",
    "  border-radius: 10px;",
    "  background: #f8fafc;",
    "  color: #1f2937;",
    "  cursor: pointer;",
    "  font-family: inherit;",
    "  font-size: 16px;",
    "  font-weight: 600;",
    "  transition: background-color 0.12s ease, border-color 0.12s ease;",
    "}",
    ".scale-btn:hover { background: #eef2f7; border-color: #94a3b8; }",
    ".scale-btn:focus-visible { outline: 3px solid #ffbf47; outline-offset: 2px; }",
    ".scale-btn[aria-checked='true'] { background: #0b5ed7; border-color: #0b5ed7; color: #ffffff; }",
    ".scale-btn small { display: block; font-size: 11px; font-weight: 400; opacity: 0.85; margin-top: 2px; }",
    "",
    "/* ── Чипы (цветовые схемы, кернинг) ── */",
    ".chip-row { display: flex; flex-wrap: wrap; gap: 8px; }",
    ".chip {",
    "  display: inline-flex;",
    "  align-items: center;",
    "  gap: 7px;",
    "  padding: 8px 12px;",
    "  border: 1px solid #d1d5db;",
    "  border-radius: 999px;",
    "  background: #f8fafc;",
    "  color: #1f2937;",
    "  cursor: pointer;",
    "  font-family: inherit;",
    "  font-size: 13.5px;",
    "  font-weight: 500;",
    "  transition: background-color 0.12s ease, border-color 0.12s ease;",
    "}",
    ".chip:hover { background: #eef2f7; border-color: #94a3b8; }",
    ".chip:focus-visible { outline: 3px solid #ffbf47; outline-offset: 2px; }",
    ".chip[aria-checked='true'] { background: #0b5ed7; border-color: #0b5ed7; color: #ffffff; font-weight: 600; }",
    ".chip-swatch {",
    "  width: 16px;",
    "  height: 16px;",
    "  border-radius: 50%;",
    "  border: 1px solid rgba(0, 0, 0, 0.25);",
    "  flex-shrink: 0;",
    "}",
    ".chip[aria-checked='true'] .chip-swatch { border-color: rgba(255, 255, 255, 0.7); }",
    "",
    "/* ── Кнопка сброса ── */",
    ".reset-btn {",
    "  margin-top: 4px;",
    "  padding: 10px 12px;",
    "  border: 1px solid #e3a8a8;",
    "  border-radius: 10px;",
    "  background: #fdf3f3;",
    "  color: #9b2c2c;",
    "  cursor: pointer;",
    "  font-family: inherit;",
    "  font-size: 15px;",
    "  font-weight: 600;",
    "  display: flex;",
    "  align-items: center;",
    "  justify-content: center;",
    "  gap: 7px;",
    "  transition: background-color 0.12s ease, border-color 0.12s ease;",
    "}",
    ".reset-btn:hover { background: #fbe9e9; border-color: #d67676; }",
    ".reset-btn:focus-visible { outline: 3px solid #ffbf47; outline-offset: 2px; }",
    ".reset-btn svg { width: 15px; height: 15px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; pointer-events: none; }",
    "",
    "/* ── Адаптивность ── */",
    "@media (max-width: 480px) {",
    "  .fallback-btn { top: 8px; right: 8px; height: 38px; font-size: 13px; }",
    "  .fallback-btn svg { width: 22px; height: 15px; }",
    "  .panel { width: calc(100vw - 16px) !important; right: 8px !important; left: 8px !important; }",
    "}",
    "",
    "/* ── Уважение к системной настройке «уменьшить анимацию» ── */",
    "@media (prefers-reduced-motion: reduce) {",
    "  .fallback-btn, .row, .scale-btn, .chip, .reset-btn { transition: none; }",
    "}"
  ].join("\n");

  /* ───────────────────────────── Иконки ────────────────────────────── */

  /* Очки — иконка кнопки вызова (spectacles-icon.svg из проекта заказчика) */
  var GLASSES_PATH = "M68.64,49.8c0.06,0.07,0.11,0.13,0.17,0.19c-0.02,0.42-0.03,0.85-0.03,1.28" +
    "c0,7.47,3.03,14.23,7.92,19.13c4.89,4.9,11.66,7.92,19.13,7.92c7.47,0,14.23-3.03,19.13-7.92" +
    "c4.89-4.89,7.92-11.66,7.92-19.13c0-3.13-0.53-6.13-1.51-8.92c0.06-0.37,0.05-0.77-0.05-1.16" +
    "L111.28,2.11c-0.38-1.5-1.91-2.4-3.4-2.02c-1.5,0.38-2.4,1.91-2.02,3.4l6.85,26.63" +
    "c-4.62-3.7-10.49-5.9-16.87-5.9c-7.47,0-14.23,3.03-19.13,7.92c-3.02,3.02-5.33,6.75-6.66,10.92" +
    "c-5.02-3.93-12.19-3.94-17.22,0c-1.33-4.17-3.63-7.9-6.66-10.92c-4.89-4.89-11.66-7.92-19.13-7.92" +
    "c-6.38,0-12.24,2.21-16.87,5.9l6.85-26.63c0.38-1.5-0.52-3.02-2.02-3.4c-1.5-0.38-3.02,0.52-3.4,2.02" +
    "L1.55,41.19c-0.1,0.39-0.11,0.79-0.05,1.16C0.53,45.14,0,48.14,0,51.27c0,7.47,3.03,14.23,7.92,19.13" +
    "c4.89,4.9,11.66,7.92,19.13,7.92c7.47,0,14.23-3.03,19.13-7.92c4.9-4.89,7.92-11.66,7.92-19.13" +
    "c0-0.43-0.01-0.85-0.03-1.28c0.06-0.06,0.12-0.12,0.17-0.19C58.96,44.29,64.08,44.47,68.64,49.8L68.64,49.8z" +
    " M27.25,29.17c12.12,0,21.94,9.82,21.94,21.94c0,12.12-9.82,21.94-21.94,21.94" +
    "c-12.12,0-21.94-9.82-21.94-21.94C5.31,38.99,15.13,29.17,27.25,29.17L27.25,29.17z" +
    " M95.83,73.16c-12.09,0-21.89-9.8-21.89-21.89c0-23.69,32.5-30.21,41.92-8.84" +
    "C121.71,56.06,112.52,73.16,95.83,73.16L95.83,73.16z";

  var GLASSES_SVG =
    '<svg viewBox="0 0 122.88 78.32" aria-hidden="true" focusable="false" ' +
    'style="width:1.4em;height:0.9em;fill:currentColor;vertical-align:-0.12em;flex-shrink:0">' +
    "<path d=\"" + GLASSES_PATH + "\"/></svg>";

  var ICONS = {
    glasses: GLASSES_SVG,
    /* Полукруг — контраст */
    contrast: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 3 a9 9 0 0 1 0 18 Z" fill="currentColor" stroke="none"/></svg>',
    /* Палитра — инверсия цветов */
    palette: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<path d="M12 3.5c-4.7 0-8.5 3.6-8.5 8.2 0 4.5 3.8 8.1 8.5 8.1h.9c1 0 1.8-.8 1.8-1.8 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1 .9-1.9 1.9-1.9h1.9c2.5 0 4.5-2 4.5-4.4 0-3.1-4-5.6-8.5-5.6z"/>' +
      '<circle cx="7.3" cy="10.8" r="1.25" fill="currentColor" stroke="none"/>' +
      '<circle cx="10.4" cy="7.4" r="1.25" fill="currentColor" stroke="none"/>' +
      '<circle cx="14.9" cy="7.4" r="1.25" fill="currentColor" stroke="none"/>' +
      '<circle cx="17.4" cy="10.8" r="1.25" fill="currentColor" stroke="none"/>' +
      "</svg>",
    /* Серая шкала — оттенки серого: рамка с тремя полосами разной яркости */
    grayscale: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<rect x="3" y="5" width="18" height="14" rx="2"/>' +
      '<rect x="6" y="8" width="3.4" height="8" rx="0.8" fill="currentColor" stroke="none"/>' +
      '<rect x="10.8" y="8" width="3.4" height="8" rx="0.8" fill="currentColor" stroke="none" fill-opacity="0.55"/>' +
      '<rect x="15.6" y="8" width="3.4" height="8" rx="0.8" fill="currentColor" stroke="none" fill-opacity="0.22"/>' +
      "</svg>",
    /* Перечёркнутая картинка — скрыть изображения */
    imagesOff: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<rect x="3" y="4" width="18" height="16" rx="2"/>' +
      '<circle cx="9" cy="10" r="1.6"/>' +
      '<path d="M3 17 l5.5-5 4.5 4 3-2.5 5 4.5"/>' +
      '<path d="M3.5 3.5 L20.5 20.5" stroke-width="2.2"/>' +
      "</svg>",
    spacing: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5 h16 M4 10.5 h16 M4 16 h16 M4 21 h16"/></svg>',
    reset: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 10 a8 8 0 1 1 2.3 6.3"/><path d="M4 4 v6 h6"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6 L18 18 M18 6 L6 18"/></svg>'
  };

  /* ─────────────────────── Стили режима для страницы ────────────────── */
  /* Все правила имеют префикс html.av- и касаются только корня документа.
     Стили существующих элементов сайта не переписываются вручную — режимы
     применяются живыми CSS-селекторами и действуют на элементы, которые
     появляются динамически (важно для клиентского рендеринга Nuxt/Vue). */

  var PAGE_CSS = [
    "/* accessible-version: режимы отображения */",
    "/* ── Цветовые схемы (ГОСТ Р 52872-2019) ── */",
    "/* Принудительное перекрашивание ВСЕХ элементов: как в классических",
    "   ГОСТ-версиях — иначе карточки/блоки сайта со своими фонами остаются",
    "   нечитаемыми. Фоны гасим в прозрачность, текст и рамки перекрашиваем. */",
    "",
    "/* Основная: чёрным по белому */",
    "html.av-scheme-dow, html.av-scheme-dow body { background: #ffffff !important; color: #000000 !important; }",
    "html.av-scheme-dow * { background-color: transparent !important; color: #000000 !important; border-color: #000000 !important; }",
    "html.av-scheme-dow a { color: #0000cc !important; text-decoration: underline !important; }",
    "html.av-scheme-dow a:visited { color: #5500aa !important; }",
    "html.av-scheme-dow button, html.av-scheme-dow input[type='button'], html.av-scheme-dow input[type='submit'], html.av-scheme-dow input[type='reset'] {",
    "  border: 2px solid #000000 !important;",
    "}",
    "",
    "/* Белым по чёрному */",
    "html.av-scheme-wob, html.av-scheme-wob body { background: #000000 !important; color: #ffffff !important; }",
    "html.av-scheme-wob * { background-color: transparent !important; color: #ffffff !important; border-color: #ffffff !important; }",
    "html.av-scheme-wob a { color: #ffff00 !important; text-decoration: underline !important; }",
    "html.av-scheme-wob button, html.av-scheme-wob input[type='button'], html.av-scheme-wob input[type='submit'], html.av-scheme-wob input[type='reset'] {",
    "  border: 2px solid #ffffff !important;",
    "}",
    "",
    "/* Тёмно-синим по голубому */",
    "html.av-scheme-bol, html.av-scheme-bol body { background: #9dd1ff !important; color: #063462 !important; }",
    "html.av-scheme-bol * { background-color: transparent !important; color: #063462 !important; border-color: #063462 !important; }",
    "html.av-scheme-bol a { color: #063462 !important; text-decoration: underline !important; }",
    "html.av-scheme-bol button, html.av-scheme-bol input[type='button'], html.av-scheme-bol input[type='submit'], html.av-scheme-bol input[type='reset'] {",
    "  border: 2px solid #063462 !important;",
    "}",
    "/* Текст в полях ввода и плейсхолдеры — тоже перекрашиваем */",
    "html.av-scheme-dow input, html.av-scheme-dow textarea, html.av-scheme-dow select, html.av-scheme-dow ::placeholder { color: #000000 !important; }",
    "html.av-scheme-wob input, html.av-scheme-wob textarea, html.av-scheme-wob select, html.av-scheme-wob ::placeholder { color: #ffffff !important; }",
    "html.av-scheme-bol input, html.av-scheme-bol textarea, html.av-scheme-bol select, html.av-scheme-bol ::placeholder { color: #063462 !important; }",
    "",
    "/* Схемы НЕ трогают картинки: они только перекрашивают текст и фоны. Убрать изображения — отдельная опция «Скрыть изображения». */",
    "",
    "/* ── Кернинг: средний и большой межбуквенный интервал ── */",
    "html.av-kern-medium * { letter-spacing: 0.06em !important; }",
    "html.av-kern-large * { letter-spacing: 0.12em !important; }",
    "",
    "/* ── Антипереполнение при крупных масштабах (150%/200%) ──",
    "   Текст в кнопках и ссылках переносится вместо вылезания за контейнер,",
    "   картинки не становятся шире своего блока, длинные слова рвутся. */",
    "html.av-scale-150 button, html.av-scale-150 [role='button'],",
    "html.av-scale-200 button, html.av-scale-200 [role='button'] {",
    "  white-space: normal !important;",
    "}",
    "html.av-scale-150 img, html.av-scale-150 video,",
    "html.av-scale-200 img, html.av-scale-200 video { max-width: 100% !important; height: auto !important; }",
    "html.av-scale-150 *, html.av-scale-200 * { overflow-wrap: break-word; }",
    "",
    "/* ── Скрыть изображения. Скрываем не только <img>: на сайтах с клиентским",
    "   рендерингом (Nuxt/Vue) галереи часто выводятся через CSS background-image —",
    "   их тоже гасим. Селекторы «живые»: действуют на элементы, добавленные после загрузки. */",
    "html.av-hide-images img,",
    "html.av-hide-images picture,",
    "html.av-hide-images video,",
    "html.av-hide-images canvas,",
    "html.av-hide-images figure,",
    "html.av-hide-images [role='img'] {",
    "  visibility: hidden !important;",
    "}",
    "/* Фоновые изображения у любых элементов — убираем полностью */",
    "html.av-hide-images * { background-image: none !important; }",
    "html.av-hide-images img[width] { min-height: 1em; }",
    "html.av-hide-images figure { outline: 1px dashed currentColor; min-height: 1em; }",
    "",
    "/* ── Увеличенный межстрочный интервал ── */",
    "html.av-spacing p,",
    "html.av-spacing li,",
    "html.av-spacing dd,",
    "html.av-spacing blockquote,",
    "html.av-spacing article,",
    "html.av-spacing section,",
    "html.av-spacing div {",
    "  line-height: 2 !important;",
    "}"
  ].join("\n");

  /* ─────────────────────── Установка стилей режима ─────────────────── */

  var pageStyleEl = null;

  function ensurePageStyle() {
    if (!pageStyleEl || !pageStyleEl.parentNode) {
      pageStyleEl = document.createElement("style");
      pageStyleEl.setAttribute("data-accessible-version", "modes");
      pageStyleEl.textContent = PAGE_CSS;
      document.head.appendChild(pageStyleEl);
    }
  }

  function applySettings() {
    ensurePageStyle();
    var root = document.documentElement;

    /* Цветовая схема — ровно одна (или основная без класса) */
    root.classList.toggle("av-scheme-dow", settings.colorScheme === "darkOnWhite");
    root.classList.toggle("av-scheme-wob", settings.colorScheme === "whiteOnBlack");
    root.classList.toggle("av-scheme-bol", settings.colorScheme === "blueOnLightblue");

    /* Кернинг */
    root.classList.toggle("av-kern-medium", settings.kerning === "medium");
    root.classList.toggle("av-kern-large", settings.kerning === "large");

    /* Фильтры — через filter на корне. По спецификации CSS Filter Effects
       фильтр на корневом элементе НЕ создаёт содержащий блок, поэтому
       position: fixed элементы ведут себя корректно при прокрутке. */
    var filters = [];
    if (settings.invert) filters.push("invert(1) hue-rotate(180deg)");
    if (settings.grayscale) filters.push("grayscale(1)");
    root.style.filter = filters.length ? filters.join(" ") : "";

    /* Размер текста — только через font-size корня, в процентах.
       Класс av-scale-NNN позволяет сайту донастраивать свои стили
       под крупный масштаб (см. README). */
    root.style.fontSize = SCALES[settings.scaleIndex] + "%";
    root.classList.remove("av-scale-100", "av-scale-150", "av-scale-200");
    root.classList.add("av-scale-" + SCALES[settings.scaleIndex]);

    /* Прочие режимы */
    root.classList.toggle("av-hide-images", settings.hideImages);
    root.classList.toggle("av-spacing", settings.lineSpacing);

    saveSettings();
  }

  /* ──────────────── Шрифт Montserrat (если его нет на сайте) ───────── */

  function ensureMontserrat() {
    try {
      if (document.getElementById("av-montserrat-link")) return;
      if (document.fonts && typeof document.fonts.check === "function" &&
          document.fonts.check("16px 'Montserrat'")) {
        return; /* шрифт уже есть на сайте */
      }
    } catch (e) { /* document.fonts недоступен — подключаем */ }
    var link = document.createElement("link");
    link.id = "av-montserrat-link";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }

  /* ───────────────────────── Shadow DOM хост ───────────────────────── */

  function mountShadow() {
    if (!Element.prototype.attachShadow) {
      /* Браузер без поддержки Shadow DOM (устаревшие) — не ломаем страницу */
      if (window.console && console.warn) {
        console.warn("[accessible-version] браузер не поддерживает Shadow DOM, виджет отключён");
      }
      return null;
    }
    host = document.createElement("div");
    host.setAttribute("data-accessible-version", "widget");
    host.style.cssText = "all: initial; position: static; display: block; height: 0;";
    (document.body || document.documentElement).appendChild(host);

    var shadow = host.attachShadow({ mode: "open" });

    var style = document.createElement("style");
    style.textContent = PANEL_CSS;
    shadow.appendChild(style);

    var panel = document.createElement("div");
    panel.id = PANEL_ID;
    panel.className = "panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "false");
    panel.setAttribute("aria-label", "Настройки версии для слабовидящих");
    shadow.appendChild(panel);

    return { shadow: shadow, panel: panel };
  }

  var ui = null; /* { shadow, panel } */

  /* ──────────────── Привязка к кнопке на странице ──────────────────── */

  function decorateTrigger(el) {
    if (el.getAttribute("data-av-bound")) return;
    el.setAttribute("data-av-bound", "1");
    if (!el.querySelector("svg")) {
      el.insertAdjacentHTML("afterbegin", GLASSES_SVG);
    }
    el.setAttribute("aria-haspopup", "dialog");
    el.setAttribute("aria-expanded", "false");
    el.setAttribute("aria-controls", PANEL_ID);
    el.addEventListener("click", function (e) {
      e.preventDefault();
      if (panelOpen) closePanel(); else openPanel();
    });
    triggers.push(el);
  }

  function createFallbackBtn() {
    fallbackBtn = document.createElement("button");
    fallbackBtn.type = "button";
    fallbackBtn.className = "fallback-btn";
    fallbackBtn.setAttribute("aria-label", "Версия для слабовидящих: открыть настройки отображения");
    fallbackBtn.setAttribute("aria-haspopup", "dialog");
    fallbackBtn.setAttribute("aria-expanded", "false");
    fallbackBtn.setAttribute("aria-controls", PANEL_ID);
    fallbackBtn.innerHTML = ICONS.glasses + "<span>Версия для слабовидящих</span>";
    fallbackBtn.addEventListener("click", function () {
      if (panelOpen) closePanel(); else openPanel();
    });
    ui.shadow.appendChild(fallbackBtn);
  }

  function removeFallbackBtn() {
    if (fallbackBtn && fallbackBtn.parentNode) fallbackBtn.parentNode.removeChild(fallbackBtn);
    fallbackBtn = null;
  }

  function rescan() {
    var found = document.querySelectorAll("[data-av-trigger], [data-a11y-trigger]");
    for (var i = 0; i < found.length; i++) {
      decorateTrigger(found[i]);
    }
    if (triggers.length && fallbackBtn) {
      removeFallbackBtn();
    }
    anchorEl = triggers[0] || fallbackBtn;
    if (anchorEl) {
      anchorEl.setAttribute("aria-expanded", panelOpen ? "true" : "false");
    }
  }

  /* Следим за появлением кнопки в шапке (SPA может отрисовать её позже) */
  function startTriggerObserver() {
    if (!window.MutationObserver) {
      /* Запасной вариант: пара отложенных перепроверок */
      setTimeout(rescan, 1000);
      setTimeout(rescan, 3000);
      return;
    }
    var pending = false;
    var observer = new MutationObserver(function () {
      if (pending) return;
      pending = true;
      rescanTimer = setTimeout(function () {
        pending = false;
        rescan();
      }, 500);
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  /* ──────────────────────── Построение панели ───────────────────────── */

  function rowHtml(id, checked, label, icon, stateText) {
    return '<button type="button" class="row" id="' + id + '" role="switch"' +
      ' aria-checked="' + (checked ? "true" : "false") + '">' +
      '<span class="row-label">' + icon + "<span>" + label + "</span></span>" +
      '<span class="state" aria-hidden="true">' + stateText + "</span>" +
      "</button>";
  }

  function modeRowHtml(mode, checked, label, icon) {
    return '<button type="button" class="row" data-mode="' + mode + '" role="radio"' +
      ' aria-checked="' + (checked ? "true" : "false") + '">' +
      '<span class="row-label">' + icon + "<span>" + label + "</span></span>" +
      '<span class="state" aria-hidden="true">' + (checked ? "вкл" : "") + "</span>" +
      "</button>";
  }

  /* Кнопка-«чип» внутри группы (схемы, кернинг) */
  function chipHtml(group, value, checked, label, swatch) {
    return '<button type="button" class="chip" data-group="' + group + '" data-value="' + value + '"' +
      ' role="radio" aria-checked="' + (checked ? "true" : "false") + '">' +
      (swatch ? '<span class="chip-swatch" style="background:' + swatch + '" aria-hidden="true"></span>' : "") +
      "<span>" + label + "</span>" +
      "</button>";
  }

  function filterRowHtml(key, checked, label, icon) {
    return '<button type="button" class="row" data-filter="' + key + '" role="switch"' +
      ' aria-checked="' + (checked ? "true" : "false") + '">' +
      '<span class="row-label">' + icon + "<span>" + label + "</span></span>" +
      '<span class="state" aria-hidden="true">' + (checked ? "вкл" : "") + "</span>" +
      "</button>";
  }

  function buildPanel() {
    var scaleGroup =
      '<div class="section-label" id="av-lbl-scale">Размер текста</div>' +
      '<div class="scale-row" role="radiogroup" aria-labelledby="av-lbl-scale">' +
      '<button type="button" class="scale-btn" data-scale="0" role="radio" aria-checked="' + (settings.scaleIndex === 0) + '">А<small>100%</small></button>' +
      '<button type="button" class="scale-btn" data-scale="1" role="radio" aria-checked="' + (settings.scaleIndex === 1) + '">А<small>150%</small></button>' +
      '<button type="button" class="scale-btn" data-scale="2" role="radio" aria-checked="' + (settings.scaleIndex === 2) + '">А<small>200%</small></button>' +
      "</div>";

    var schemeGroup =
      '<div class="section-label" id="av-lbl-scheme">Цветовая схема</div>' +
      '<div class="chip-row" role="radiogroup" aria-labelledby="av-lbl-scheme">' +
      chipHtml("scheme", "none", settings.colorScheme === "none", "Обычная") +
      chipHtml("scheme", "darkOnWhite", settings.colorScheme === "darkOnWhite", "Чёрным по белому", "linear-gradient(135deg,#fff 50%,#000 50%)") +
      chipHtml("scheme", "whiteOnBlack", settings.colorScheme === "whiteOnBlack", "Белым по чёрному", "linear-gradient(135deg,#000 50%,#fff 50%)") +
      chipHtml("scheme", "blueOnLightblue", settings.colorScheme === "blueOnLightblue", "Синим по голубому", "linear-gradient(135deg,#9dd1ff 50%,#063462 50%)") +
      "</div>";

    var kerningGroup =
      '<div class="section-label" id="av-lbl-kern">Межбуквенный интервал</div>' +
      '<div class="chip-row" role="radiogroup" aria-labelledby="av-lbl-kern">' +
      chipHtml("kern", "none", settings.kerning === "none", "Обычный") +
      chipHtml("kern", "medium", settings.kerning === "medium", "Средний") +
      chipHtml("kern", "large", settings.kerning === "large", "Большой") +
      "</div>";

    var filtersGroup =
      '<div class="section-label">Фильтры</div>' +
      filterRowHtml("invert", settings.invert, "Инверсия цветов", ICONS.palette) +
      filterRowHtml("grayscale", settings.grayscale, "Оттенки серого", ICONS.grayscale);

    var otherGroup =
      '<div class="section-label">Отображение</div>' +
      rowHtml("av-row-images", settings.hideImages, "Скрыть изображения", ICONS.imagesOff, settings.hideImages ? "вкл" : "") +
      rowHtml("av-row-spacing", settings.lineSpacing, "Увеличить межстрочный интервал", ICONS.spacing, settings.lineSpacing ? "вкл" : "");

    var resetHtml =
      '<button type="button" class="reset-btn" id="av-reset">' +
      ICONS.reset + "<span>Сбросить настройки</span>" +
      "</button>";

    return (
      '<div class="panel-header">' +
      '<h2 class="panel-title" id="av-title">Версия для слабовидящих</h2>' +
      '<button type="button" class="panel-close" id="av-close" aria-label="Закрыть панель">' +
      ICONS.close +
      "</button>" +
      "</div>" +
      '<div class="panel-body">' +
      scaleGroup +
      schemeGroup +
      kerningGroup +
      filtersGroup +
      otherGroup +
      resetHtml +
      "</div>"
    );
  }

  function renderPanel() {
    if (!ui) return;
    var body = ui.panel.querySelector(".panel-body");
    var savedScroll = body ? body.scrollTop : 0;
    var active = ui.shadow.activeElement;
    var savedId = active ? active.id : null;
    var savedMode = active ? active.getAttribute("data-mode") : null;
    var savedScale = active ? active.getAttribute("data-scale") : null;

    ui.panel.innerHTML = buildPanel();

    var newBody = ui.panel.querySelector(".panel-body");
    if (newBody && savedScroll) newBody.scrollTop = savedScroll;

    /* Возврат фокуса на тот же элемент управления, чтобы навигация с клавиатуры не сбивалась */
    var savedGroup = active ? active.getAttribute("data-group") : null;
    var savedValue = active ? active.getAttribute("data-value") : null;
    var toFocus = null;
    if (savedId) toFocus = ui.panel.querySelector("#" + savedId);
    if (!toFocus && savedGroup && savedValue) {
      toFocus = ui.panel.querySelector('[data-group="' + savedGroup + '"][data-value="' + savedValue + '"]');
    }
    if (!toFocus && savedScale) toFocus = ui.panel.querySelector('[data-scale="' + savedScale + '"]');
    if (toFocus) toFocus.focus({ preventScroll: true });

    bindPanelEvents();
  }

  /* ─────────────────────── Обработчики панели ──────────────────────── */

  function setScale(index) {
    settings.scaleIndex = index;
    applySettings();
    renderPanel();
  }

  function setGroup(group, value) {
    if (group === "scheme") settings.colorScheme = value;
    else if (group === "kern") settings.kerning = value;
    applySettings();
    renderPanel();
  }

  function toggleFlag(key) {
    settings[key] = !settings[key];
    applySettings();
    renderPanel();
  }

  function resetAll() {
    settings = cloneDefaults();
    applySettings();
    renderPanel();
  }

  function bindPanelEvents() {
    ui.panel.querySelector("#av-close").addEventListener("click", function () { closePanel(); });

    var scaleButtons = ui.panel.querySelectorAll("[data-scale]");
    for (var j = 0; j < scaleButtons.length; j++) {
      (function (btn) {
        btn.addEventListener("click", function () { setScale(parseInt(btn.getAttribute("data-scale"), 10)); });
      })(scaleButtons[j]);
    }

    var chips = ui.panel.querySelectorAll(".chip[data-group]");
    for (var c = 0; c < chips.length; c++) {
      (function (btn) {
        btn.addEventListener("click", function () { setGroup(btn.getAttribute("data-group"), btn.getAttribute("data-value")); });
      })(chips[c]);
    }

    var filterButtons = ui.panel.querySelectorAll("[data-filter]");
    for (var f = 0; f < filterButtons.length; f++) {
      (function (btn) {
        btn.addEventListener("click", function () { toggleFlag(btn.getAttribute("data-filter")); });
      })(filterButtons[f]);
    }

    /* важно: исключаем кнопки фильтров — иначе они получат по два
       обработчика (data-filter и role=switch) и клик включал бы
       одновременно фильтр и «Скрыть изображения» */
    var rows = ui.panel.querySelectorAll(".row[role='switch']:not([data-filter])");
    for (var k = 0; k < rows.length; k++) {
      (function (btn) {
        btn.addEventListener("click", function () { toggleFlag(btn.id === "av-row-spacing" ? "lineSpacing" : "hideImages"); });
      })(rows[k]);
    }

    ui.panel.querySelector("#av-reset").addEventListener("click", resetAll);
  }

  /* ─────────────────────── Позиционирование панели ─────────────────── */
  /* Панель раскрывается под кнопкой вызова (как на сайтах с ГОСТ-версией),
     при нехватке места — над кнопкой; всегда в пределах экрана. */

  function positionPanel() {
    if (!ui || !anchorEl) return;
    var rect = anchorEl.getBoundingClientRect();
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var GAP = 10;
    var panelW = Math.min(320, vw - 16);

    ui.panel.style.width = panelW + "px";

    var ph = ui.panel.offsetHeight || 420;
    var top = null;
    var bottom = null;
    var maxH;

    var spaceBelow = vh - rect.bottom - GAP * 2;
    if (spaceBelow >= Math.min(ph, 260) && rect.bottom + GAP >= 0) {
      /* Раскрываем вниз под кнопкой */
      top = Math.max(8, rect.bottom + GAP);
      maxH = vh - top - 12;
    } else if (rect.top > ph + GAP && rect.top <= vh) {
      /* Места внизу нет — раскрываем вверх */
      bottom = Math.max(8, vh - rect.top + GAP);
      maxH = Math.min(rect.top, vh) - GAP * 2;
    } else {
      /* Кнопка вне экрана — панель по центру верхней части */
      top = 8;
      maxH = vh - 16;
    }
    if (top !== null) {
      ui.panel.style.top = top + "px";
      ui.panel.style.bottom = "auto";
    } else {
      ui.panel.style.top = "auto";
      ui.panel.style.bottom = bottom + "px";
    }
    ui.panel.style.maxHeight = Math.max(200, Math.min(560, maxH)) + "px";

    /* Горизонталь: выравнивание по правому краю кнопки с клампом в границы экрана */
    var left = rect.right - panelW;
    if (left < 8) left = 8;
    if (left + panelW > vw - 8) left = vw - panelW - 8;
    ui.panel.style.left = left + "px";
    ui.panel.style.right = "auto";
  }

  /* ─────────────────────── Открытие / закрытие ─────────────────────── */

  function getFocusable() {
    if (!ui) return [];
    var sel = "button:not([disabled])";
    var list = ui.panel.querySelectorAll(sel);
    var out = [];
    for (var i = 0; i < list.length; i++) out.push(list[i]);
    return out;
  }

  function setExpanded(state) {
    for (var i = 0; i < triggers.length; i++) {
      triggers[i].setAttribute("aria-expanded", state ? "true" : "false");
    }
    if (fallbackBtn) fallbackBtn.setAttribute("aria-expanded", state ? "true" : "false");
  }

  function openPanel() {
    if (panelOpen || !ui) return;
    panelOpen = true;
    restoreFocusTo = ui.shadow.activeElement || document.activeElement;

    renderPanel();
    ui.panel.classList.add("open");
    positionPanel();
    setExpanded(true);

    /* Escape — закрыть; Tab — цикл внутри панели (WCAG 2.1.2) */
    docKeydownHandler = function (e) {
      if (!panelOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closePanel();
        return;
      }
      if (e.key === "Tab") {
        var focusable = getFocusable();
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        var current = ui.shadow.activeElement;
        if (e.shiftKey) {
          if (current === first || !ui.panel.contains(current)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (current === last || !ui.panel.contains(current)) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", docKeydownHandler, true);

    /* Клик вне виджета и кнопки вызова — закрыть (composedPath устойчив к Shadow DOM) */
    outsideClickHandler = function (e) {
      if (!panelOpen) return;
      var path = typeof e.composedPath === "function" ? e.composedPath() : [];
      for (var i = 0; i < path.length; i++) {
        if (path[i] === host) return;
        for (var j = 0; j < triggers.length; j++) {
          if (path[i] === triggers[j]) return;
        }
      }
      closePanel();
    };
    document.addEventListener("click", outsideClickHandler, true);

    /* Пересчёт позиции при ресайзе и прокрутке */
    repositionHandler = function () {
      if (panelOpen) positionPanel();
    };
    window.addEventListener("resize", repositionHandler);
    window.addEventListener("scroll", repositionHandler, true);

    var first = getFocusable()[0];
    if (first) first.focus({ preventScroll: true });
  }

  function closePanel() {
    if (!panelOpen || !ui) return;
    panelOpen = false;
    ui.panel.classList.remove("open");
    setExpanded(false);

    if (docKeydownHandler) { document.removeEventListener("keydown", docKeydownHandler, true); docKeydownHandler = null; }
    if (outsideClickHandler) { document.removeEventListener("click", outsideClickHandler, true); outsideClickHandler = null; }
    if (repositionHandler) {
      window.removeEventListener("resize", repositionHandler);
      window.removeEventListener("scroll", repositionHandler, true);
      repositionHandler = null;
    }

    var back = restoreFocusTo;
    restoreFocusTo = null;
    if (back && typeof back.focus === "function") {
      try { back.focus({ preventScroll: true }); } catch (e) { /* элемент мог исчезнуть */ }
    }
  }

  /* ─────────────────────────── Инициализация ───────────────────────── */

  function init() {
    applySettings();
    ui = mountShadow();
    if (!ui) return;

    rescan();
    if (!triggers.length) {
      createFallbackBtn();
      rescan();
    }
    startTriggerObserver();

    /* Подключаем Montserrat, только если сайт сам его не загрузил */
    if (document.fonts && document.fonts.ready && document.fonts.ready.then) {
      document.fonts.ready.then(ensureMontserrat);
    } else {
      setTimeout(ensureMontserrat, 1200);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  /* Публичный API (опционально) */
  window.AccessibleVersion = {
    open: function () { if (ui && !panelOpen) openPanel(); },
    close: function () { closePanel(); },
    reset: function () { resetAll(); },
    /* Повторный поиск кнопок [data-av-trigger] (например, после смены роута в SPA) */
    rescan: function () { rescan(); }
  };
})();
