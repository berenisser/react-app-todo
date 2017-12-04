import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cuerpo from './componentes/Cuerpo';
import TareasTrabajo from './componentes/TareasTrabajo';

const Routes = () => (
	
	 <Switch>
	   <Route exact path="/" component={Cuerpo} />
	   <Route path="/tareastrabajo" component={TareasTrabajo} /> 
	 </Switch>
	
);
export default Routes;