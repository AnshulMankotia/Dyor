import React from "react";
import Join from "../JoinButton/Join";
import "./About.css";
import playbutton from "../../images/playbutton.svg"
import mobileSlide from "../../images/mobile slide.svg"


const About = () => {
    return (
        <section className="section1">
            <div className="container">
                <div className="about">
                    <div className="a-heading">
                        <h1>
                            Become a better & well informed <br />
                            <span> crypto investor</span>
                        </h1>
                        <p>
                            Elevate your crypto game with our hand-picked investment <br />
                            opportunities and expert analysis
                        </p>
                        <div className="a-button">
                            <div className="button">
                            <Join />
                            </div>
                                
                            <div className="button2">
                                <img src={playbutton} alt="" /><span>How it works</span>
                            </div>
                        </div>
                    </div>
                    <div className="mobileSlab">
                        <img src={mobileSlide} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
