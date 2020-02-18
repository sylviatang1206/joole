import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/authActions'

class SignInLinks extends Component{    
    logout = () =>{
        this.props.onLogout();
    }
    render(){
        //console.log(this.props.imageurl)
    return (
        <ul className="right">
            <li><NavLink to='/'>Projects</NavLink></li>
            <li><NavLink to='/signin' onClick={this.logout}>LogOut</NavLink></li>
            <img src={this.props.imageurl} alt="" className="btn btn-floating" width="40em">
                
            </img>
        </ul>
    )
}
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
}
}

const mapStateToProps = state => {
    //console.log(state)
    return {
        token: state.auth.token,
        imageurl: state.auth.imageurl
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks)
