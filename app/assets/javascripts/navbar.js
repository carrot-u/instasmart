document.addEventListener('DOMContentLoaded', function () {
    

    // Code for making a sticky nav when scroll below navbar position
    const nav = document.querySelector('.navbar');
    const navOffsets = nav.getBoundingClientRect();
    let topOfNav = nav.offsetTop;
    // let topOfNav = navOffsets.top;



    function fixNav() {
      if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }
      console.log("scrollY", window.scrollY);
      console.log("tops of navbar", topOfNav);

    }

    window.addEventListener('scroll', fixNav);


    // const nav = document.querySelector('.navbar');
    // const navOffsets = nav.getBoundingClientRect();
    // const banner = document.querySelector('.banner');

    // // let topOfNav = navOffsets.top;
    // let topOfNav = nav.offsetTop;
    // console.log("tops of navbar", topOfNav);
    // console.log("scrollY", window.scrollY);
    // console.log("scrollTop", nav.scrollTop);


    // function fixNav() {
    //   if(window.scrollY >= topOfNav){ //(topOfNav - 134)) {
    //     document.body.style.paddingTop = nav.offsetHeight + 'px';
    //     document.body.classList.add('fixed-nav');
    //   } else {
    //     document.body.classList.remove('fixed-nav');
    //     document.body.style.paddingTop = 0;
    //   }
    // }

    // window.addEventListener('scroll', fixNav);


    // // Code for adding Search button and expanding nav search bar
    // const searchNavField = document.querySelector('.nav-search-field');
    // const searchNavBar = document.querySelector('.nav-search-bar');


    // searchNavField.addEventListener('focus', () => {
    //   searchNavBar.classList.add('nav-search-focus');
    // });
    // searchNavField.addEventListener('blur', () => {
    //   console.log("lose focus");
    //   searchNavBar.classList.remove('nav-search-focus');
    // });

});