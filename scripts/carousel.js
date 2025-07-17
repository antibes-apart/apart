const carouselImages = document.querySelector('.carousel-images');
if (carouselImages) {
  const slides = carouselImages.querySelectorAll('img');
  let currentIndex = 0;

  function updateCarousel() {
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
  });

  updateCarousel();
}
