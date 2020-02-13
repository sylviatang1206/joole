import axios from 'axios'

import * as actionTypes from './authTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, username, imageurl) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        username: username,
        imageurl: imageurl
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('imageurl');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};


export const userLoginAction = user => {
    return (dispatch) => {
        dispatch(authStart());
        axios.post('http://localhost:8080/authenticate', user)
            .then(res => {
                console.log(res);
                    localStorage.setItem("token", res.data.jwt);
                    localStorage.setItem("username", res.data.username);
                    localStorage.setItem("imageurl", res.data.imageurl);
                    dispatch(authSuccess(res.data.jwt, res.data.username, res.data.imageurl));
                })
            .catch(err => {
                console.log(err)
            }
                
            )
    }

}

export const userSignupAction = user => {
    return (dispatch) => {
        dispatch(authStart());
        axios.post('http://localhost:8080/signup', user)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        }
    }
}

export const loginUser = userObj => {
        return {
            type: 'LOGIN_USER',
            token:userObj
        }
    }