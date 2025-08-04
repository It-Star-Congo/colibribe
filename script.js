// Gestion du formulaire de contact Colibri Fret
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const messageBox = document.getElementById("form-message");

  if (!contactForm) {
    console.error("Formulaire non trouvé : vérifiez l'ID 'contactForm'.");
    return;
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const payload = {
      service_id: "service_eip0lei",       // ✅ à remplacer par le tien
      template_id: "template_7izxe49",     // ✅ à remplacer par le tien
      user_id: "0itHGT0RE2JJZzn8U",
      template_params: {
        name,
        contact,
        subject,
        message
      },
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.ok) {
          messageBox.textContent = "✅ Message envoyé avec succès.";
          messageBox.style.color = "green";
          contactForm.reset();
        } else {
          messageBox.textContent = "❌ Une erreur est survenue. Réessayez.";
          messageBox.style.color = "red";
          console.error("EmailJS error:", res.statusText);
        }
      })
      .catch((err) => {
        messageBox.textContent = "❌ Problème de connexion. Vérifiez votre réseau.";
        messageBox.style.color = "red";
        console.error("Erreur réseau EmailJS:", err);
      });
  });
});

// Menu responsive (hamburger)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});
