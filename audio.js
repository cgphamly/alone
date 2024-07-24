// Optional: If you want to trigger the animation when scrolling into view
document.addEventListener('DOMContentLoaded', function() {
  var scrollAnimationElements = document.querySelectorAll('.scroll-animation');
  
  function checkScroll() {
    scrollAnimationElements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('animate');
      }
    });
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Check on page load and scroll
  checkScroll();
  window.addEventListener('scroll', checkScroll);
});
