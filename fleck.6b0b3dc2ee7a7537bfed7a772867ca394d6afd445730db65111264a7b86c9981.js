(() => {
  // <stdin>
  (async function() {
    CSS.paintWorklet.addModule("https://unpkg.com/@georgedoescode/houdini-fleck");
    setTimeout(() => {
      document.querySelectorAll(".fleck-demo").forEach((el) => {
        el.style.width = "100%";
      });
    }, 250);
  })();
})();
