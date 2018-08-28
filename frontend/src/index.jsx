import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'
import Routes from './main/routes'
import reducers from './main/reducers'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
&& window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, reduxDevTools) // promise para resolver os response do backend
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    , document.getElementById('app'))