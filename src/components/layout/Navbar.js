import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'



const Navbar = () => {
    return (
        <nav className="nav-wrapper #90caf9 blue lighten-4">
            <div className="container">
                <Link to='/' className="brand-logo left">Joole</Link>
                <SignInLinks />
                <SignOutLinks />
            
            </div>
        </nav>
        
    )
}

export default Navbar
