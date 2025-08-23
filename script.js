document.querySelectorAll(".drop-down").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const textContainer = toggle.closest(".card").querySelector(".exp-txt-cont");
    const icon = toggle.querySelector("img");

    // Toggle expanded/collapsed text
    textContainer.classList.toggle("expanded");

    // Rotate arrow
    icon.classList.toggle("rotate");
  });
});
