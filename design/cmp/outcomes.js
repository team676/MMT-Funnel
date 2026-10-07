// Section 4, What You'll Walk Away With: versions on arrows while Kunal picks (7 Oct 2026). Version 0 is the page's current
// rows; the rest follow the maturity rules (brass not yellow, numbers not icon squares, 17.5px text, firm contrast).
(() => {
  const OUT = [["A filter that shows you only the A+ setups", "Fifteen order blocks and FVGs on your chart, and in under a minute you know which ones have real odds behind them and which are traps. You only risk money on A+ trades from now on."], ["Your daily bias called before the open", "You read where price is reaching before the market opens and know buy day or sell day, with a reason behind it. You\u2019re positioned before the move instead of chasing it."], ["The confidence to pull the trigger", "When the 3 DRT checks line up, the decision is made for you. No waiting for one more candle, no watching your own setup run without you. You click, you manage, you trust the process."], ["Consistency you can count on", "Same process, same way, every session. Your results finally match the hours you put in, and the account grows week after week instead of green one week, red the next."], ["Pass the prop challenge and keep the account", "A challenge is just another trading week when you only take A+ trades with defined risk. Pass it, get funded, keep it, and scale into account sizes you could never afford on your own."], ["Time and financial freedom, on your terms", "A second income around the job first. Then an income that matches it. Then, for the ones who want it, the day you hand in your notice and trade for a living, with your mornings and evenings back."]];
  const CUR = "<div class=\"mmt-out\">\n  <div class=\"mmt-out__card\"><div class=\"mmt-out__hd\"><span class=\"mmt-tick\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.4 8.5l3 3 6.2-6.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><h3>A filter that shows you only the A+ setups</h3></div><p>Fifteen order blocks and FVGs on your chart, and in under a minute you know which ones have real odds behind them and which are traps. You only risk money on A+ trades from now on.</p></div>\n  <div class=\"mmt-out__card\"><div class=\"mmt-out__hd\"><span class=\"mmt-tick\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.4 8.5l3 3 6.2-6.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><h3>Your daily bias called before the open</h3></div><p>You read where price is reaching before the market opens and know buy day or sell day, with a reason behind it. You\u2019re positioned before the move instead of chasing it.</p></div>\n  <div class=\"mmt-out__card\"><div class=\"mmt-out__hd\"><span class=\"mmt-tick\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.4 8.5l3 3 6.2-6.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><h3>The confidence to pull the trigger</h3></div><p>When the 3 DRT checks line up, the decision is made for you. No waiting for one more candle, no watching your own setup run without you. You click, you manage, you trust the process.</p></div>\n  <div class=\"mmt-out__card\"><div class=\"mmt-out__hd\"><span class=\"mmt-tick\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.4 8.5l3 3 6.2-6.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><h3>Consistency you can count on</h3></div><p>Same process, same way, every session. Your results finally match the hours you put in, and the account grows week after week instead of green one week, red the next.</p></div>\n  <div class=\"mmt-out__card\"><div class=\"mmt-out__hd\"><span class=\"mmt-tick\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.4 8.5l3 3 6.2-6.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><h3>Pass the prop challenge and keep the account</h3></div><p>A challenge is just another trading week when you only take A+ trades with defined risk. Pass it, get funded, keep it, and scale into account sizes you could never afford on your own.</p></div>\n  <div class=\"mmt-out__card\"><div class=\"mmt-out__hd\"><span class=\"mmt-tick\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.4 8.5l3 3 6.2-6.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><h3>Time and financial freedom, on your terms</h3></div><p>A second income around the job first. Then an income that matches it. Then, for the ones who want it, the day you hand in your notice and trade for a living, with your mornings and evenings back.</p></div>\n</div>";
  const no = (i) => `<span class="no">${String(i + 1).padStart(2, '0')}</span>`;
  const V = [
    ['o0', 'Current: rows with a gold bar', CUR],
    ['o1', 'Two across, numbered', `<div class="o1">${OUT.map(([h, p], i) => `<div class="c">${no(i)}<h3>${h}</h3><p>${p}</p></div>`).join('')}</div>`],
    ['o2', 'Editorial list, no boxes', `<div class="o2">${OUT.map(([h, p], i) => `<div class="r">${no(i)}<h3>${h}</h3><p>${p}</p></div>`).join('')}</div>`],
    ['o3', 'Three across, a brass line on top', `<div class="o3">${OUT.map(([h, p], i) => `<div class="c">${no(i)}<h3>${h}</h3><p>${p}</p></div>`).join('')}</div>`],
    ['o4', 'Ivory cards, dark type', `<div class="o4">${OUT.map(([h, p], i) => `<div class="c">${no(i)}<h3>${h}</h3><p>${p}</p></div>`).join('')}</div>`],
    ['o5', 'The current rows, quieter', `<div class="o5">${OUT.map(([h, p], i) => `<div class="r">${no(i)}<h3>${h}</h3><p>${p}</p></div>`).join('')}</div>`],
    ['o6', 'One panel, two columns of three', `<div class="o6">${OUT.map(([h, p], i) => `<div class="c">${no(i)}<h3>${h}</h3><p>${p}</p></div>`).join('')}</div>`],
  ];
  // Out (Kunal, 7 Oct 2026): 2 Two across, 4 Three across, 5 Ivory cards, 7 One panel.
  const DROP = ['o1', 'o3', 'o4', 'o6'];
  for (let i = V.length - 1; i >= 0; i--) if (DROP.includes(V[i][0])) V.splice(i, 1);
  const CHEV = (d) => `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const KEY = 'mmt-out-v';
  let k = 0;
  try { const s = Number(localStorage.getItem(KEY)); if (Number.isInteger(s) && s >= 0 && s < V.length) k = s; } catch (e) {}
  function paint(root) {
    const [id, name, html] = V[k];
    root.innerHTML = `<button type="button" class="cmpv-arrow cmpv-arrow--prev" aria-label="Previous version">${CHEV('M12.5 4.5 7 10l5.5 5.5')}</button><button type="button" class="cmpv-arrow cmpv-arrow--next" aria-label="Next version">${CHEV('M7.5 4.5 13 10l-5.5 5.5')}</button>
      <div class="outv"><div class="cmpv-pill"><span><b>${k + 1} / ${V.length}</b>${name}</span></div>${id === 'o0' ? html : `<div class="ov">${html}</div>`}</div>`;
    root.querySelector('.cmpv-arrow--prev').onclick = () => go(root, -1);
    root.querySelector('.cmpv-arrow--next').onclick = () => go(root, 1);
  }
  function go(root, step) {
    k = (k + step + V.length) % V.length;
    try { localStorage.setItem(KEY, String(k)); } catch (e) {}
    paint(root);
  }
  const tick = () => { const root = document.querySelector('[data-out-root]'); if (root && !root.firstChild) paint(root); };
  setInterval(tick, 250); tick();
  document.addEventListener('keydown', (e) => {
    const root = document.querySelector('[data-out-root]');
    if (!root || /input|textarea|select/i.test((e.target && e.target.tagName) || '')) return;
    const r = root.getBoundingClientRect();
    if (r.bottom < innerHeight * 0.3 || r.top > innerHeight * 0.7) return;
    if (e.key === 'ArrowLeft') go(root, -1);
    if (e.key === 'ArrowRight') go(root, 1);
  });
})();
