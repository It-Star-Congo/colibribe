// Formulaire EmailJS (inchangé)
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const messageBox = document.getElementById("form-message");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const contact = document.getElementById("contact").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      const payload = {
        service_id: "service_eip0lei",
        template_id: "template_7izxe49",
        user_id: "0itHGT0RE2JJZzn8U",
        template_params: { name, contact, subject, message },
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
          }
        })
        .catch(() => {
          messageBox.textContent = "❌ Problème de connexion.";
          messageBox.style.color = "red";
        });
    });
  }

  // Menu mobile
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggle) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Scroll fluide
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// Swiper Hero Slider
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".hero-slider", {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    speed: 1000,
  });
});


// Applique les images de fond depuis l'attribut data-img
document.querySelectorAll('.card[data-img]').forEach(card => {
  const url = card.getAttribute('data-img');
  // On fixe sur l'élément lui-même et son ::before via style inline (hérité par ::before)
  card.style.backgroundImage = `url("${url}")`;
  // Accessibilité: rendre focusable
  card.setAttribute('tabindex', '0');
});

// Mobile / tactile : toggle au tap (et referme les autres)
const cards = Array.from(document.querySelectorAll('.card'));
const isTouch = matchMedia('(hover: none), (pointer: coarse)').matches;

if (isTouch) {
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // si on clique déjà une carte ouverte, on la ferme
      if (card.classList.contains('is-open')) {
        card.classList.remove('is-open');
        return;
      }
      // fermer les autres
      cards.forEach(c => c.classList.remove('is-open'));
      // ouvrir celle-ci
      card.classList.add('is-open');
    });
  });

  // fermer si on clique en dehors
  document.addEventListener('click', (e) => {
    const clickedCard = e.target.closest('.card');
    if (!clickedCard) cards.forEach(c => c.classList.remove('is-open'));
  });
}

// Clavier: Enter/Space pour ouvrir/fermer
cards.forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('is-open');
    }
  });
});



