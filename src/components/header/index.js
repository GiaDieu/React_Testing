import React from 'react'
import './style.scss';
import Logo from '../../assets/graphics/logo.png';

const Header = () => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logoImage" src={Logo} alt="logo"/>
                </div>
            </div>
        </header>
    )
}

export default Header
