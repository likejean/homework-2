import React from 'react';
import HeaderMenu from './HeaderMenu';
import Toggler from "./Toggler";
import logo from "../../assets/earth.png";

export default props => <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <img className='logo' src={logo} alt='earth globe'/>
    <Toggler/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <HeaderMenu items={props.items} />
    </div>
</nav>
