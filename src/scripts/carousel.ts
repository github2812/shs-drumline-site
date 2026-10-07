const track = document.querySelector<HTMLElement>(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");

const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let currentSlide = 0;

function updateCarousel() {
  if (!track || slides.length === 0) return;

  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle(
      "active",
      index === currentSlide
    );
  });
}

previous?.addEventListener("click", () => {
  currentSlide =
    currentSlide === 0
      ? slides.length - 1
      : currentSlide - 1;

  updateCarousel();
});

next?.addEventListener("click", () => {
  currentSlide =
    currentSlide === slides.length - 1
      ? 0
      : currentSlide + 1;

  updateCarousel();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentSlide = Number(
      dot.getAttribute("data-slide")
    );

    updateCarousel();
  });
});
