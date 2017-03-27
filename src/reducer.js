import { createStore, applyMiddleware } from 'redux'
import Ajax from 'ajax'

function reducer(state = {activeTab: 0, page: 0, courseList: []}, action = {}) {
    switch (action.type) {
        case 'onTabChange':
            state.activeTab = state.activeTab === 0 ? 1 : 0;
            return Object.assign({}, state);
        case 'getCourseList':
            state.courseList = action.listData;
            return Object.assign({}, state);
        case'changePage':
            state.page = action.page;
            return Object.assign({}, state);
        default:
            return state
    }
}
function thunkMiddleware(_ref) {
    var dispatch = _ref.dispatch;
    var getState = _ref.getState;

    return function (next) {
        return function (action) {
            return typeof action === 'function' ? action(dispatch, getState) : next(action);
        };
    };
}

//通过Redux.applyMiddleware创建store
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default createStoreWithMiddleware(reducer);