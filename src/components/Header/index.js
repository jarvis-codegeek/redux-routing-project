import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Header = () => {
    return (
        <div className="topnav">
            <h3 className="text-color">User Details</h3>
            <div className="align-right">                
                <Link to={'/addUser'}>Add User</Link>
                <Link to={'/listOfUsers'}>List of Users</Link>
            </div>
        </div>
    )
}

export default Header;