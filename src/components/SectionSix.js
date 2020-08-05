import React from 'react';
import imageOne from '../assets/hp_prime.jpg';

const SectionSix = () => {
    return(
        <section id="s6">
            <div className="contentSpace">
                <div className="title">
                    <h2><em>Nautilus Prime</em></h2>
                        <p>GET THE FULL DIGITAL EXPERIENCE</p>
                        <span>MEMBERS SIGN IN</span>
                </div>
                <div className="content">
                    <img src={imageOne} alt="prime" />
                    <div>
                        <p>Like <em>Nautilus</em>? You'll love <em>Nautilus</em> Prime.</p>
                        <p><span>Unlimited online reading</span> Read it all, whenever, wherever, and however you like.</p>
                        <p><span>Ad free</span> Get a pristine, ad-free reading experience.</p>
                        <p><span>Tablet editions</span> All the content and design fo our award-winning print magazine, in PDF format-perfect for reading on you rtablet or desktop.</p>
                        <p><span>eBook editions</span> We've made each monthly online issu e into an eBook, compatible with most e-readers.</p>
                        <p><span>Event access</span> Prime members get priority to access to Nautilus events.</p>
                        <p>
                            <span className="left">Learn More</span>
                            <span className="right">Join Prime</span>
                        </p>
                        <p>Current print susbscriber?<br />You're already a Prime member.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SectionSix;