import React from "react";

export default props => <li className="nav-item">
        <a className="nav-link" href="#">{props.title}<span className="sr-only">(current)</span></a>
    </li>
