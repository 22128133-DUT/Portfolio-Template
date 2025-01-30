document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger = document.querySelector('.nav__hamburger');
    const navList = document.querySelector('.nav__list');
    const body = document.body;

    hamburger.addEventListener('click', () => {
      navList.classList.toggle('display-nav-list');
    });
  
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.classList.add(savedTheme);
      themeToggle.innerHTML = savedTheme === "light" 
        ? '<i class="fas fa-moon"></i>' 
        : '<i class="fas fa-sun"></i>';
    } else {
      body.classList.add("light"); // Default theme
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  
    themeToggle.addEventListener("click", () => {
      if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.replace("dark", "light");
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem("theme", "light");
      }
    });
  });
  