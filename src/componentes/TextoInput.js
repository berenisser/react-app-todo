import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

class TextoInput extends Component{	
  static propTypes = {
    addTodo: PropTypes.func.isRequired,  
    onSave: PropTypes.func,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
   // texto: '',
    text: this.props.text || '', //Estado interno de un componente. maneja diferencias del estado
    categoria: this.props.categoria
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

guardarTarea = () => {
    const { texto } = this.state

    if (texto.length !== 0) {
      this.props.addTodo(texto)
    }
  }

  onTextChange = e => {
    this.setState({
      texto: e.target.value.trim()
    })
  }

  
guardarTarea = () => {
    const { texto } = this.state

    if (texto.length !== 0) {
      this.props.addTodo(texto)
    }
    console.log(texto)
  }

  cambiarTarea = e => {
    this.props.onTextChange(e)
    this.setState({ text: e.target.value })
  }

  marcarTarea = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  guardarOption = e => {
    this.setState({selectValue:e.target.value})
  }
  

  render() {
    return (
    //     <div>
    //   <input className={
    //     classnames({
    //       edit: this.props.editing,
    //       'new-todo': this.props.newTodo
    //     })}
    //     type="text"
    //     placeholder={this.props.placeholder}
    //     autoFocus="true"
    //     value={this.state.text}
    //     onBlur={this.marcarTarea}
    //     onChange={this.cambiarTarea}
    //     onKeyDown={this.enviarTarea} />  

    //     <select className="custom-select btn-tarea">
	// 						  <option selected>Escoge una catergoría</option>
	// 						  <option value="trabajo">Trabajo</option>
	// 						  <option value="estudios">Estudios</option>
	// 						  <option value="casa">Casa</option>
	// 	</select>

    //     <button type="button" 
    //     id='crearTarea' onClick={this.guardarTarea}
    //     className="btn btn-warning form-control btn-tarea">Crear Tarea</button>
    //      </div>

    <div className="header">
        <div>
    			<div className="col col-md-4 offset-md-1">
					<div className="panel panel-warning">
						<div className="panel-heading">
							<h3 className="panel-title">Agregar Tarea Nueva</h3>
						</div>
						
						<div className="panel-body">
              <input className={
                    classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                    })} 
        className="form-control" 
              type="text"
              placeholder="¿Que tienes que hacer?"
              autoFocus="true"
              value={this.state.texto}
              onChange={this.onTextChange}/>
							
							<select className="custom-select btn-tarea" 
                                    onChange={this.guardarOption}>
							  <option selected>Escoge una catergoría</option>
							  <option value="trabajo">Trabajo</option>
							  <option value="estudios">Estudios</option>
							  <option value="casa">Casa</option>
							</select>
              <button type="button" 
              id='crearTarea' onClick={this.guardarTarea}
              className="btn btn-warning form-control btn-tarea">Crear Tarea</button>
						</div>
					</div>
				</div>
		   </div>           
     </div>
    )
  }
}
export default TextoInput;