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



document.querySelectorAll(".drop-down").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const content = card.querySelector(".exp-txt-cont");
    const img = btn.querySelector("img");

    if (content.classList.contains("open")) {
     
      content.style.maxHeight = content.scrollHeight + "px";
      requestAnimationFrame(() => {
        content.style.maxHeight = "0px";
      });
      content.classList.remove("open");
      img.classList.remove("rotate");
    } else {
      
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
      img.classList.add("rotate");

     
      content.addEventListener(
        "transitionend",
        () => {
          if (content.classList.contains("open")) {
            content.style.maxHeight = "none";
          }
        },
        { once: true }
      );
    }
  });
});