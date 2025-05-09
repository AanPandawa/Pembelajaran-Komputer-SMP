// Ganti Tema
document.getElementById('toggle-theme').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// Kuis
document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const jawaban = document.querySelector('input[name="jawaban"]:checked');
  const feedback = document.getElementById('feedback');
  if (!jawaban) {
    feedback.textContent = "Pilih dulu jawaban ya!";
    return;
  }
  feedback.textContent = jawaban.value === "benar"
    ? "✅ Jawaban benar, kamu hebat!"
    : "❌ Ups, coba lagi ya!";
});
