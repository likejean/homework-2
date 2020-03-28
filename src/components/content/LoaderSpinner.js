import React from 'react';
import Loader from 'react-loader-spinner';

export default props => <Loader type={props.type} color="#00BFFF" height={300} width={300} timeout={3000} />