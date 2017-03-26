import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './reducer'
import App from './App'

let rootElement = document.getElementById('course_list');
//render(
//    <Provider store={store}>
//        <App />
//    </Provider>,
//    rootElement
//)
render(
    <Provider store={reducer}>
        <App />
    </Provider>,
    rootElement
)