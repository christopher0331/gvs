import React from 'react';
import './styles/FreeEstimate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer } from '@fortawesome/free-solid-svg-icons'

const ContactInformation = () => {
    return(
        <div className="contactInfoBox">
            <div className="itemsBox">
                <FontAwesomeIcon className="leafIcon" icon={faHammer}/>
                <a href="tel:303-358-8168">
                    <div className="contactNumber" id="phone">
                        (303)358-8168
                    </div>
                </a>
                <div className="availability">
                    (Available from 8:00am to 8:00pm)
                </div>
                <div className="contactAddress">
                    <div>700 S Beshear Ct</div>
                    <div>Erie, CO</div>
                    <div>9952 W 86th Ave</div>
                    <div>Arvada, CO</div>
                </div>
                <a href="mailto:brandon@greenviewsolutions.net">
                    <div className="contactEmail" id="email">
                        Email: brandon@greenviewsolutions.net
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ContactInformation;