
const btn = document.querySelector("#experience-section .view-toggle");
const content = document.querySelector("#experience-section .collapsible");

btn.addEventListener("click", () => {
content.classList.toggle("expanded");
btn.textContent = content.classList.contains("expanded")
    ? "View Less"
    : "View More";
});

