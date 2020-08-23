import React from 'react'
import virus from '../img/virus.png'
import down from '../img/down-arrow.png'

function FirstPage() {
    return (
        <div className="app-first" id="first">
            <div className="app-first-content">
                <div className="app-image">
                    <img style={{height:"40vh"}} src={virus} alt="virus"/>
                </div>
                <div className="app-header">
                    <div className="app-title">
                        COVID 19 TRACKER
                    </div>
                    <div className="app-subtitle">
                        Latest COVID 19 data across the world!
                    </div>
                </div>
            </div>
            <div className="app-next">
                <a href="#second"><img id="down" src={down} alt="down"></img></a>
            </div>
        </div>
    )
}

export default FirstPage
