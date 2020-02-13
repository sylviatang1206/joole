import axios from 'axios'

import * as actionTypes from './authTypes';


const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {"Authorization": 'Bearer ' + localStorage.getItem('token')}
})

export const fanSuccess = ( fans ) => {
    return {
        type: actionTypes.FETCH_FANS_SUCCESS,
        fans: fans
    }
}
export const fetchFans = () => {
    return dispatch => {
        instance.get('api/getFan')
            .then(res => {
                console.log(res.data);
                const fetchedFans = [];
                for (let key in res.data ){
                    fetchedFans.push({
                        ...res.data[key],
                        id:key
                    });
                }
                dispatch( fanSuccess (fetchedFans));
            })
            .catch( err =>{
                console.log(err)
            })
    }
}