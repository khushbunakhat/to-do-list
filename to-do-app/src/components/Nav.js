import React from 'react';
import {
    Link, useNavigate
} from 'react-router-dom';
const Nav = () => {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/signup')
    }
    return (
        <div>
                    <ul className="nav-ul nav-right">
                        <li> <Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/">TodoList</Link></li>
                        <li> <Link onClick={logout} to="/signup">Logout </Link></li>
                    </ul>
        </div>
    )
}

export default Nav;