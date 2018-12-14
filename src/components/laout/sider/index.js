import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './index.css';
class SiderNav extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div style={{height:'100%',width: 200,background:'red',float:'left'}}>
                <ul className='ul'>
                    <Link to="/">
                        <li style={{marginTop:0}}>
                            one
                        </li>
                    </Link>
                    <Link to="/test">
                        <li>two</li>
                    </Link>
                    <li>three</li>
                    <li>four</li>
                    <li>five</li>
                    <li>six</li>
                    <li>seven</li>
                    <li>eight</li>
                </ul>
            </div>
        )
    }
}
export default SiderNav