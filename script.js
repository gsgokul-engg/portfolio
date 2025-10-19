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
    event.preventDefault(); 

    const data = new FormData(form);

    fetch("https://formsubmit.co/gsgokul093@gmail.com", {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    })
    .then(response => {
      if (response.ok) {
        msg.textContent = "✅ Your message has been sent successfully!";
        msg.style.color = "green";
        msg.style.display = "flex";
        msg.style.justifyContent = "center";
        form.reset(); 
      } else {
        msg.textContent = "❌ Something went wrong. Please try again.";
        msg.style.color = "red";
        msg.style.display = "flex";
        msg.style.justifyContent = "center";
      }
    })
    .catch(() => {
      msg.textContent = "⚠️ Network error. Please try again.";
      msg.style.color = "red";
      msg.style.display = "flex";
      msg.style.justifyContent = "center";
    });
  });


 function openPopup(id) {
      document.getElementById(id).style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    function closePopup(id) {
      document.getElementById(id).style.display = 'none';
      document.body.style.overflow = 'auto';
    }