/* navigation function */
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
/* NAvigation funtion*/

/* Animation effect For Scroll */
window.addEventListener('scroll', function () {
    var animationSection = document.querySelector('.gallery');
    var sectionPosition = animationSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    if (sectionPosition < screenPosition) {
      animationSection.classList.add('show');
    }
});

/* Animation for Cards Section */


window.addEventListener('scroll', function () {
  var animationSection = document.querySelector('.cards');
  var sectionPosition = animationSection.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;
  if (sectionPosition < screenPosition) {
    animationSection.classList.add('show');
  }
});


/*Animation for Review Section */
window.addEventListener('scroll', function () {
  var animationSection = document.querySelector('.car');
  var sectionPosition = animationSection.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;
  if (sectionPosition < screenPosition) {
    animationSection.classList.add('show');
  }
});



/* Animation Effect For Scroll */