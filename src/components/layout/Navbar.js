import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title}) => {
    return (
        <nav className="navbar bg-primary">
            <h1><i className={icon} /> {title} </h1>
        </nav>
    )
}

Navbar.defaultProps = {
    title:  'My application', 
    icon: 'fas fa-laptop-code'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
