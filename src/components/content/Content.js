import React from 'react';
import Badge from "./Badge";

export default props => {
    const {data: { total_cases, total_deaths, total_recovered }} = props;
    const info = [
        {title: 'Coronavirus Cases', quantity: total_cases, background: 'danger'},
        {title: 'Recovered', quantity: total_recovered, background: 'success'},
        {title: 'Deaths', quantity: total_deaths, background: 'secondary'}
    ];

    return (
        <React.Fragment>
            {info.map((badge, idx) => <Badge key={idx} item={badge} className="p-4"/>)}
        </React.Fragment>
    )
}