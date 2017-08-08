document.addEventListener('DOMContentLoaded', function () {
  // Code for making a sticky nav when scroll below navbar position
  const nav = document.querySelector('.navbar');
  // // Code for adding Search button and expanding nav search bar
  // const searchNavField = document.querySelector('.nav-search-field');
  const searchNavBar = document.querySelector('.nav-search-bar');

  function fixNav() {
    if (window.scrollY >= nav.offsetTop) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
      document.body.style.paddingTop = 0;
    }
  }

  function condenseNav() {
    searchNavBar.classList.add('condense-nav');
  }

  if (nav) {
    window.addEventListener('scroll', fixNav);
  }

  if (searchNavBar) {
    searchNavBar.addEventListener('focus', condenseNav);
    searchNavBar.addEventListener('blur', condenseNav);
  }
});