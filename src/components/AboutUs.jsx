import {useEffect, React } from 'react';
import Overview from './Overview.jsx';
import OurProcess from './OurProcess.jsx';

const AboutUs = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className="aboutUsDiv">
            <Overview />
            <OurProcess />
        </div>

    )
}

export default AboutUs;

// <div className="card4">
// <img src={ResidentialFences} alt="Avatar" />
//     <div className="container4">
//         <h4><b>Standley Lake </b><br />
//         </h4>4-30 <br />Wrap-Around Deck And ADA Walkway
//         <a href="https://greenviewsolutions.net/standley-lake">
//             <div className="btn from-left">View Project</div>
//         </a>
//     </div>
// </div>
