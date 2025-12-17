const track = document.querySelector('.hero-track');
const dots = document.querySelectorAll('.dot');
let index = 0;

function autoSlide() {
  index = (index + 1) % 2;
  track.style.transform = `translateX(-${index * 50}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

setInterval(autoSlide, 4500);
