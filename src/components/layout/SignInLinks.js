import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/authActions'

const SignInLinks = ({imageurl}) => {
    console.log(imageurl)
    return (
        <ul className="right">
            <li><NavLink to='/'>Projects</NavLink></li>
            <li><NavLink to='/'>LogOut</NavLink></li>
            {/* <li><NavLink to='/' className="btn btn-floating"></NavLink></li> */}
            <img src={imageurl} alt="" class="btn btn-floating" width="40em"></img>
        </ul>
    )
}

const mapDispatchToProps = dispatch => {
    return {
    userLogin: userInfo => dispatch(actions.userLoginAction(userInfo))
}
}

const mapStateToProps = state => {
    console.log(state)
    return {
        token: state.auth.token,
        imageurl: state.auth.imageurl
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks)
