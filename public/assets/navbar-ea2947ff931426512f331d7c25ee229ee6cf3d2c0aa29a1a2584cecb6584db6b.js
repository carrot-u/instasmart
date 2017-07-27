document.addEventListener('DOMContentLoaded', function () {
    // Code for making a sticky nav when scroll below navbar position
    const nav = document.querySelector('.navbar');
    if(nav){
      let topOfNav = nav.offsetTop;

      function fixNav() {
        if(window.scrollY >= topOfNav) {
          document.body.style.paddingTop = nav.offsetHeight + 'px';
          document.body.classList.add('fixed-nav');
        } else {
          document.body.classList.remove('fixed-nav');
          document.body.style.paddingTop = 0;
        }
      }
      window.addEventListener('scroll', fixNav);
    }
    // // Code for adding Search button and expanding nav search bar
    // const searchNavField = document.querySelector('.nav-search-field');
    const searchNavBar = document.querySelector('.nav-search-bar');
    if(searchNavBar){
      searchNavBar.addEventListener('focus', () => {
        nav.classList.add('condense-nav');
      });
      searchNavBar.addEventListener('blur', () => {
        nav.classList.remove('condense-nav');
      });
    }
});
