import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TextotInput from './TextoInput'

class Items extends Component{
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  DobleClick = () => {
    this.setState({ editing: false })
  }

  Guardar = (id, text,categoria) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text, categoria)
    }
    this.setState({ editing: false })    
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TextotInput text={todo.text}
                      categoria={todo.categoria}
                       editing={this.state.editing}
                       onSave={(text) => this.Guardar(todo.id, text, todo.categoria)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)} />

          <label onDoubleClick={this.DobleClick}>
            {todo.text} / Categoría: {todo.categoria} 
          </label>

          <a className="destroy"
                  onClick={() => deleteTodo(todo.id)} >
                  eliminar
          </a>        
        </div>
      )
    }

    return (
      <div className="card">
        <div className="" style={{border:'1px solid gray', padding: '5px', margin: '10px'}}>
          <div className={classnames({
            completed: todo.completed,
            editing: this.state.editing,
            
          })}>
            {element}
          </div>
        </div>
        
      </div>
    )
  }
}
export default Items;