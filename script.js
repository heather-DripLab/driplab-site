console.log("DripLab site loaded successfully ✨🔥");

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // Smooth scrolling for in-page links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Fade-in on scroll
  const faders = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  faders.forEach((el) => observer.observe(el));

  // Early access form message (with mailto action)
  const form = document.getElementById("early-form");
  const message = document.getElementById("form-message");

  if (form && message) {
    form.addEventListener("submit", () => {
      // Let mailto handle the actual send, just show a friendly note.
      message.textContent = "Opening your email app… if nothing happens, email us at hello@driplab.app 💖";
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const emailInput = document.getElementById("emailInput");
  const message = document.getElementById("signupMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    message.textContent = "Sending...";
    message.style.color = "#ffffffb0";

    const email = emailInput.value.trim();

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      message.textContent = "🎉 You're on the list!";
      message.style.color = "#8affc1";
      emailInput.value = "";
    } else {
      message.textContent = "Something went wrong. Try again.";
      message.style.color = "#ff8b8b";
    }
  });
});
