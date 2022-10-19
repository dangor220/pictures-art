const slider = (slides, dir, prev, next) => {
  const items = document.querySelectorAll(slides);


  let slideIndex = 1,
      paused = false;

  function showSlider(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    })

    items[slideIndex-1].style.display = 'block';
  }
  showSlider(slideIndex);

  function changeSlide(n) {
    showSlider(slideIndex += n);
  }

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', () => {
      changeSlide(-1);

      items[slideIndex-1].classList.add('slideInRight');
      items[slideIndex-1].classList.remove('slideInLeft');

      
    })
    nextBtn.addEventListener('click', () => {
      changeSlide(1);
      items[slideIndex-1].classList.add('slideInLeft');
      items[slideIndex-1].classList.remove('slideInRight');
    })
  } catch(e) {}

  function activateSlide() {
    if (dir === 'vertical') {
      paused = setInterval(() => {
        changeSlide(1);
        items[slideIndex-1].classList.add('slideInDown');
      }, 3000)
    } else {
      paused = setInterval(() => {
        changeSlide(1);
        items[slideIndex-1].classList.add('slideInLeft');
        items[slideIndex-1].classList.remove('slideInRight');
      }, 3000)
    }
  }
  activateSlide()

  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  })
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateSlide();
  })

}

export default slider;