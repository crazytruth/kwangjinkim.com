import React from 'react'
import {Link} from 'gatsby'

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom-two three">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1><span>Kwang Jin</span> Kim</h1>
                            <p>Hello, I am a <span>Software Engineer</span> from Seoul. I have rich experience of 10+
                                years in web development, also I am good at architecting systems.
                                I love to hear from you about your unique needs.</p>

                            <div className="banner-btn-area">
                                <Link to="#" className="common-btn three">
                                    Contact Me
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
