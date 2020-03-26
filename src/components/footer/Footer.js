import React from 'react';
import Source from "./Source";
export default props => (
    <footer className="footer">
        <h2>Source Links</h2>
        <ul>
            {props.items.map((source, idx) => <li className='footer-link' key={idx} ><Source source={source} /></li>)}
        </ul>
        <div className='copyrights'>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> PASV </a>
        </div>
    </footer>
);