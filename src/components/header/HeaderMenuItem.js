import React from "react";

export default props => <li className="nav-item">
        <a style={{color: props.customColor}} className="nav-link" href="#">{props.title}<span className="sr-only">(current)</span></a>
    </li>
