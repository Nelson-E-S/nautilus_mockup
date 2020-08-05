import React from 'react';
import logo from '../assets/global/nautilus-logo-sprite@2x.png'

const NavBar = () =>{
    return(
        <nav>
            <img src={logo} alt="Nautilus logo" />
            <ul>
                <li>ISSUES</li>
                <li>TOPIC</li>
                <li>BLOG</li>
                <li>NEWSLETTER</li>
                <li>LOGIN</li>
                <li className="sub">Subscribe</li>
            </ul>
        </nav>
    );
}
export default NavBar;