(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('primary-nav');
  var mq = window.matchMedia('(max-width: 900px)');
  function sync() { if (mq.matches) { nav.hidden = btn.getAttribute('aria-expanded') !== 'true'; } else { nav.hidden = false; } }
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    btn.setAttribute('aria-label', open ? 'Menü öffnen' : 'Menü schließen');
    sync();
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a') && mq.matches) { btn.setAttribute('aria-expanded', 'false'); sync(); } });
  (mq.addEventListener ? mq.addEventListener('change', sync) : mq.addListener(sync));
  sync();
})();
