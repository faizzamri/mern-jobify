import React from 'react';
import logo from '../assets/images/logo.svg'

const Logo = () => {
    return (
        <div>
            <img src={logo} alt="job tracker logo" className='logo'/>
        </div>
    );
};

export default Logo;