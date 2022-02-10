new WOW().init(); 
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.project-pagination',
    type: 'bullets',
    bulletClass: 'project-bullet',
    bulletActiveClass: 'project-bullet-active',
    clickable: true,
    loop: true,
  },
  loop: true,
});