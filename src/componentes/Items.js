import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
//import TextotInput from './TextoInput'

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

  DobleClick = (e) => {
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
        <input text={todo.text}
                      categoria={todo.categoria}
                       editing={this.state.editing}
                       onSave={(text) => this.Guardar(todo.id, text, todo.categoria)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle-checkbox"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)} />

          <label className="content-textca" onDoubleClick={this.DobleClick}>
            <span className="text-tarea">{todo.text}</span>
            <span className={todo.categoria} id="categoria-items" >{todo.categoria}</span>
          </label>

          <a className="destroy"
              onClick={() => deleteTodo(todo.id)} >
              <i class="material-icons">close</i>
          </a>        
        </div>
      )
    }

    return (
      <div className="card">
        <div className="card-element">
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