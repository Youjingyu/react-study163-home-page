import { createStore } from 'redux'

function reducer(state = {activeTab: 0, page: 0, courseList: []}, action = {}) {
    switch (action.type) {
        case 'onTabChange':
            state.activeTab = state.activeTab === 0 ? 1 : 0;
            return Object.assign({}, state);
        case 'getCourseList':
            state.courseList = action.listData;
            return Object.assign({}, state);
        case'initCourseList':
            state.page = action.page;
            return Object.assign({}, state);
        default:
            return state
    }
}

export default createStore(reducer);