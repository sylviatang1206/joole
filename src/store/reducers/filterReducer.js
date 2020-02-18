import { updateObject } from '../utilities';
import  * as actionTypes from '../../store/actions/authTypes'

const initState = {
    airflowFilter : [5000, 10000],
    maxpowerFilter: [],
    loading: false
}

// const filterReducer = ( state = initState, action) => {
//     return updateObject(state,{
//         airflowFilter: action.airflowFilter,
//         maxpowerFilter: action.maxpowerFilter,
//     })
// }

const filterReducer = ( state = initState, action) => {
    switch(action.type) {
        case actionTypes.ADD_AIRFLOW_FILTER:
            console.log(action);
            console.log(state);
            return {
                ...state,
                airflowFilter: action.filter
            }
        
        default:
            return state
    }
}

export default filterReducer
