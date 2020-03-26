import React from "react";

export default props => <div className="alert alert-primary" role="alert">
    {props.notification.date} {props.notification.time}
</div>