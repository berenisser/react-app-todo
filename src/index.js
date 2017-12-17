import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import reducer from './reducers'
import './App.css';

const store = createStore(reducer)

render(
  <Provider store={store}>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

