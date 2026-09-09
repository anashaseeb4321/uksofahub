/* =========================================================
   UK Sofa Hub — Google Analytics 4 (base loader only)
   Per-sofa events (view_item, whatsapp_click) are fired
   from inside index.html where the real product name is
   known. This file just loads GA4 + the homepage pageview.
   ========================================================= */

const GA_MEASUREMENT_ID = 'G-NPEJYF56EZ';   // UK Sofa Hub

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
