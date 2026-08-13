document.querySelectorAll('.gelatine').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.classList.remove('is-animating');
    void el.offsetWidth;
    el.classList.add('is-animating');
  });

  el.addEventListener('animationend', () => {
    el.classList.remove('is-animating');
  });
});