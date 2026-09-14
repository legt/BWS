/* Skipr Cookie Consent */
(function(){
  var STORAGE_KEY = 'skipr-cookie-consent';
  var LANG = document.documentElement.lang || 'en';
  var TR = {
    en: {
      title: 'Cookie preferences',
      desc: 'We use cookies to improve your experience and measure site performance. You can accept all cookies or customise your preferences.',
      accept: 'Accept all',
      decline: 'Decline',
      save: 'Save preferences',
      manage: 'Manage',
      settings: 'Cookie settings',
      gtm_title: 'Analytics & measurement',
      gtm_desc: 'Help us understand how visitors interact with the site.'
    },
    fr: {
      title: 'Préférences de cookies',
      desc: 'Nous utilisons des cookies pour améliorer votre expérience et mesurer les performances du site. Vous pouvez accepter tous les cookies ou personnaliser vos préférences.',
      accept: 'Tout accepter',
      decline: 'Refuser',
      save: 'Enregistrer',
      manage: 'Gérer',
      settings: 'Paramètres des cookies',
      gtm_title: 'Analyse et mesure',
      gtm_desc: 'Nous aident à comprendre comment les visiteurs interagissent avec le site.'
    },
    nl: {
      title: 'Cookie-voorkeuren',
      desc: 'We gebruiken cookies om uw ervaring te verbeteren en de siteprestaties te meten. U kunt alle cookies accepteren of uw voorkeuren aanpassen.',
      accept: 'Alles accepteren',
      decline: 'Weigeren',
      save: 'Voorkeuren opslaan',
      manage: 'Beheren',
      settings: 'Cookie-instellingen',
      gtm_title: 'Analyse en meting',
      gtm_desc: 'Helpen ons begrijpen hoe bezoekers de site gebruiken.'
    }
  };
  var t = TR[LANG] || TR.en;

  function getConsent() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch(e) { return null; }
  }
  function setConsent(val) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }

  var consent = getConsent();

  // Default: consent not yet given
  if (!consent) {
    // Set denied defaults for GTM consent mode
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('consent', 'default', { 'analytics_storage': 'denied', 'ad_storage': 'denied' });

    // Show banner after DOM ready
    document.addEventListener('DOMContentLoaded', function(){ showBanner(false); });
  } else if (consent.gtm) {
    // Consent already given — load GTM immediately
    loadGTM();
  }

  function loadGTM() {
    if (window._gtmLoaded) return;
    window._gtmLoaded = true;
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('consent', 'update', { 'analytics_storage': 'granted', 'ad_storage': 'granted' });
    gtag('consent', 'update', { 'analytics_storage': 'granted', 'ad_storage': 'granted' });
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T3KQ6PT');
  }

  function declineGTM() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('consent', 'update', { 'analytics_storage': 'denied', 'ad_storage': 'denied' });
  }

  function buildCSS() {
    return '.cc-banner{position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#fff;border-top:1px solid #e5e7eb;box-shadow:0 -4px 24px rgba(0,0,0,.08);padding:24px 0;font-family:Inter,system-ui,sans-serif;animation:ccSlideUp .35s ease}@keyframes ccSlideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}.cc-wrap{max-width:1120px;margin:0 auto;padding:0 24px;display:flex;align-items:center;gap:24px;flex-wrap:wrap}.cc-text{flex:1;min-width:280px}.cc-text h3{margin:0 0 6px;font-size:15px;font-weight:600;color:#171924}.cc-text p{margin:0;font-size:13px;line-height:1.6;color:#6b7280}.cc-actions{display:flex;gap:10px;flex-wrap:wrap}.cc-btn{padding:10px 20px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;border:none;transition:background .15s,color .15s}.cc-btn-primary{background:#4918B6;color:#fff}.cc-btn-primary:hover{background:#3a12a0}.cc-btn-secondary{background:#f3f4f6;color:#374151;border:1px solid #e5e7eb}.cc-btn-secondary:hover{background:#e5e7eb}.cc-btn-text{background:none;color:#4918B6;border:none;padding:10px 12px;font-weight:500}.cc-btn-text:hover{text-decoration:underline}.cc-modal-overlay{position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.4);display:none;align-items:center;justify-content:center;animation:ccFadeIn .2s ease}.cc-modal-overlay.cc-open{display:flex}@keyframes ccFadeIn{from{opacity:0}to{opacity:1}}.cc-modal{background:#fff;border-radius:16px;max-width:520px;width:calc(100% - 40px);max-height:80vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.15);padding:32px}.cc-modal h2{margin:0 0 12px;font-size:18px;font-weight:700;color:#171924}.cc-modal p{margin:0 0 20px;font-size:14px;line-height:1.6;color:#6b7280}.cc-service{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:16px 0;border-top:1px solid #f3f4f6}.cc-service-info{flex:1}.cc-service-info h4{margin:0 0 4px;font-size:14px;font-weight:600;color:#171924}.cc-service-info p{margin:0;font-size:13px;color:#6b7280;line-height:1.5}.cc-toggle{position:relative;width:44px;height:24px;flex-shrink:0}.cc-toggle input{opacity:0;width:0;height:0}.cc-toggle span{position:absolute;cursor:pointer;inset:0;background:#d1d5db;border-radius:12px;transition:.2s}.cc-toggle span:before{content:"";position:absolute;height:18px;width:18px;left:3px;bottom:3px;background:#fff;border-radius:50%;transition:.2s}.cc-toggle input:checked+span{background:#4918B6}.cc-toggle input:checked+span:before{transform:translateX(20px)}.cc-toggle input:disabled+span{opacity:.5;cursor:not-allowed}.cc-modal-actions{display:flex;gap:10px;margin-top:24px;justify-content:flex-end}';
  }

  function buildBannerHTML(isModal) {
    var checked = consent && consent.gtm ? ' checked' : '';
    var modalHTML = '<div class="cc-modal-overlay" id="ccModal"><div class="cc-modal">' +
      '<h2>' + t.title + '</h2><p>' + t.desc + '</p>' +
      '<div class="cc-service"><div class="cc-service-info"><h4>' + t.gtm_title + '</h4><p>' + t.gtm_desc + '</p></div>' +
      '<label class="cc-toggle"><input type="checkbox" id="ccGtmToggle"' + checked + '><span></span></label></div>' +
      '<div class="cc-modal-actions">' +
      '<button class="cc-btn cc-btn-secondary" onclick="window._ccCloseModal()">' + (LANG === 'fr' ? 'Fermer' : LANG === 'nl' ? 'Sluiten' : 'Close') + '</button>' +
      '<button class="cc-btn cc-btn-primary" onclick="window._ccSaveModal()">' + t.save + '</button>' +
      '</div></div></div>';

    var bannerHTML = '<div class="cc-banner" id="ccBanner"><div class="cc-wrap">' +
      '<div class="cc-text"><h3>' + t.title + '</h3><p>' + t.desc + '</p></div>' +
      '<div class="cc-actions">' +
      '<button class="cc-btn cc-btn-text" onclick="window._ccShowModal()">' + t.manage + '</button>' +
      '<button class="cc-btn cc-btn-secondary" onclick="window._ccDecline()">' + t.decline + '</button>' +
      '<button class="cc-btn cc-btn-primary" onclick="window._ccAcceptAll()">' + t.accept + '</button>' +
      '</div></div></div>';

    return bannerHTML + modalHTML;
  }

  function injectStyles() {
    if (document.getElementById('ccStyles')) return;
    var style = document.createElement('style');
    style.id = 'ccStyles';
    style.textContent = buildCSS();
    document.head.appendChild(style);
  }

  function showBanner(isModal) {
    // Remove existing
    var existing = document.getElementById('ccBanner');
    if (existing) existing.remove();
    var existingModal = document.getElementById('ccModal');
    if (existingModal) existingModal.remove();

    injectStyles();
    document.body.insertAdjacentHTML('beforeend', buildBannerHTML(isModal));

    if (isModal) {
      document.getElementById('ccModal').classList.add('cc-open');
    }
  }

  function hideBanner() {
    var b = document.getElementById('ccBanner');
    if (b) b.remove();
    var m = document.getElementById('ccModal');
    if (m) m.classList.remove('cc-open');
  }

  window._ccAcceptAll = function() {
    setConsent({ gtm: true });
    loadGTM();
    hideBanner();
  };

  window._ccDecline = function() {
    setConsent({ gtm: false });
    declineGTM();
    hideBanner();
  };

  window._ccShowModal = function() {
    showBanner(true);
    // Set toggle to current consent state
    var toggle = document.getElementById('ccGtmToggle');
    if (toggle) toggle.checked = !!(consent && consent.gtm);
  };

  window._ccCloseModal = function() {
    var m = document.getElementById('ccModal');
    if (m) m.classList.remove('cc-open');
    // If no banner visible and no consent yet, show banner
    if (!getConsent()) {
      showBanner(false);
    }
  };

  window._ccSaveModal = function() {
    var toggle = document.getElementById('ccGtmToggle');
    var gtm = toggle ? toggle.checked : false;
    consent = { gtm: gtm };
    setConsent(consent);
    if (gtm) { loadGTM(); } else { declineGTM(); }
    hideBanner();
  };

  // Cookie settings link handler
  window._ccOpenSettings = function() {
    consent = getConsent();
    showBanner(true);
    var toggle = document.getElementById('ccGtmToggle');
    if (toggle) toggle.checked = !!(consent && consent.gtm);
  };
})();
