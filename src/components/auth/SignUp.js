import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/authActions'


class SignUp extends Component {
    componentDidMount() {
        this.props.loggedin()
    }
    state = {
            username: '',
            password: '',
            imageurl: ''
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }
        )

    }
    handleSubmit = (e) => {
        e.preventDefault();
        let user = this.state;
        let authRedirect = null;
        console.log(user);
        axios.post('http://localhost:8080/signup',user)
        .then(res => { 
            console.log(res) 
            this.props.history.push("/signin");

        })
        .catch(err => {alert("invalid")})
        
    }
    render() {
        console.log(this.props);
        if(this.props.token){
            this.props.history.push("/");
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Sign Up
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
                        <label htmlFor="imageurl">Profile image</label>
                        <input type="text" name="imageurl" value={this.state.imageurl} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-3 z-depth-0" type="submit">SignUp</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
    loggedin: () => dispatch(actions.loggedin())
}
}
const mapStateToProps = state => {
    return {
        token: state.auth.token,
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)

