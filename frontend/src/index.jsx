import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'
import { Provider } from 'react-redux'
import App from './main/app'
import reducers from './main/reducers'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
&& window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, reduxDevTools) // promise para resolver os response do backend
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))