const up = (btn) => {

  const btnUp = document.querySelector(btn);

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      btnUp.style.opacity = 1;
    } else {
      btnUp.style.opacity = 0;
    }
  })

  btnUp.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  })

}

export default up;