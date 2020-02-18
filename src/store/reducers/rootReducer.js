import authReducer from './authReducer'
import fanReducer from './fanReducer'
import filterReducer from './filterReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    fan: fanReducer,
    filter: filterReducer
});

export default rootReducer