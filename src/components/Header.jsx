import React from 'react';
import Menu from './Menu.jsx';
import './styles/Menu.css';

const Header = (props) => {
    
    const Logo = "https://ik.imagekit.io/greenviewsolution/HomePage/FullSizedWebp/clearGVSLogo_300.webp?tr=w-700,h-700";
    return(
        <div className="header">
            <img className="headerLogo" rel='preload' src={Logo} alt= "Greenview Solutions Logo"/>
            <Menu changePage={props.changePage}/>
        </div>
    )
}

export default Header;