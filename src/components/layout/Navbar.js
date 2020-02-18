import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import * as actions from '../../store/actions/authActions'
import { connect } from 'react-redux'



const headerStyle = {
    background: '#90c1ed',
}
const logoStyle = {
    paddingTop: '15px',
}
class Navbar extends Component {
    componentDidMount() {
        this.props.loggedin()
    }

    render(){
        //console.log(this.props);
        let link;
        if(this.props.token){
            link = <SignInLinks />
        }
        else{
            link = <SignOutLinks />
        }
    return (
        <nav className="nav-wrapper z-depth-0" style={headerStyle}>
            <div className="container">
            <img src="https://i.postimg.cc/fbfmZYFm/2.png" alt="" className="left" width="80em" style={logoStyle}></img>
                {/* <Link to='/' src="https://i.postimg.cc/fbfmZYFm/2.png" className="brand-logo left">Joole</Link> */}
                {link}
            
            </div>
        </nav>
        
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

