$(".navbar-burger").on('click', event => {
  event.preventDefault();
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass('is-active');
})