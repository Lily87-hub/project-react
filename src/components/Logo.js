import React from 'react';
import logo from '../img/logo192.png';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo"/>
            <h3>React World</h3>
        </div>
    );
};

export default Logo;