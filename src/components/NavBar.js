import React from 'react';
import logo from '../assets/global/nautilus-logo-sprite@2x.png'

const NavBar = () =>{
    return(
        <nav>
            <div className="contentSpace">
                <img src={logo} alt="Nautilus logo" />
                <ul>
                    <li>ISSUES</li>
                    <li>TOPIC</li>
                    <li>BLOG</li>
                    <li>NEWSLETTER</li>
                    <li>LOGIN</li>
                    <li className="sub">SUBSCRIBE</li>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;