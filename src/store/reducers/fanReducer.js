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
    return updateObject( state, {
        fans: action.fans,
        loading: false
    })
}
export default projectReducer