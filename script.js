const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="container fade-in">
      <h1>¡Sabía que me perdonarías, Dianita! 🥰💖</h1>
      <img src="feliz.jpg" alt="Feliz" class="cute-img float">
      <p class="fade-in" style="margin-top:20px;">Eres la mejor 💕</p>
    </div>
    <div class="hearts"></div>
  `;
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
