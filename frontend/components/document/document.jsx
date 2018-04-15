import React from 'react'

export class Document extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({name: e.target.value})
  }
  handleSubmit() {
    this.props.createUser(this.state).then((response) => {
      debugger
    });
  }

  render() {
    return (
      <div>
        <div id="new-user">
          <input onChange={this.handleChange}></input>
          <div onClick={this.handleSubmit}>CLICK TO MAKE NEW USER AND DOCUMENT</div>
        </div>
        <textarea></textarea>
      </div>
    )
  }
}
