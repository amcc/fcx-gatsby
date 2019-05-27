
import React, { Component } from 'react';

import threeEntryPoint from "./threejs/threeEntryPoint"
// import "./threejs/header.css"
import { css } from "@emotion/core"

const ThreeStyle = css`


`

export default class Header extends Component {
    
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }

    render () {
        return (
            <div css={ThreeStyle} ref={element => this.threeRootElement = element} />
        );
    }
}