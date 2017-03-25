export default function(state = {}, action = 0) {
    switch (parseInt(action)) {
        case 0:
            return {active_tab: 1}
        case 1:
            return 0
        default:
            return {active_tab: 0}
    }
}