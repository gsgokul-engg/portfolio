document.querySelectorAll(".drop-down").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const textContainer = toggle.closest(".card").querySelector(".exp-txt-cont");
    const icon = toggle.querySelector("img");

    
    textContainer.classList.toggle("expanded");

    icon.classList.toggle("rotate");
  });
});


  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("open");
  });