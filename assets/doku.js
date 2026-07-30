/* =========================================================
   Lerndokumentationen — Sprachumschaltung
   Speichert die Wahl in localStorage, gilt für alle Seiten.
   Der Frühstart in <head> (siehe Inline-Snippet) verhindert
   ein kurzes Aufblitzen der falschen Sprache.
   ========================================================= */
(function () {
  'use strict';

  var KEY = 'lerndoku-lang';
  var root = document.documentElement;

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* Privatmodus */ }
  }

  function apply(lang) {
    lang = (lang === 'en') ? 'en' : 'de';
    root.setAttribute('data-l', lang);
    root.setAttribute('lang', lang === 'en' ? 'en' : 'de-CH');

    // Titel der Seite mitziehen
    var t = document.querySelector('title');
    if (t) {
      var alt = t.getAttribute(lang === 'en' ? 'data-en' : 'data-de');
      if (alt) { t.textContent = alt; }
    }

    // Schaltflächen synchronisieren
    var btns = document.querySelectorAll('.langswitch button[data-set]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-set') === lang ? 'true' : 'false');
    }
    return lang;
  }

  // Frühzeitig anwenden (falls das Inline-Snippet gefehlt hat)
  var current = apply(read() || root.getAttribute('data-l') || 'de');

  function bind() {
    var btns = document.querySelectorAll('.langswitch button[data-set]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        current = apply(this.getAttribute('data-set'));
        write(current);
      });
    }
    apply(current);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }

  // Tastenkürzel: Alt+L wechselt die Sprache
  document.addEventListener('keydown', function (e) {
    if (e.altKey && !e.ctrlKey && !e.metaKey && (e.key === 'l' || e.key === 'L')) {
      current = apply(current === 'de' ? 'en' : 'de');
      write(current);
    }
  });
})();
