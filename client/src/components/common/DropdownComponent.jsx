import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropdownComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Sort by:</DropdownItem>
          <DropdownItem>Recent Activity</DropdownItem>
          <DropdownItem>Most Answered</DropdownItem>
          <DropdownItem>Most Commented</DropdownItem>
          <DropdownItem>Most Liked</DropdownItem>


        </DropdownMenu>
      </Dropdown>
    );
  }
}
