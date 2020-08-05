import React from 'react';

const SectionFooter = () =>{
    return(
        <footer>
            <div className="info">
                <div className="listbox">
                    <ul className="list">
                        <li>About</li>
                        <li>CONTACT /WORK WITH US</li>
                        <li>FAQ</li>
                        <li>PRIME</li>
                        <li>SUBSCRIBE</li>
                    </ul>
                </div>
                <div className="listbox">
                    <ul className="list">
                        <li>AWARDS AND PRESS</li>
                        <li>DONATE</li>
                        <li>MEDIA KIT</li>
                        <li>RSS</li>
                        <li>TERMS OF SERVICE</li>
                    </ul>
                </div>
                <div>
                    <h6>NAUTILUS: SCIENCE CONNECTED</h6>
                    <p>Nautilus is a different kind of science magazine. We deliver big-picture science by reporting on a single monthly topic form multiple perspectives. Read a new chapter in the story every Thursday.</p>
                </div>
            </div>
            <div className="final">
                <span className="copy">&copy; 2019 NautilusThink. All rights reserved.</span><span>Matter, Biology, Numbers, Ideas, Culture, <em>Connnected</em></span>
            </div>
        </footer>
    );
}
export default SectionFooter;