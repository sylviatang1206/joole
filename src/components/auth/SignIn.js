import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/authActions'

import axios from 'axios';


class SignIn extends Component {

    componentDidMount() {
        this.props.loggedin()

    }
    state = {
        username: "",
        password: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.userLogin(this.state);
    }
    
    
    render() {
        //console.log(this.props);
        if(this.props.token){
            this.props.history.push("/");
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        SignIn
                    </h5>
                    <div className="input-field">
                        <label htmlFor="username">Username or Email</label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-3 z-deptth-0" type="submit">SignIn</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
    userLogin: userInfo => dispatch(actions.userLoginAction(userInfo)),
    loggedin: () => dispatch(actions.loggedin())

}
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


