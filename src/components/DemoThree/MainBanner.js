import React from 'react'
import {Link} from 'gatsby'
import AnchorLink from "react-anchor-link-smooth-scroll";

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom-two three">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1><span>Kwang Jin</span> Kim</h1>
                            <p>Hello, I am a <span>Software Engineer</span> from Seoul. I have rich experience of 10+
                                years in development, also I am good at architecting systems.
                                I love to hear from you about your unique needs.</p>

                            <div className="banner-btn-area">
                                <AnchorLink offset={() => -1} href="#contact" className="common-btn three">
                                    Contact Me
                                </AnchorLink>
                                {/*<ul>*/}
                                {/*    <li>*/}
                                {/*        <a href="https://www.linkedin.com/in/kwangjinkim/" target="_blank">*/}
                                {/*            <i className='bx bxl-linkedin'></i>*/}
                                {/*        </a>*/}
                                {/*    </li>*/}
                                {/*    <li>*/}
                                {/*        <a href="https://github.com/crazytruth" target="_blank">*/}
                                {/*            <i className='bx bxl-github'></i>*/}
                                {/*        </a>*/}
                                {/*    </li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
