import React from 'react';
import imageOne from '../assets/popular_01.png';
import imageTwo from '../assets/popular_02.png';

const SectionThree = () => {
    return(
        <section id="s3">
            <div className="contentSpace">
                <div className="title">
                    <h2><em>Popular On Nautilus</em></h2>
                    <div>
                        <span className="left">Most Read</span>
                        <span className="right">Most Shared</span>
                    </div>
                </div>
                <div className="reel">
                    <div className="big">
                        <img src={imageOne} alt="Popular 1" />
                        <h3>1 Does Theranos Mark the Peak of the Silicon Valley Bubble?</h3>
                        <em>John Carreyrou talks to Nautilus about the lesson fo a $1 billon fund.</em><br />
                        <span>BY MICHAEL SEGAL</span>
                    </div>
                    <div className="big">
                        <img src={imageTwo} alt="Popular 2" />
                        <h3>2 Does Theranos Mark the Peak of the Silicon Valley Bubble?</h3>
                        <em>John Carreyrou talks to Nautilus about the lesson fo a $1 billon fund.</em><br />
                        <span>BY MICHAEL SEGAL</span>
                    </div>
                    <div>
                        <h4>3 Does Theranos Mark the Peak of the Silicon Valley Bubble?</h4>
                        <em>John Carreyrou talks to Nautilus about the lesson fo a $1 billon fund.</em><br />
                        <span>BY MICHAEL SEGAL</span>
                    </div>
                    <div>
                        <h4>4 Does Theranos Mark the Peak of the Silicon Valley Bubble?</h4>
                        <em>John Carreyrou talks to Nautilus about the lesson fo a $1 billon fund.</em><br />
                        <span>BY MICHAEL SEGAL</span>
                    </div>
                    <div>
                        <h4>5 Does Theranos Mark the Peak of the Silicon Valley Bubble?</h4>
                        <em>John Carreyrou talks to Nautilus about the lesson fo a $1 billon fund.</em><br />
                        <span>BY MICHAEL SEGAL</span>
                    </div>
                    <div>
                        <h4>6 Does Theranos Mark the Peak of the Silicon Valley Bubble?</h4>
                        <em>John Carreyrou talks to Nautilus about the lesson fo a $1 billon fund.</em><br />
                        <span>BY MICHAEL SEGAL</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SectionThree;