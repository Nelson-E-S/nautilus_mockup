import React from 'react';
import imageOne from '../assets/biology_03.png';

const SectionFive = () => {
    return(
        <section id="s5">
            <div className="contentSpace">
                <div className="title">
                    <h2><em>Listen To Nautilus</em></h2>
                        <p>NARRATED VERSION OF OUR STORIES</p>
                        <span>ALL AUDIO ARTICLES</span>
                </div>
                <div className="content">
                    <div className="box">
                        <img src={imageOne} alt="biology" />
                        <h6>BIOLOGY</h6>
                        <p>Turning Back the Clock on Human Evolution</p>
                        <em>By Amy Maxmen</em>
                    </div>
                    <div className="box">
                        <img src={imageOne} alt="biology" />
                        <h6>BIOLOGY</h6>
                        <p>Turning Back the Clock on Human Evolution</p>
                        <em>By Amy Maxmen</em>
                    </div>
                    <div className="box">
                        <img src={imageOne} alt="biology" />
                        <h6>BIOLOGY</h6>
                        <p>Turning Back the Clock on Human Evolution</p>
                        <em>By Amy Maxmen</em>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SectionFive;