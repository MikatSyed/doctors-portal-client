import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';

import './Header.css'
import BusinessInfo from './../BusinessInfo/BusinessInfo';
import Navbars from '../../Shared/Navbar/Navbars';
const Header = () => {
    return (
        <div className="header_main">
            <Navbars/>
            <HeaderMain/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;