import React from 'react';
import HeaderMenu from './HeaderMenu';
import Toggler from "./Toggler";

export default props => <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">Header</a>
    <Toggler/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <HeaderMenu items={props.items} />
    </div>
</nav>
