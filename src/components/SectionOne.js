import React, { Component } from 'react';
import imageOne from '../assets/ai.png';
import imageTwo from '../assets/music.png';
import imageThree from '../assets/art.png';

class SectionOne extends Component {
    render(){
        return(
            <section id="s1">
                <div className="contentSpace">
                    <div className="ChapterNav">
                        <div className="header">
                            <h5>ISSUE 079</h5>
                            <h1>CATALYSTS</h1>
                            <span>"What genereates a new theory in science? ..."</span>
                        </div>
                        <div className="nav">
                            <div className="active">
                                <h5>Chapter One</h5>
                                <h6>Art</h6>
                            </div>
                            <hr />
                            <div>
                                <h5>Chapter Two</h5>
                                <h6>Mind</h6>
                                <em>Coming December 12</em>
                            </div>
                            <hr />
                            <div>
                                <h5>Chapter Three</h5>
                                <h6>Energy</h6>
                                <em>Coming December 19</em>
                            </div>
                            <hr />
                            <div>
                                <h5>Chapter Four</h5>
                                <h6>Stars</h6>
                                <em>Coming December 26</em>
                            </div>
                        </div>
                    </div>
                    <div className="ChapterContent">
                        <div className="main">
                            <div className="box">
                                <img src={imageOne} alt="ai" />
                                <div className="tag">
                                    <h5>ARTIFICIAL INTELLIGENCE</h5>
                                    <span>Best Screenplay Goes to the Algorithms</span>
                                    <em>By Arthur I. Miller</em>
                                </div>
                            </div>
                        </div>
                        <div className="subleft">
                            <div className="box">
                                <img src={imageTwo} alt="#" />
                                <div className="tag">
                                    <h5>MUSIC</h5>
                                    <span>How I Taught My Computer to Write Its Own Music</span>
                                    <em>By John Supko</em>
                                </div>
                            </div>
                        </div>
                        <div className="subright">
                            <div className="box">
                                <img src={imageThree} alt="#" />
                                <div className="tag right">
                                    <h5>ART</h5>
                                    <span>Picasso's Got Nothing on AI Artists</span>
                                    <em>By Kevin Berger</em>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionOne;