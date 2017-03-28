import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

function reducer(state, action) {
    switch (action.type) {
        case 'onTabChange':
            state.activeTab = state.activeTab === 0 ? 1 : 0;
            return Object.assign({}, state);
        case 'getCourseList':
            state.courseList = action.listData;
            state.curList = state.courseList.slice(state.page*20, 21);
            return Object.assign({}, state);
        case'changePage':
            state.page = action.page;
            return Object.assign({}, state);
        default:
            return state
    }
}
export default createStore(reducer,
    {activeTab: 0, page: 0, courseList: [], curList: []},
    applyMiddleware(thunk));