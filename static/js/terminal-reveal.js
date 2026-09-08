(() => {
  const main = document.querySelector('main');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const navigation = performance.getEntriesByType('navigation')[0];
  if (!main || !main.animate || motion.matches || location.hash || scrollY > 0 ||
      navigation?.type === 'back_forward' || document.visibilityState === 'hidden') return;

  // Clip the existing page instead of splitting text or replacing its markup.
  // The DOM, text selection, links, and layout stay intact throughout playback.
  const events = new AbortController();
  let animation;
  let stopped = false;
  let safetyTimer;
  let resizeObserver;

  function finish() {
    if (stopped) return;
    stopped = true;
    clearTimeout(safetyTimer);
    main.classList.remove('terminal-reveal-pending');
    animation?.cancel();
    resizeObserver?.disconnect();
    events.abort();
  }

  for (const event of ['scroll', 'resize', 'keydown', 'pointerdown', 'beforeprint', 'pagehide']) {
    window.addEventListener(event, finish, { once: true, passive: true, signal: events.signal });
  }
  main.addEventListener('focusin', finish, { once: true, signal: events.signal });
  motion.addEventListener('change', finish, { once: true, signal: events.signal });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') finish();
  }, { signal: events.signal });
  main.classList.add('terminal-reveal-pending');
  safetyTimer = setTimeout(finish, 2400);

  async function reveal() {
    try {
      // A slow font download must never hold the page blank indefinitely.
      await Promise.race([document.fonts.ready, new Promise(resolve => setTimeout(resolve, 300))]);
      if (stopped) return;

      const box = main.getBoundingClientRect();
      const fragments = [];
      const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
      const range = document.createRange();
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (!node.textContent.trim() || node.parentElement.closest('script, style, pre, [hidden]')) continue;
        range.selectNodeContents(node);
        for (const rect of range.getClientRects()) {
          if (rect.width && rect.height && rect.top < innerHeight && rect.bottom > 0) {
            fragments.push({ top: rect.top, bottom: rect.bottom });
          }
        }
      }

      // Inline links and emphasis produce multiple rectangles on the same line.
      fragments.sort((a, b) => a.top - b.top);
      const lines = [];
      for (const fragment of fragments) {
        const previous = lines.at(-1);
        if (previous && fragment.top < previous.bottom - 1) {
          previous.bottom = Math.max(previous.bottom, fragment.bottom);
        } else {
          lines.push({ ...fragment });
        }
      }
      if (!lines.length || box.height <= 0) return finish();

      // Late images or fonts can move line breaks while the effect is playing.
      if (window.ResizeObserver) {
        resizeObserver = new ResizeObserver(() => {
          const current = main.getBoundingClientRect();
          if (Math.abs(current.height - box.height) > 1 || Math.abs(current.width - box.width) > 1) finish();
        });
        resizeObserver.observe(main);
      }

      // Play just the first screen; scrolling reveals the rest immediately.
      const frames = [{ clipPath: 'inset(0 0 100% 0)', offset: 0, easing: 'steps(1, end)' }];
      lines.forEach((line, index) => {
        const bottom = Math.max(0, box.bottom - line.bottom - 5);
        frames.push({
          clipPath: `inset(0 0 ${bottom}px 0)`,
          offset: (index + 1) / (lines.length + 1),
          easing: 'steps(1, end)',
        });
      });
      frames.push({ clipPath: 'inset(0 0 0 0)', offset: 1 });
      animation = main.animate(frames, { duration: Math.min((lines.length + 1) * 65, 1600), fill: 'both' });
      animation.finished.then(finish, finish);
    } catch {
      finish();
    }
  }
  reveal();
})();
