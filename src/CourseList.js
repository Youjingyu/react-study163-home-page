import React from 'react'
import { render } from 'react-dom'
//import { createStore } from 'redux'
import {Tab} from './components/CourseListTab.js'

//let store = createStore(todoApp);

let rootElement = document.getElementById('course_list')
//render(
//    <Provider store={store}>
//        <App />
//    </Provider>,
//    rootElement
//)
render(
    <Tab onTabClick = {console.log(1)} />,
    rootElement
)