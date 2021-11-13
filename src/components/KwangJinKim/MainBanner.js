import React from 'react'

import AnchorLink from "react-anchor-link-smooth-scroll";

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom-two three">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1><span>Kwang Jin</span> Kim</h1>
                            <p>Hello, I am a Software Engineer from Seoul. I have experience of 10+
                                years in development. I would love to hear from you and about your unique needs.</p>

                            <div className="banner-btn-area">
                                <AnchorLink offset={() => -1} href="#contact" className="common-btn three">
                                    Contact Me
                                </AnchorLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
