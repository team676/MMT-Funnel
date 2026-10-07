// Background options for the section boundaries, flipped from a small switcher at the bottom left (7 Oct 2026).
(() => {
  const OPTS = ['None (as it is)', 'Brass seam', 'Chart grid', 'Candle band', 'Price line', 'Spotlight', 'Slate bands'];
  const KEY = 'mmt-bg';
  let k = 1;
  try { const s = Number(localStorage.getItem(KEY)); if (Number.isInteger(s) && s >= 0 && s < OPTS.length) k = s; } catch (e) {}
  const set = () => { document.documentElement.dataset.bg = String(k); const l = document.querySelector('.bgpick span'); if (l) l.innerHTML = `Background <b>${k + 1} / ${OPTS.length}</b> ${OPTS[k]}`; try { localStorage.setItem(KEY, String(k)); } catch (e) {} };
  const ui = document.createElement('div');
  ui.className = 'bgpick';
  ui.innerHTML = '<button type="button" aria-label="Previous background">‹</button><span></span><button type="button" aria-label="Next background">›</button>';
  const [prev, , next] = ui.children;
  prev.onclick = () => { k = (k - 1 + OPTS.length) % OPTS.length; set(); };
  next.onclick = () => { k = (k + 1) % OPTS.length; set(); };
  document.body.appendChild(ui);
  set();
})();
