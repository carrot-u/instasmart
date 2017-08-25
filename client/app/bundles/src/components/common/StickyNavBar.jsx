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
    if (this.refs.stickyNavRef) {
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
  }

  componentDidMount(){
    const nav = document.querySelector('.navbar');
    this.setState({
      topOfNav: nav.offsetTop,
      nav: nav,
    });
    window.addEventListener('scroll', this.fixNav);
  }

  componentWillUnmount(){
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
    window.removeEventListener('scroll', this.fixNav);
  }

  render(){
    return(
      <nav className={"navbar navbar-toggleable-md" + (this.props.isCondensed ? " condense-nav" : '')}>
        <div className="container-fluid" ref="stickyNavRef">
            {this.props.children}
        </div>
      </nav>
    );
  }
}

export default StickyNavbar;