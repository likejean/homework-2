import React from 'react';

export default props => {
    const { item } = props
    console.log(item)
    return <span className={`badge badge-${item.background}`}>{item.title}: {item.quantity}</span>
}