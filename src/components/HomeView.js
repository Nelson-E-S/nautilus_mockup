import React from 'react';
import imageButton from '../assets/global/curtain-down.png'

const HomeView = () =>{
    return(
        <div id="main">
            <div className="contentSpace">
                <h5>ISSUE 079</h5>
                <h1>Catalysts</h1>
                <p>Agents of change</p>
                <span>READ MORE</span>
                <div>SEE FULL ISSUE</div>
                <img src={imageButton} alt="Scroll Down" />
                <span>SCROLL DOWN</span>
            </div>
        </div>
    );
}
export default HomeView;