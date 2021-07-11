import * as React from 'react';
import * as ReactDOM from "react-dom";
import {Web3ReactProvider} from '@web3-react/core';
import getLibrary from './utils/getLibrary';
import App from './App';
import "./styles.css";

var mountNode = document.getElementById("app");
ReactDOM.render(
    <>
    <Web3ReactProvider getLibrary={getLibrary}>
        <App name="Jane" />
    </Web3ReactProvider>
    </>
, mountNode);