// script.js — FINAL WORKING VERSION

document.addEventListener("DOMContentLoaded", () => {
  console.log("DripLab script loaded ✨");

  const form = document.getElementById("earlyAccessForm");
  const emailInput = document.getElementById("emailInput");
  const button = document.getElementById("joinButton");
  const messageBox = document.getElementById("messageBox");

  if (!form) {
    console.error("❌ Form not found on the page.");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) {
      showMessage("Please enter a valid email.", "error");
      return;
    }

    button.disabled = true;
    button.innerText = "Joining…";

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("❌ Server error:", data);
        showMessage("Something went wrong. Try again.", "error");
      } else {
        console.log("✨ Success:", data);
        showMessage("You’re officially on the waitlist! 💜", "success");

        form.reset();
      }
    } catch (err) {
      console.error("❌ Network error:", err);
      showMessage("Network error. Try again.", "error");
    }

    button.disabled = false;
    button.innerText = "Join the Waitlist";
  });

  function showMessage(msg, type) {
    messageBox.innerText = msg;
    messageBox.className = type; // CSS styling handled by type
  }
});
