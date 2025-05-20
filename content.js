function fixDirection() {
  document.querySelectorAll('.katex-display').forEach(el => {
    el.style.direction = 'ltr';
  });
  // document.querySelectorAll('.katex:not(.katex-display .katex) .katex-html').forEach(el => {
  //   if (1) {
  //     console.log(el.querySelectorAll('.mrel:not(.mrel.mtight)'))
  //   }
  // })
}

const observer = new MutationObserver(() => {
  fixDirection();
});

observer.observe(document.body, { childList: true, subtree: true });
fixDirection();
