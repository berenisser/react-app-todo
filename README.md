Este proyecto fue creado con [Create React App](https://github.com/facebookincubator/create-react-app).

1. Primero se instaló con: `npm install -g create-react-app`
2. Se creó el proyecto con: `create-react-app react_todo`
3. cd react_todo
4. npm start y se visualiza los cambios en http://localhost:3000

Probamos de manera inicial con la creación de componenentes sencillos. Se inició creando la carpeta "componentes" en el folder "src". Dentro de la nueva carpeta se creó el archivo para cada componente. Por ejemplo Header.

```
import React, { Component } from 'react';

class Header extends Component{
	render(){
		return (
			<header className="App-header">
	          <h1 className="App-title">Lista de tareas</h1>
	        </header>
		);
	}
}

export default Header;
```
*Para que el componente se visualice se debe agregar en `src/App.js` <br>
*Es necesario importar el componente para que no se produzca un error `import Header from './componentes/Header';` <br>
*Se incluye dentro de render() como una etiqueta `<Header /> <br>




[Más info de cambios o componentes que se pueden emplear](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
