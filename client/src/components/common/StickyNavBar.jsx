import React from 'react';

class StickyNavbar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isSticky: false,
			topOfNav: null,
			nav: null,
		};
		this.fixNav = this.fixNav.bind(this);
	}

	fixNav(){
   // Only make stick if is not currently stick AND window is beyond the nav
   if(!this.state.isSticky && window.scrollY >= this.state.topOfNav) {
      document.body.style.paddingTop = this.state.nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
      this.setState({isSticky: true});
    } 
    if(this.state.isSticky && !(window.scrollY >= this.state.topOfNav)){
      document.body.classList.remove('fixed-nav');
      document.body.style.paddingTop = 0;
      this.setState({isSticky: false});
    }
	}

	componentDidMount(){
		const nav = document.querySelector('.navbar');
		this.setState({
			topOfNav: nav.offsetTop,
			nav: nav,
		});
		window.addEventListener('scroll', this.fixNav);
	}

	render(){
		return(
			<nav className={"navbar navbar-toggleable-md"}>
				<div className="container-fluid">
					{this.props.children}
				</div>
			</nav>
		);
	}
}

export default StickyNavbar;


// document.addEventListener('DOMContentLoaded', function () {
//     // Code for making a sticky nav when scroll below navbar position
//     const nav = document.querySelector('.navbar');
//     if(nav){
//       let topOfNav = nav.offsetTop;

//       function fixNav() {
//         if(window.scrollY >= topOfNav) {
//           document.body.style.paddingTop = nav.offsetHeight + 'px';
//           document.body.classList.add('fixed-nav');
//         } else {
//           document.body.classList.remove('fixed-nav');
//           document.body.style.paddingTop = 0;
//         }
//       }
//       window.addEventListener('scroll', fixNav);
//     }
//     // // Code for adding Search button and expanding nav search bar
//     // const searchNavField = document.querySelector('.nav-search-field');
//     const searchNavBar = document.querySelector('.nav-search-bar');
//     if(searchNavBar){
//       searchNavBar.addEventListener('focus', () => {
//         nav.classList.add('condense-nav');
//       });
//       searchNavBar.addEventListener('blur', () => {
//         nav.classList.remove('condense-nav');
//       });
//     }
// });