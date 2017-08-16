import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';


class ScrollToTopOnMount extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

export default ScrollToTopOnMount;