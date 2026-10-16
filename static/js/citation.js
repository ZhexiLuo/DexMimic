const copyButton = document.getElementById("copy-bibtex");
const bibtex = document.getElementById("citation-bibtex");
let resetLabel;

copyButton.addEventListener("click", async function copyBibtex() {
  await navigator.clipboard.writeText(bibtex.textContent);
  copyButton.textContent = "Copied!";
  clearTimeout(resetLabel);
  resetLabel = setTimeout(() => {
    copyButton.textContent = "Copy BibTeX";
  }, 2000);
});
