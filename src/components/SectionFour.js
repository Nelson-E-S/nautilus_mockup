import React from 'react';
import imageOne from '../assets/clover_card.jpg';

const SectionFour = () => {
    return (
        <section id="s4">
            <div className="contentSpace">
                <div className="title">
                    <h2><em>Facts So Romantic</em></h2>
                        <p>SCIENCE HAS A POWERFUL VOICE IN TODAY'S CULTURE.<br />
                        SO WHAT IS IT SAYING?</p>
                        <span>SEE ALL BLOG POSTS</span>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={imageOne} alt="card" />
                        <h6>Ideas</h6>
                        <p>Why the Laws of PHsyics Are Inevitable</p>
                        <em>
                            Reprinted with permission from Quanta Magazine's Abstractions blog.
                            Compared to the unsolved mysteries of the unvierse, far less gets said about one fo the most profound facts to have...
                        </em>
                        <h6>Read more</h6>
                    </div>
                    <div className="card">
                        <img src={imageOne} alt="card" />
                        <h6>Ideas</h6>
                        <p>Why the Laws of PHsyics Are Inevitable</p>
                        <em>
                            Reprinted with permission from Quanta Magazine's Abstractions blog.
                            Compared to the unsolved mysteries of the unvierse, far less gets said about one fo the most profound facts to have...
                        </em>
                        <h6>Read more</h6>
                    </div>
                    <div className="card">
                        <img src={imageOne} alt="card" />
                        <h6>Ideas</h6>
                        <p>Why the Laws of PHsyics Are Inevitable</p>
                        <em>
                            Reprinted with permission from Quanta Magazine's Abstractions blog.
                            Compared to the unsolved mysteries of the unvierse, far less gets said about one fo the most profound facts to have...
                        </em>
                        <h6>Read more</h6>
                    </div>
                    <div className="card">
                        <img src={imageOne} alt="card" />
                        <h6>Ideas</h6>
                        <p>Why the Laws of PHsyics Are Inevitable</p>
                        <em>
                            Reprinted with permission from Quanta Magazine's Abstractions blog.
                            Compared to the unsolved mysteries of the unvierse, far less gets said about one fo the most profound facts to have...
                        </em>
                        <h6>Read more</h6>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SectionFour;