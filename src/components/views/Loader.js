import React from 'react';
import {
    Wrapper,
    Loader,
    LoaderWheel,
    LoaderText
} from '../styles/Loader.js';

const LoaderView = () => {
    return (
        <Wrapper>
            <Loader>
                <LoaderWheel/>
                <LoaderText/>
            </Loader>
        </Wrapper>
    )
}

export default LoaderView;