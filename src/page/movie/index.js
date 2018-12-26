import React from 'react';
import createHistory from 'history/createHashHistory';
import { Button } from 'antd';
import * as axios from 'axios';
import './index.css';

const history = createHistory();


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
                    <h2>EEEEEEEE</h2>
                    <Button>123123</Button>
                </div>
            </div>
        )
    }
}