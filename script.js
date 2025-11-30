console.log("DripLab script running…");

document.getElementById("scrollToForm").addEventListener("click", () => {
  document.getElementById("signup").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("waitlistForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("emailInput").value.trim();
  const source = document.getElementById("sourceInput").value;

  const successMsg = document.getElementById("successMessage");
  const errorMsg = document.getElementById("errorMessage");

  successMsg.classList.add("hidden");
  errorMsg.classList.add("hidden");

  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source })
    });

    const data = await response.json();

    if (response.ok) {
      successMsg.classList.remove("hidden");
      document.getElementById("emailInput").value = "";
    } else {
      console.error("Airtable error:", data);
      errorMsg.classList.remove("hidden");
    }
  } catch (err) {
    console.error("Network error:", err);
    errorMsg.classList.remove("hidden");
  }
});
