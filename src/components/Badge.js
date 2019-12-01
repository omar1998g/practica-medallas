import React from 'react';

import confLogo from '../images/badge-header.svg';
// import avatar from '../images';

class Badge extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Logo" />
                </div>
                <div>
                    <img src="" alt="Avatar" />
                    <h1>Omar <br /> González</h1>
                </div>
                <div>
                    <p>Frontend Engineer</p>
                    <p>@omarperoelbueno</p>
                </div>
                <div>
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;