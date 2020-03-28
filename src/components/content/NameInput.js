import React from 'react';
export default props => <div className="d-flex justify-content-center h-100">
    <div className="searchbar">
        <input
            className="search_input"
            type="text"
            placeholder="Search By Country..."
            name="countryName"
            value={props.search}
            onChange={props.change}
        />
        <button className="search_icon"><i className="fas fa-search"></i></button>
    </div>
</div>