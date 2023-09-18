function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

const toggleButton = document.getElementById("toggle-dark-mode");
toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleDarkMode();
});
