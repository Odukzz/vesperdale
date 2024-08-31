// Assuming you have a function to move to the next slide
function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  let activeIndex = [...slides].findIndex(slide => slide.classList.contains('s--active'));
  slides[activeIndex].classList.remove('s--active');
  slides[activeIndex].classList.add('s--prev');

  let nextIndex = (activeIndex + 1) % slides.length;
  slides[nextIndex].classList.add('s--active');
}

// Function to move to the previous slide
function prevSlide() {
  const slides = document.querySelectorAll('.slide');
  let activeIndex = [...slides].findIndex(slide => slide.classList.contains('s--active'));
  slides[activeIndex].classList.remove('s--active');

  let prevIndex = (activeIndex - 1 + slides.length) % slides.length;
  slides[prevIndex].classList.remove('s--prev');
  slides[prevIndex].classList.add('s--active');
}

// Attach these functions to your control elements
document.querySelector('.slider__control--right').addEventListener('click', nextSlide);
document.querySelector('.slider__control').addEventListener('click', prevSlide);

// this is code for the navbar 
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}