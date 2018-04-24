import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Quill from 'quill'
import QuillCursors from 'quill-cursors'

export class ReactQuillLite extends Component {
  componentDidMount() {
    Quill.register('modules/cursors', QuillCursors)

    this.editor = new Quill(this.editorNode, {
      theme: this.props.theme,
      placeholder: this.props.placeholder,
      modules: {
        'cursors':true
      }
    })
    this.props.passUpQuill(this.editor)
    //for testing purposes..
    window.editor = this.editor

  }

  shouldComponentUpdate() {
     return false // never rerender
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.stringVal !== nextProps.stringVal) {
      this.editor.setText(nextProps.stringVal+'\n')
      this.editor.setSelection(nextProps.idx+1,'api')
    }
  }

  render() {
    return <div ref={el => this.editorNode = el}/>
  }
}

ReactQuillLite.propTypes = {
  theme: PropTypes.string,
  placeholder: PropTypes.string,
  passUpQuill: PropTypes.func
}

ReactQuillLite.defaultProps = {
  theme: 'bubble',
  placeholder: 'Write something...'
}
