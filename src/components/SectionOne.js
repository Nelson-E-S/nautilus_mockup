import React, { Component } from 'react';

class SectionOne extends Component {
    render(){
        return(
            <section id="s1">
                <div className="ChapterNav">
                    <div className="header">
                        <h5>ISSUE 079</h5>
                        <h1>CATALYSTS</h1>
                        <span>"What genereates a new theory in science? ..."</span>
                    </div>
                    <div className="nav">
                        <div>
                            <h5>Chapter One</h5>
                            <h6>Art</h6>
                        </div>
                        <div>
                            <h5>Chapter Two</h5>
                            <h6>Mind</h6>
                            <span>Coming December 12</span>
                        </div>
                        <div>
                            <h5>Chapter Three</h5>
                            <h6>Energy</h6>
                            <span>Coming December 19</span>
                        </div>
                        <div>
                            <h5>Chapter Four</h5>
                            <h6>Stars</h6>
                            <span>Coming December 26</span>
                        </div>
                    </div>
                </div>
                <div className="ChapterContent">
                    <div className="main">
                        <img src="#" alt="#" />
                        <div className="box">
                            <h5>ARTIFICIAL INTELLIGENCE</h5>
                            <span>Best Screenplay Goes to the Algorithms</span>
                            <em>By Arthur I. Miller</em>
                        </div>
                    </div>
                    <div className="subleft">
                        <img src="#" alt="#" />
                        <div className="box">
                            <h5>MUSIC</h5>
                            <span>How I Taught My Computer to Write Its Own Music</span>
                            <em>By John Supko</em>
                        </div>
                    </div>
                    <div className="subleft">
                        <img src="#" alt="#" />
                        <div className="box">
                            <h5>ART</h5>
                            <span>Picasso's Got Nothing on AI Artists</span>
                            <em>By Kevin Berger</em>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionOne;