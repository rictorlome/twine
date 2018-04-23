import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Quill from 'quill'

export class ReactQuillLite extends Component {
  componentDidMount() {
    this.editor = new Quill(this.editorNode, {
      theme: this.props.theme,
      placeholder: this.props.placeholder,
    })
    //for testing purposes..
    window.editor = this.editor
  }

  shouldComponentUpdate() {
     return false // never rerender
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.stringVal !== nextProps.stringVal) {
      this.editor.setText(nextProps.stringVal+'\n')
    }
  }

  render() {
    return <div ref={el => this.editorNode = el}/>
  }
}

ReactQuillLite.propTypes = {
  theme: PropTypes.string,
  placeholder: PropTypes.string,
}

ReactQuillLite.defaultProps = {
  theme: 'bubble',
  placeholder: 'Write something...'
}
