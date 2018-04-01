import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './containers/App'
import { configureReducer } from './redux/reducer'
import { logicMiddleware } from './redux/logic'

const store = createStore(
  configureReducer,
  applyMiddleware(logicMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
