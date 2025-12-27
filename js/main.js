function toggleMenu() {
  document.querySelector(".nav-links")
    .classList.toggle("active");
}
const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  statusText.textContent = "Sending...";

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbx6uUR5gAG4jFq8pSkx_KsE2KI6jSOdLMB3Ejwl1iPXkfy_W_wtIUP0FTpx-M9FRuxYmw/exec", {
      method: "POST",
      body: JSON.stringify(data)
    });

    if (response.ok) {
      statusText.textContent = "Thank you! We will contact you shortly.";
      form.reset();
    } else {
      statusText.textContent = "Something went wrong. Try again.";
    }
  } catch (error) {
    statusText.textContent = "Error submitting form.";
  }
});
function sendWhatsApp() {
  const phoneNumber = "919971310381"; // use country code, no +
  const message = "Hello! I’d like to know more about your services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
