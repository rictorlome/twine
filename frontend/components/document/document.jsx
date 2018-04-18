import React from 'react'

export class Document extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <textarea placeholder={"Hello from the textarea"}></textarea>
      </div>
    )
  }
}
