import React from 'react';

export class LogoutButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.determineClass = this.determineClass.bind(this);
  }
  handleClick(e) {
    this.props.logout();
  }
  determineClass() {
    let className;
    this.props.loggedIn ? className = "logout-button-wrapper" : className = "hidden";
    return className;
  }
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={this.determineClass()}>
        Hello from logout button
      </div>
    )
  }
}
