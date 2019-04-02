import {UPDATE_EXPENSE} from '../constants/action-types';
const initialstate = {
    currentMonth: {
        drainage: "2000",
        water: "12000",
        security: "22000",
        electricity: "50010"
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