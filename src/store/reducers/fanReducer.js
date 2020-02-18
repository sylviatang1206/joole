import * as actionTypes from '../actions/authTypes';
import { updateObject } from '../utilities';


const initState = {
    fans: [],
    loading: false
}

// const projectReducer = (state = initState, action) => {
    
//     return state
// }


const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_FANS_SUCCESS:
            return updateObject( state, {
                fans: action.fans,
                loading: false
            })
    default:
        return state
    }
}


export default projectReducer

//a = {}
//{...a}

//a = [];
//[...a]
//shallow copy , deep copy
//spread operator