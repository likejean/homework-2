import React from "react";

export default props => <div className="container">
    <button type="submit"
            className="pinkBg btns" target="_blank" onClick={props.submit}
    >
        <span className="ripple pinkBg"></span>
        <span className="ripple pinkBg"></span>
        <span className="ripple pinkBg"></span>
    </button>
</div>