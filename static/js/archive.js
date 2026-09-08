(() => {
  const archive = document.querySelector('[data-post-archive]');
  if (!archive) return;

  const form = archive.querySelector('.title-search');
  const input = form.elements.q;
  const status = archive.querySelector('[role="status"]');
  const empty = archive.querySelector('.archive__empty');
  const normalize = (text) => text.normalize('NFC').toLocaleLowerCase('ko').trim();
  const groups = Array.from(archive.querySelectorAll('.archive__group'), (group) => ({
    element: group,
    link: archive.querySelector(`[data-year-link="${group.dataset.year}"]`),
    entries: Array.from(group.querySelectorAll('.archive__entry'), (entry) => ({
      element: entry,
      title: normalize(entry.querySelector('.archive__title').textContent),
    })),
  }));

  function filter(updateURL = true) {
    const query = normalize(input.value);
    let count = 0;
    for (const group of groups) {
      let matches = 0;
      for (const entry of group.entries) {
        const visible = entry.title.includes(query);
        entry.element.hidden = !visible;
        if (visible) matches++;
      }
      group.element.hidden = matches === 0;
      group.link.hidden = matches === 0;
      count += matches;
    }
    status.textContent = query ? `“${input.value.trim()}” 검색 결과 ${count}편` : `전체 ${count}편`;
    empty.hidden = count !== 0;
    if (updateURL) {
      const url = new URL(location.href);
      if (query) url.searchParams.set('q', input.value.trim());
      else url.searchParams.delete('q');
      url.hash = '';
      history.replaceState(null, '', url);
    }
  }

  function restore() {
    input.value = new URLSearchParams(location.search).get('q') || '';
    filter(false);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    filter();
  });
  input.addEventListener('input', (event) => {
    if (!event.isComposing) filter();
  });
  input.addEventListener('compositionend', () => filter());
  window.addEventListener('popstate', restore);
  restore();
})();
