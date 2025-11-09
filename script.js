const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="container">
      <h1>¡Sabía que me perdonarías! 🥰💖</h1>
      <img src="https://i.imgur.com/5ZC3LzV.png" alt="Feliz" class="cute-img">
    </div>
  `;
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.7;
  const y = Math.random() * window.innerHeight * 0.7;
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
