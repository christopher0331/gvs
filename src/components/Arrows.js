import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Arrows = ({ direction, handleClick }) => (

    <div onClick={handleClick}>
        <div>
            {direction === 'right' ? <FontAwesomeIcon icon={faArrowRight} style={{fontSize: "40px"}} /> : <FontAwesomeIcon icon={faArrowLeft} style={{fontSize: "40px"}} /> }    
        </div>
    </div>


)

export default Arrows