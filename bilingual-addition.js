// Script to add bilingual support to a page
// Usage: Add to HTML before </body>
// Then add class="zh-only" and class="en-only" to text elements

const BILINGUAL_CSS = `
<style>
.lang-switch{position:fixed;top:16px;right:20px;z-index:1000;display:flex;gap:6px}
.lang-btn{padding:6px 16px;border:2px solid rgba(255,255,255,0.7);border-radius:20px;background:rgba(255,255,255,0.15);color:#fff;font-size:0.85em;cursor:pointer;font-weight:600;backdrop-filter:blur(8px);transition:all 0.2s;font-family:inherit}
.lang-btn:hover,.lang-btn.active{background:rgba(255,255,255,0.9);color:#1a5f7a}
[lang="zh-CN"] .en-only{display:none}
[lang="en"] .zh-only{display:none}
</style>`;

function setLang(lang) {
    document.body.setAttribute('lang', lang);
    document.documentElement.setAttribute('lang', lang);
    var btnZh = document.getElementById('btn-zh');
    var btnEn = document.getElementById('btn-en');
    if (btnZh) btnZh.classList.toggle('active', lang === 'zh-CN');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    localStorage.setItem('prefLang', lang);
}
function initLang() {
    var saved = localStorage.getItem('prefLang');
    if (saved) setLang(saved);
}
