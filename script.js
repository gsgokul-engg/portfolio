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



const form = document.getElementById("enquiryForm");
  const msg = document.getElementById("formMsg");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop default form action

    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        msg.style.display = "block";   // show success message
        form.reset();                  // clear form
      } else {
        msg.style.color = "red";
        msg.textContent = "❌ Something went wrong. Please try again.";
        msg.style.display = "block";
      }
    }).catch(() => {
      msg.style.color = "red";
      msg.textContent = "⚠️ Network error. Please try again.";
      msg.style.display = "block";
    });
  });