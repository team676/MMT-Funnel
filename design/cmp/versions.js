// Section 5's versions on the live page, flipped with arrows while Kunal picks (7 Oct 2026). The data and renderers are
// curriculum/compare.html's; version 0 is the light-and-gold design the page had. The pick is remembered in this browser.
(() => {

  const CHECK = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.4 8.5l3 3 6.2-6.8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CROSS = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.6 4.6l6.8 6.8M11.4 4.6l-6.8 6.8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>';
  const NOW = ['Fifteen setups screaming at you and no way to tell which one is real', 'A new ICT model every week, back to square one every Monday', 'Guessing daily bias and finding out which way it went after the move', 'Three hours on the charts and a flat account to show for it', 'Profitable some weeks, can’t make it stick', 'Wondering if you’re just not built for this'];
  const FRI = ['One filter that tells you which ICT setup to take and which to skip, in under a minute', 'One process you run every session, so every week builds on the last', 'Your bias called before the open, with a reason you can say out loud', 'One trade, 30 minutes, laptop shut, evenings back', 'Green weeks that stack, the kind you pass a challenge with and keep', 'A written plan in your hand and the calm of finally knowing why'];
  const V = [
    ['v1', 'Slate and ivory', 'Right Now sits back in the day cards’ slate; By Friday is the bright card, on ivory instead of gold fill. Gold is the only accent: the ticks and the heading. No VS badge, no highlighter box.', ''],
    ['v2', 'All dark, gold frame', 'Both cards in the page’s own dark. By Friday is set apart by a gold hairline and a faint gold wash, white text and gold ticks. A quiet vs in a hairline circle.', '<div class="vsb" aria-hidden="true">vs</div>'],
    ['v3', 'Paper', 'Two light cards side by side like a printed comparison: cool grey for Right Now, white for By Friday, navy type, gold ticks in navy squares. The most report-like.', ''],
    ['v4', 'Framed pair', 'From MK’s red and green frames, grown up: both cards dark, a thin coloured frame with a bar along the top instead of neon borders; red for where you are, the page’s own candle green for By Friday.', ''],
    ['v5', 'Paper and gold, numbered', 'From MK’s white and gold: Right Now on warm white under a black rule, By Friday on a flat, quieter gold with white rows numbered 01 to 06.', '', true],
    ['v6', 'Paper and slate, numbered', 'From MK’s white and dark: Right Now on warm white, By Friday on the day cards’ slate in a thin gold frame, rows numbered 01 to 06 in gold squares.', '', true],
    ['v7', 'Warm white and green', 'From MK’s white and green Before / After: Right Now on warm white under a red rule, By Friday on a deeper, quieter green with white rows and dark tick squares.', ''],
    ['v8', 'One frame, a gold divide', 'From MK’s split panel: one slate frame split down the middle by a gold line; Right Now in muted grey, By Friday in gold and white.', ''],
    ['v9', 'Tinted frames', 'From MK’s red and green frames: slate cards in thin red and green frames with a faint wash of the same colour from the top corner instead of a glow.', ''],
    ['v10', 'Header bars', 'From MK’s red and green title bars: slate cards with the label in a solid bar across the top, the colours a step deeper and quieter.', ''],
  ];
  const item = (mk, t) => `<div class="it"><span class="mk">${mk}</span><span>${t}</span></div>`;
  /* 11-13, mine. */
  const FLAT = '<svg viewBox="0 0 150 34" aria-hidden="true"><path d="M2 20 L14 14 L24 23 L36 16 L46 25 L58 15 L70 22 L80 18 L92 26 L104 16 L114 23 L126 17 L138 24 L148 19" fill="none" stroke="#5D6874" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>';
  const RISE = '<svg viewBox="0 0 150 34" aria-hidden="true"><defs><linearGradient id="rg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFC72C" stop-opacity=".22"/><stop offset="1" stop-color="#FFC72C" stop-opacity="0"/></linearGradient></defs><path d="M2 31 L16 28 L26 29 L40 24 L50 25 L64 20 L74 21 L88 15 L98 16 L112 10 L122 11 L136 5 L148 3 L148 34 L2 34 Z" fill="url(#rg)"/><path d="M2 31 L16 28 L26 29 L40 24 L50 25 L64 20 L74 21 L88 15 L98 16 L112 10 L122 11 L136 5 L148 3" fill="none" stroke="#FFC72C" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>';
  const DASH = '<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M4 9h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  const TICK = '<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M3.5 9.4l3.4 3.3 7.6-8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const LONG = '<svg viewBox="0 0 72 12" preserveAspectRatio="none" aria-hidden="true"><path d="M1 6h68M63 1.5l5 4.5-5 4.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const n2 = (i) => String(i + 1).padStart(2, '0');
  V.unshift(
    ['v11', 'Ledger', 'Mine, for a mature audience. One statement-style table on slate: numbered rows, the way it is now in grey, By Friday in white along a single gold rule. No icons, no colour fills: it reads like an account statement.', '', false,
      `<div class="ledger"><div class="lg-r lg-h"><span></span><span class="a">Right Now</span><span class="b">By Friday</span></div>${NOW.map((t, i) => `<div class="lg-r"><span class="n">${n2(i)}</span><span class="a">${t}</span><span class="b">${FRI[i]}</span></div>`).join('')}</div>`],
    ['v12', 'Equity curves', 'Mine. Two slate cards, and under each label the account it describes: a flat, choppy line for Right Now, a steady rising one in gold for By Friday. Plain dashes and thin gold ticks, no squares.', '', false,
      `<div class="vs v12"><div class="card now"><h3 class="lbl">Right Now ${FLAT}</h3>${NOW.map((t) => item(DASH, t)).join('')}</div><div class="card fri"><h3 class="lbl">By Friday ${RISE}</h3>${FRI.map((t) => item(TICK, t)).join('')}</div></div>`],
    ['v13', 'Stacked turnarounds', 'Mine. Six slate rows in the day cards’ style, one per change: the old way in grey, a long gold arrow, the new way in white. Reads as a before and after, line by line.', '', false,
      `<div class="st"><div class="st-h"><span class="a">Right Now</span><span></span><span class="b">By Friday</span></div>${NOW.map((t, i) => `<div class="st-r"><span class="a">${t}</span><span class="ar">${LONG}</span><span class="b">${FRI[i]}</span></div>`).join('')}</div>`],
  );
  const V0 = "<div class=\"mmt-vs\">\n  <div class=\"mmt-vs__card mmt-vs__card--now\"><h3 class=\"mmt-vs__lbl\">Right Now</h3><div class=\"mmt-vs__it\"><span class=\"mmt-vs__x\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.5 3.5l9 9M12.5 3.5l-9 9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"/></svg></span><span>Fifteen setups screaming at you and no way to tell which one is real</span></div><div class=\"mmt-vs__it\"><span class=\"mmt-vs__x\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.5 3.5l9 9M12.5 3.5l-9 9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"/></svg></span><span>A new ICT model every week, back to square one every Monday</span></div><div class=\"mmt-vs__it\"><span class=\"mmt-vs__x\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.5 3.5l9 9M12.5 3.5l-9 9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"/></svg></span><span>Guessing daily bias and finding out which way it went after the move</span></div><div class=\"mmt-vs__it\"><span class=\"mmt-vs__x\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.5 3.5l9 9M12.5 3.5l-9 9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"/></svg></span><span>Three hours on the charts and a flat account to show for it</span></div><div class=\"mmt-vs__it\"><span class=\"mmt-vs__x\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.5 3.5l9 9M12.5 3.5l-9 9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"/></svg></span><span>Profitable some weeks, can\u2019t make it stick</span></div><div class=\"mmt-vs__it\"><span class=\"mmt-vs__x\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.5 3.5l9 9M12.5 3.5l-9 9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"/></svg></span><span>Wondering if you\u2019re just not built for this</span></div></div>\n  <div class=\"mmt-vs__card mmt-vs__card--fri\"><h3 class=\"mmt-vs__lbl\">By Friday</h3><div class=\"mmt-vs__it\"><span class=\"mmt-vs__ok\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.4 8.5l3 3 6.2-6.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span>One filter that tells you which ICT setup to take and which to skip, in under a minute</span></div><div class=\"mmt-vs__it\"><span class=\"mmt-vs__ok\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.4 8.5l3 3 6.2-6.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span>One process you run every session, so every week builds on the last</span></div><div class=\"mmt-vs__it\"><span class=\"mmt-vs__ok\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.4 8.5l3 3 6.2-6.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span>Your bias called before the open, with a reason you can say out loud</span></div><div class=\"mmt-vs__it\"><span class=\"mmt-vs__ok\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.4 8.5l3 3 6.2-6.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span>One trade, 30 minutes, laptop shut, evenings back</span></div><div class=\"mmt-vs__it\"><span class=\"mmt-vs__ok\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.4 8.5l3 3 6.2-6.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span>Green weeks that stack, the kind you pass a challenge with and keep</span></div><div class=\"mmt-vs__it\"><span class=\"mmt-vs__ok\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3.4 8.5l3 3 6.2-6.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span>A written plan in your hand and the calm of finally knowing why</span></div></div>\n  <div class=\"mmt-vs__badge\" aria-hidden=\"true\">VS</div>\n</div>";
  const ALL = [['cv0', 'Current: light and gold', '', '', false, V0, true], ...V];
  const CHEV = (d) => `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const KEY = 'mmt-cmp-v';
  const label = (k) => (k === 0 ? 'Current' : k <= 3 ? String(k + 10) : String(k - 3));
  let k = 0;
  try { const s = Number(localStorage.getItem(KEY)); if (Number.isInteger(s) && s >= 0 && s < ALL.length) k = s; } catch (e) {}

  function paint(root) {
    const [id, name, note, badge, num, body] = ALL[k];
    const grid = body || `<div class="vs">
      <div class="card now"><h3 class="lbl">Right Now</h3>${NOW.map((t) => item(CROSS, t)).join('')}</div>
      <div class="card fri"><h3 class="lbl">By Friday</h3>${FRI.map((t, i) => item(num ? `0${i + 1}` : CHECK, t)).join('')}</div>
      ${badge}
    </div>`;
    root.innerHTML = `<div class="cmpv"><button type="button" class="cmpv-arrow cmpv-arrow--prev" aria-label="Previous version">${CHEV('M12.5 4.5 7 10l5.5 5.5')}</button><button type="button" class="cmpv-arrow cmpv-arrow--next" aria-label="Next version">${CHEV('M7.5 4.5 13 10l-5.5 5.5')}</button>
      <div class="${id}${body && id !== 'cv0' ? ' m' : ''}">
        <div class="cmpv-pill"><span><b>${k + 1} / ${ALL.length}</b>${label(k) === 'Current' ? '' : '#' + label(k) + ' · '}${name}</span></div>
        <h2>Your ICT Trading <span class="r">Right Now</span> vs. <span class="g">After The 5-Day Challenge</span></h2>
        ${grid}
        <div class="cta"><a class="btn" href="#">Join the 5 Day Challenge</a><small>Sixty minutes a night.</small></div>
      </div></div>`;
    root.querySelector('.cmpv-arrow--prev').onclick = () => go(root, -1);
    root.querySelector('.cmpv-arrow--next').onclick = () => go(root, 1);
  }
  function go(root, step) {
    k = (k + step + ALL.length) % ALL.length;
    try { localStorage.setItem(KEY, String(k)); } catch (e) {}
    paint(root);
  }
  // The page is drawn by the Claude Design runtime, so wait for the section, and paint again if it is ever redrawn empty.
  const tick = () => { const root = document.querySelector('[data-cmp-root]'); if (root && !root.firstChild) paint(root); };
  setInterval(tick, 250); tick();
  document.addEventListener('keydown', (e) => {
    const root = document.querySelector('[data-cmp-root]');
    if (!root || /input|textarea|select/i.test((e.target && e.target.tagName) || '')) return;
    const r = root.getBoundingClientRect();
    if (r.bottom < innerHeight * 0.3 || r.top > innerHeight * 0.7) return;
    if (e.key === 'ArrowLeft') go(root, -1);
    if (e.key === 'ArrowRight') go(root, 1);
  });
})();
