import React from 'react';

export default props => {
    const { item } = props
    return <span className={`badge badge-${item.background}`}>{item.title}: {item.quantity}</span>
}