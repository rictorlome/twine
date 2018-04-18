import React from 'react';

export class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(e) {
    this.setState({name: e.target.value})
  }
  handleClick() {
    this.props.createUser(this.state).then(
      () => this.props.history.push(`/documents/${this.props.lastDocPath}`)
    )
  }
  render() {
    return (
      <div>
        Hello from signup

        <div>
          <input placeholder={"What's your name?"}
            onChange={this.handleChange}
            />
        </div>

        <div onClick={this.handleClick}>
          Click here to submit
        </div>
      </div>
    )
  }
}
