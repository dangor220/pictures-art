const up = (btn) => {

  const btnUp = document.querySelector(btn),
        links = document.querySelectorAll('[href^="#"]');

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      btnUp.style.opacity = 1;
    } else {
      btnUp.style.opacity = 0;
    }
  })


  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const hash = this.hash,
            targetPosition = Math.round(document.querySelector(hash).getBoundingClientRect().top);
      
      window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
      });

      history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);

    })
  })

  // btnUp.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //       top: 0,
  //       behavior: "smooth"
  //   });
  // })

}

export default up;