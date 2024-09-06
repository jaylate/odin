// Implementation of image carousel
//
// c - container of frame, slides and navigation
// (optional) autoScrollInterval - how often should slides change (in ms)

function carousel(c, autoScrollInterval = false) {
  const frame = c.querySelector(".frame");
  const slides = c.querySelectorAll(".slide");
  const left = c.querySelector(".left");
  const right = c.querySelector(".right");
  const slidesIndicators = c.querySelector(".slides");
  for (let i = 0; i < slides.length; i++) {
    const circle = document.createElement("span");
    circle.textContent = "○";
    circle.dataset.index = i;

    slidesIndicators.appendChild(circle);
    circle.addEventListener("click", () => {
      previousSlide = currentSlide; // FIXME: This is bad design
      currentSlide = circle.dataset.index;
      scrollCarousel();
    });
  }

  let currentSlide = 0;
  let previousSlide = 0;

  function scrollCarousel() {
    frame.replaceChild(
      slides[currentSlide].firstElementChild.cloneNode(),
      frame.firstElementChild,
    );
    slidesIndicators.children[previousSlide].textContent = "○";
    slidesIndicators.children[currentSlide].textContent = "●";
  }

  function scrollCarouselRight() {
    previousSlide = currentSlide;
    if (++currentSlide >= slides.length) currentSlide = 0;
    scrollCarousel();
  }

  function scrollCarouselLeft() {
    previousSlide = currentSlide;
    if (--currentSlide < 0) currentSlide = slides.length - 1;
    scrollCarousel();
  }

  right.addEventListener("click", scrollCarouselRight);
  left.addEventListener("click", scrollCarouselLeft);

  scrollCarousel(); // Display first slide

  if (autoScrollInterval) {
    setInterval(scrollCarouselRight, autoScrollInterval);
  }
}

export { carousel };
