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
  getUserMessage() {
    return (this.props.loggedIn ? `Hello, ${this.props.currentUser.name}` : "" );
  }
  render() {
    return (
      <div className={this.determineClass()}>
        {this.getUserMessage()}
        <div onClick={this.handleClick}>
          Click here to log out.
        </div>
      </div>
    )
  }
}
