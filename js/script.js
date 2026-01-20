document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      alert("Заказ оформляется по телефону или в мессенджере 🐝");
    });
  });
});