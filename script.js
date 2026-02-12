(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  if (!form || !note) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Demo-only behavior: shows a message rather than sending.
    note.textContent = "Thanks! This is a demo form — hook it up to email or a backend to receive messages.";

    // Clear after a bit.
    window.setTimeout(() => {
      note.textContent = "";
    }, 7000);

    form.reset();
  });
})();
