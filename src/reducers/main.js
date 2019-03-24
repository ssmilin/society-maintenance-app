import {UPDATE_EXPENSE} from '../constants/action-types';
const initialstate = {
    currentMonth: {
        drainage: "7000",
        water: "10000",
        security: "20000",
        electricity: "50000"
    }
}
function rootReducer(state = initialstate, action)  {
    if (action.type === UPDATE_EXPENSE) {
        return Object.assign({}, state, {
            currentMonth: action.payload
        });
    }
    return state;
}

export default rootReducer;