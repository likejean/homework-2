import React from 'react';
import HeaderMenuItem from "./HeaderMenuItem";

export default props => {
    const { items } = props;
    return <ul className="navbar-nav mr-auto">
        {items.map((item, idx) => <HeaderMenuItem key={idx} title={item} />)}
    </ul>
}