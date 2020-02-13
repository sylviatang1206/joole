import authReducer from './authReducer'
import fanReducer from './fanReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    fan: fanReducer
});

export default rootReducer