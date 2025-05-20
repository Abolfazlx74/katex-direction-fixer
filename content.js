function fixDirection() {
  // Elements that display mathematics in a block
  document.querySelectorAll('.katex-display').forEach(el => {
    el.style.direction = 'ltr';
  });

  // Elements that display mathematics in an inline style   
  document.querySelectorAll('.katex:not(.katex-display)').forEach(el => {
    const parentP = el.closest('p');
    if (parentP) {
      parentP.style.display = "flex";
      parentP.style.alignItems = "center";
    }
    el.style.direction = "ltr";
    el.style.padding = "2px 4px";
  });
}

const observer = new MutationObserver(() => {
  fixDirection();
});

observer.observe(document.body, {childList: true, subtree: true});
fixDirection();
