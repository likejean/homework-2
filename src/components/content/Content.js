import React from 'react';
import Badge from "./Badge";
import Notification from "./Notification";

export default props => {
    console.log(props.data);
    const {data: { total_cases, total_deaths, total_recovered, statistic_taken_at }} = props;
    const info = [
        {title: 'Coronavirus Cases', quantity: total_cases, background: 'danger'},
        {title: 'Recovered', quantity: total_recovered, background: 'success'},
        {title: 'Deaths', quantity: total_deaths, background: 'secondary'}
    ];
    const DateTime = statistic => {
        let d = new Date(statistic);
        return {date: d.toDateString(), time: d.toTimeString()};
    }

    return (
        <React.Fragment>
            <Notification notification={DateTime(statistic_taken_at)}/>
            {info.map((badge, idx) => <Badge key={idx} item={badge} className="p-4"/>)}
        </React.Fragment>
    )
}