import React from 'react';

import confLogo from '../images/badge-header.svg';
// import avatar from '../images';
import "./styles/Badge.css";

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo" />
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://i.pinimg.com/originals/dd/84/dd/dd84ddcd127174dda78db0b01995a6b9.jpg" alt="Avatar" />
                    <h1>Omar <br /> González</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>Frontend Engineer</h3>
                    <div>@omarperoelbueno</div>
                </div>
                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;