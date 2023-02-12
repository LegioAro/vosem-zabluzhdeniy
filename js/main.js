isResize('.footer__btn-dec', '.footer__btn-wrapper', '.footer__mob', 768, 'first');

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 130,
      behavior: 'smooth',
    });
  });
}

window.addEventListener('resize', () => {
  isResize('.footer__btn-dec', '.footer__btn-wrapper', '.footer__mob', 768, 'first');
});
