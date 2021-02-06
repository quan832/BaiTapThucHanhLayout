import React, { Component } from 'react'
import BT3Content from './BT3Content';
import BT3Footer from './BT3Footer';
import BT3Header from "./BT3Header";


export default class BT3 extends Component {
    render() {
        return (
            <React.Fragment>
                <BT3Header></BT3Header>
                <BT3Content></BT3Content>
                <BT3Footer></BT3Footer>
            </React.Fragment>
        )
    }
}
