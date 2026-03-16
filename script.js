if (window.lucide) {
  window.lucide.createIcons();
}

const chips = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".post-card[data-category]");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const selected = chip.dataset.filter;

    chips.forEach((item) => item.classList.toggle("is-active", item === chip));

    cards.forEach((card) => {
      const matches = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("is-hidden", !matches);
    });
  });
});
