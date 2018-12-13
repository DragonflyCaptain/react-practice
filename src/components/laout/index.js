import React from 'react';

import Sider from './sider/index';
import Header from './header/index';


export default class Laout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header/>
                <Sider/>
                {this.props.children}
            </div>
        )
    }
}