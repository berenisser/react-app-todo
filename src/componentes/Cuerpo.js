import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Cuerpo extends Component{
	

	render(){
		return (
			<div>
    			<div className="col col-md-4 offset-md-1">
					<div className="panel panel-warning">
						<div className="panel-heading">
							<h3 className="panel-title">Agregar Tarea Nueva</h3>
						</div>
						
						<div className="panel-body">
							<input type="text" className="form-control" name="" placeholder="¿Qué tarea necesitas hacer?"/>
							
							<select className="custom-select btn-tarea">
							  <option selected>Escoge una catergoría</option>
							  <option value="trabajo">Trabajo</option>
							  <option value="estudios">Estudios</option>
							  <option value="casa">Casa</option>
							</select>
							<button type="button" className="btn btn-warning form-control btn-tarea">Crear Tarea</button>
						</div>
					</div>
				</div>
		   </div>
		);
	}
}

export default Cuerpo;


