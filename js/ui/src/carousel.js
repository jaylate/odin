// Implementation of image carousel
//
// c - container of frame, slides and navigation

// TODO:
// - Highlight which image is current in navigation in the bottom
// - Fix hardcoded styling
// - Auto slide after some delay

function carousel(c) {
  const frame = c.querySelector(".frame");
  const slides = c.querySelectorAll(".slide");
  const left = c.querySelector(".left");
  const right = c.querySelector(".right");
  let currentSlide = 0;

  function scrollCarousel() {
    frame.replaceChild(
      slides[currentSlide].firstElementChild.cloneNode(),
      frame.firstElementChild,
    );
  }

  right.addEventListener("click", () => {
    if (++currentSlide >= slides.length) currentSlide = 0;
    scrollCarousel();
  });
  left.addEventListener("click", () => {
    if (--currentSlide < 0) currentSlide = slides.length - 1;
    scrollCarousel();
  });
  scrollCarousel(); // Display first slide
}

export { carousel };
