import { React } from 'react'; 
import './styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
  
const Footer = ()  => {
    
    const Logo = "https://ik.imagekit.io/greenviewsolutions/HomePage/FullSizedWebp/clearGVSLogo_300.webp?tr=w-300,h-300";

        return(
            <div className="footerOutterDivs">
                <div className='footerDiv'>
                    <img src={Logo} className="footerLogo" alt="GreenView Solutions Logo" />
                    <div className='Info'>
                        <div className='footerHeads'>
                            Contact Info
                        </div>
                            <div>
                                Brandon King
                            </div>
                            <div>
                                303.358.8168
                            </div>
                            <div>
                                Brandon@greenviewsolutions.net
                            </div>
                            <div>
                                Serving Greater Denver Area!
                            </div>
                        </div>
                
                        <div className='SiteLinks'>
                            <div className='footerHeads'>
                                Links
                            </div>
                            <div className="links">
                                <Link className="nav-link" to="/" exact> Home </Link>
                            </div>
                            <div className="links">
                                <Link className="nav-link" to="/fencing"> Fencing </Link>
                            </div>
                            <div className="links">
                                <Link className='nav-link' to="/irrigation"> Irrigation </Link>
                            </div>
                            <div className="links">
                                <Link className="nav-link" to="/contact-us"> Contact Us </Link>                        
                            </div>
                            <div className="links">
                                <Link className="nav-link" to="/about-us"> About Us </Link>
                            </div>
                            <div className="links">
                                <Link className="nav-link" to="/portfolio"> Portfolio </Link>
                            </div>
                        </div>
                        <div className='Message'>
                            <p className="messageParagraph">
                                GreenView Solutions has provided premium fences 
                                for the Greater Denver Area with passion and pride!
                                We service schools, government, residential and commercial
                                clients every month. Give us a call and see why GVS has 5 star
                                reviews anywhere you can find us. 
                            </p>
                        </div>
                    </div>
            </div>
        )   
}

export default Footer;