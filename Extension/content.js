function fixDirection() {
  // Elements that display mathematics in a block
  document.querySelectorAll('.katex-display').forEach(el => {
    if(!el.closest('._tableContainer_80l1q_1')){
      el.style.direction = 'ltr';
    }
  });

  // Elements that display mathematics in an inline style   
  document.querySelectorAll('.katex:not(.katex-display)').forEach(el => {
    if(!el.closest('._tableContainer_80l1q_1')){
      const parentP = el.closest('p');
      if (parentP) {
        parentP.style.display = "flex";
        parentP.style.flexWrap = "wrap";
        if (isMultiline(parentP))parentP.style.alignItems = "center";
      }
      el.style.direction = "ltr";
      el.style.padding = "2px 4px";
    }
  });
}

function isMultiline(element) {
  return element.scrollHeight > element.clientHeight;
}

const observer = new MutationObserver(() => {
  fixDirection();
});

observer.observe(document.body, {childList: true, subtree: true});
fixDirection();
