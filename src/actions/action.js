import {UPDATE_EXPENSE} from '../constants/action-types';
function updateExpense (payload) {
    return {type: UPDATE_EXPENSE, payload};
}

export default updateExpense;