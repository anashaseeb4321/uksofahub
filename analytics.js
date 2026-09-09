/* =========================================================
   UK Sofa Hub / Plush House — Google Analytics 4 tracking
   One file, add to every page. No per-page editing needed.
   ========================================================= */

/* ---------- 1. CONFIG — change this one line ---------- */
const GA_MEASUREMENT_ID = 'G-NPEJYF56EZ';   // UK Sofa Hub — already set

/* ---------- 2. Load Google Analytics ---------- */
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);
})();
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID);

/* ---------- 3. Track WHICH SOFA is viewed ----------
   Uses the page's <title> as the product name, so every
   product page reports itself with no extra work.        */
document.addEventListener('DOMContentLoaded', function () {
  gtag('event', 'view_item', {
    items: [{ item_name: document.title, item_category: 'Sofa' }],
    page_path: location.pathname
  });
});

/* ---------- 4. Track WHATSAPP CLICKS (your key sale action) ----------
   Auto-detects any WhatsApp link on any page — wa.me,
   api.whatsapp.com, or anything with "whatsapp" in it.    */
document.addEventListener('click', function (e) {
  var link = e.target.closest('a');
  if (!link || !link.href) return;
  var href = link.href.toLowerCase();
  if (href.indexOf('wa.me') > -1 ||
      href.indexOf('whatsapp') > -1 ||
      href.indexOf('api.whatsapp') > -1) {
    gtag('event', 'whatsapp_click', {
      product: document.title,          // which sofa they messaged about
      page_path: location.pathname,
      link_url: link.href
    });
  }
});
