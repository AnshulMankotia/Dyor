import React from "react";
import Join from "../JoinButton/Join";
import "./Intro.css";
import playbutton from "../../images/playbutton.svg"
import mobileSlide from "../../images/mobile slide.svg"


const Intro = () => {
    return (
        <section className="section1">
            <div className="container">
                <div className="intro">
                    <div className="i-heading">
                        <h1>
                            Become a better & well informed <br />
                            <span> crypto investor</span>
                        </h1>
                        <p>
                            Elevate your crypto game with our hand-picked investment <br />
                            opportunities and expert analysis
                        </p>
                        <div className="i-button">
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

export default Intro;
