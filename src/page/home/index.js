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
    componentDidMount(){

    //   if(!sessionStorage.userName){
    //       history.push('/login')
    //   }
      console.log('HHHHHH')
    }
    render() {
        return (
            <div>
                <div>
                    <h1>主页</h1>
                </div>
            </div>
        )
    }
}