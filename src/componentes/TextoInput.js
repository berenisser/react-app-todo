import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import classnames from 'classnames';

class TextoInput extends Component{	
  static propTypes = {
    addTodo: PropTypes.func.isRequired,  
    onSave: PropTypes.func,
    text: PropTypes.string,
    categoria: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool
    //newTodo: PropTypes.bool
  }

  state = {
    //texto: '',
    text: this.props.text || '', //Estado interno de un componente. maneja diferencias del estado
    categoria: this.props.categoria
  }

  handleChange = e =>{
    this.setState({categoria:e.target.value});
    console.log({categoria:e.target.value})
  }

  onTextChange = e => {
    this.setState({texto: e.target.value})
    console.log({texto: e.target.value})    
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

  guardarTarea = (e) => {
    const { texto } = this.state
    const { categoria } = this.state
    console.log(categoria)
  
    if (texto.length !== 0 && {categoria} !== '') {
      this.props.addTodo(texto,categoria)                  
    }      
      this.setState({ texto: '' })
      this.setState({categoria:''})      
}  

  render() {
    return (
    <div className="header">
        <div>
    			<div className="col col-md-4 offset-md-1">
					 <div className="panel panel-warning">
						<div className="panel-heading">
							<h3 className="panel-title"><i className="material-icons icons-panel">event_note</i>AGREGAR NUEVA TAREA</h3>
						</div>
						
						<div className="panel-body">
              <input 
              className="form-control form-input" 
              type="text"
              placeholder="¿Que tienes que hacer?"
              autoFocus="true"
              value={this.state.texto}
              onChange={this.onTextChange}/>
							
             <select className="select-box" value={this.state.categoria} 
             onChange={this.handleChange} 
             >  
                <option disabled="disabled" selected="selected" value=''>Categoria</option>
                <option value="trabajo">Trabajo</option>
                <option value="estudios">Estudio</option>
                <option value="casa">Casa</option>
              </select>
              

              <button type="button" 
              id='crearTarea' onClick={this.guardarTarea}
              className="btn btn-warning form-control btn-tarea">CREAR TAREA</button>
						</div>
					</div>
				</div>
		   </div>           
     </div>
    )
  }
}
export default TextoInput;