import { createStore } from 'redux'

function reducer(state = {activeTab: 0}, action = {}) {
    switch (action.type) {
        case 'onTabChange':
            state.activeTab = state.activeTab === 0 ? 1 : 0;
            return Object.assign({}, state)
        case 1:
            return {active_tab: 1}
        default:
            return state
    }
}

export default createStore(reducer);