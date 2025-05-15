document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-images");

  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll("img");
    const prevButton = carousel.parentNode.querySelector(".carousel-controls .prev");
    const nextButton = carousel.parentNode.querySelector(".carousel-controls .next");

    let index = 0;

    const updateCarousel = () => {
      const width = images[0].clientWidth;
      carousel.style.transform = `translateX(${-index * width}px)`;
    };

    nextButton.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateCarousel();
    });

    prevButton.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
  });
});
