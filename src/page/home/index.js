/*
 * @Author: zhuyu 
 * @Date: 2018-12-28 10:18:40 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2019-01-02 16:17:51
 */
import React from 'react';
// import createHistory from 'history/createHashHistory';
// import { Button } from 'antd';
// import * as axios from 'axios';
import './index.css';

// const history = createHistory();


export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            movieArray: [],
        }
    }
    render() {
        return (
            <div >
                <div id="home">
                <h1>Home</h1>
                </div>
            </div>
        )
    }
}