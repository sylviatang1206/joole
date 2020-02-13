import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'


const headerStyle = {
    background: '#90c1ed',
}
const Navbar = () => {
    return (
        <nav className="nav-wrapper z-depth-0" style={headerStyle}>
            <div className="container">
                <Link to='/' className="brand-logo left">Joole</Link>
                <SignInLinks />
                <SignOutLinks />
            
            </div>
        </nav>
        
    )
}

export default Navbar
