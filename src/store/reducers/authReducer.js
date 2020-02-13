import * as actionTypes from '../actions/authTypes'
import { updateObject } from '../utilities'

const initialState = {
    token: null,
    username: null,
    imageurl: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
    signup: false
}

const authStart = ( state, action ) => {
    return updateObject( state, { errer: null, loading: true });
}

const authSuccess = (state, action ) => {
    return updateObject( state, {
        token: action.token,
        username: action.username,
        imageurl: action.imageurl,
        error: null,
        loading: false
    });
}


const authFail = (state, action) => {
    return updateObject( state, {
        error: action.errer,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        username: null
    });
}

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

// const authReducer = (state = initialState, action) => {
//     switch (action.type) {

//         case 'LOGIN_USER':
//           return {...state, currentUser: action.token}
//         default:
//           return state;
//       }

// }
const authReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
}

export default authReducer
