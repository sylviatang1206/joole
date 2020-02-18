import * as actionTypes from './authTypes';
import store from '../..';

export const test = (filter) => {
    return {
        type: actionTypes.ADD_AIRFLOW_FILTER,
        filter: filter
    }
}

export const addAirflowFilter = (filter) => {
    console.log('at action: ', filter);
    return dispatch => {
        // const token = localStorage.getItem('token');
        // if (!token) {
            dispatch(test(filter));
        // }
        // else{
        //     dispatch(loggedin());
        // }
    }
    // return {
    //     type: actionTypes.ADD_AIRFLOW_FILTER,
    //     filter:filter
    // }
    // // return dispatch => {
    //     // return {
    //     //     type: actionTypes.ADD_AIRFLOW_FILTER,
    //     //     filter: filter
    //     // }
    // // }

    // // store.dispatch(action)
}
export const addMaxpowerFilter = (filter) => {
    console.log(filter)
    return {
        type: actionTypes.ADD_MAXPOWER_FILTER,
        filter
    }
}