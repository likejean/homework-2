import React from 'react';

export default props => {
    const { source } = props;
    return <a href={source.url}>{source.name}</a>
}

