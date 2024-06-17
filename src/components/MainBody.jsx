import React from 'react'

function MainBody() {
    return (
        <header className="header">
            <div className="content">
                <h1><span>Get Quick</span><br />Medical Services</h1>
                <p>
                    In today's fast-paced world, rapid access to efficient medical services is crucial. Whether it's a medical emergency or routine care, quick access to medical assistance can make a significant difference.
                </p>
                <button className="btn">Explore Our Services</button>
            </div>
            <div className="image">
                <span className="image__bg"></span>
                <img src="header-bg.png" alt="header image" />
                <div className="image__content image__content__1">
                    <span><i className="ri-user-3-line"></i></span>
                    <div className="details">
                        <h4>1520+</h4>
                        <p>Active Clients</p>
                    </div>
                </div>
                <div className="image__content image__content__2">
                    <ul>
                        <li>
                            <span><i className="ri-check-line"></i></span>
                            Get 20% off on every 1st month
                        </li>
                        <li>
                            <span><i className="ri-check-line"></i></span>
                            Expert Doctors
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default MainBody