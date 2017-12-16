import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TextoInput extends Component{	
  static propTypes = {
    addTodo: PropTypes.func.isRequired,  
    onSave: PropTypes.func,
    text: PropTypes.string,
    categoria: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    //texto: '',
    text: this.props.text || '', //Estado interno de un componente. maneja diferencias del estado
    categoria: this.props.categoria
  }

  handleChange = e =>{
    this.setState({categoria:e.target.value});
  }

  onTextChange = e => {
    this.setState({texto: e.target.value.trim()})
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

  guardarTarea = () => {
    const { texto } = this.state
    const { categoria } = this.state
    console.log(categoria)

    if (texto.length !== 0) {
      this.props.addTodo(texto,categoria)
    }
    this.setState({texto: ''})
    this.setState({categoria:'Categoria'});
  }  

  render() {
    return (
    <div className="header">
        <div>
    			<div className="col col-md-4 offset-md-1">
					 <div className="panel panel-warning">
						<div className="panel-heading">
							<h3 className="panel-title">Agregar Tarea Nueva</h3>
						</div>
						
						<div className="panel-body">
              <input className= {
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
							
             <select value={this.state.categoria} 
             onChange={this.handleChange} 
             >  
                <option disabled="disabled" selected="selected">Categoria</option>
                <option value="Trabajo">Trabajo</option>
                <option value="Estudio">Estudio</option>
                <option value="Casa">Casa</option>
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