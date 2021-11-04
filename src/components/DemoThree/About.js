import React from 'react'
import aboutImg from '../../components/App/assets/images/about4.jpg'

const About = () => {
    return (
        <div id="about" className="about-area border-bottom-two three ptb-100">
            <div className="container align-items-center">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="about-img-three">
                            <img src={aboutImg} alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="about-content">
                            <div className="section-title three">
                                <span className="sub-title">ABOUT ME</span>
                                <h2>I Am A Software Engineer, Specialized In Python, DevOps, and architecting</h2>
                                <p>
                                    I am a Backend/DevOps Engineer/Architect that dislikes repetitive
                                    duties assigned to me and focuses on efficiency and optimization in the
                                    systems and teams that I work in. I automate, structure and facilitate all
                                    aspects of my tasks because automating menial tasks frees time for
                                    newer developments.
                                </p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="left">
                                        <ul>
                                            <li>
                                                <span>Residence:</span>
                                                Seoul, South Korea
                                            </li>
                                            {/*<li>*/}
                                            {/*    <span>Address:</span>*/}
                                            {/*    <a href="#" target="_blank">12/7, Mc Street, Canada</a>*/}
                                            {/*</li>*/}
                                            <li>
                                                <span>Website:</span>
                                                <a href="http://www.kwangjinkim.com" target="_blank">www.kwangjinkim.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="right">
                                        <ul>
                                            <li>
                                                <span>Email:</span>
                                                <a href="mailto:hello@kwangjinkim.com">hello@kwangjinkim.com</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
