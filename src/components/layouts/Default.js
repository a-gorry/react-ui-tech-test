import React from 'react';
import Sidenav from '../navs/Sidenav'
import '../styles/Default.css';

const Default = (props) => {
    return (
        <div id="container">
            <Sidenav />
            {props.children}
        </div>
    )
}

export default Default;