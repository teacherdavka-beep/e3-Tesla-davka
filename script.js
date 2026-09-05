document.querySelectorAll(".slider-arrow").forEach((button) => {
  button.addEventListener("click", () => {
    const track = document.getElementById(button.dataset.target);
    const dir = Number(button.dataset.dir);
    const card = track.querySelector(".product-card");
    const step = card.offsetWidth + 48;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  });
});
