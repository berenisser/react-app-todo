import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

class TextoInput extends Component{	
  static propTypes = {
    onSave: PropTypes.func,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || '' //Estado interno de un componente. maneja diferencias del estado
  }
  /*
  enviarTarea = e => {
    const text = e.target.value.trim()
    if (e.keyCode  === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' }) //llama automaticamente a render sin forzar
      }
    }
  }
*/

  cambiarTarea = e => {
    this.props.onTextChange(e)
    this.setState({ text: e.target.value })
  }

  marcarTarea = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.marcarTarea}
        onChange={this.cambiarTarea}
        onKeyDown={this.enviarTarea} />  
    )
  }
}
export default TextoInput;