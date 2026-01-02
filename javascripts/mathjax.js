// 1) Configure MathJax (must be set BEFORE MathJax loads)
window.MathJax = {
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    processEscapes: true
  },
  options: {
    // Material + arithmatex wrap math in elements with class "arithmatex"
    processHtmlClass: "arithmatex"
  }
};

// 2) Re-typeset on every MkDocs Material page navigation/render
// document$ is provided by Material
document$.subscribe(() => {
  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise();
  }
});