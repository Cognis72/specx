
function toggleTheme() {
  document.body.classList.toggle("light");
}

function toggleLang() {
  const elements = document.querySelectorAll("[data-th]");
  elements.forEach(el => {
    const current = el.innerText;
    const th = el.getAttribute("data-th");
    const en = el.getAttribute("data-en");
    el.innerText = current === th ? en : th;
  });
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}
