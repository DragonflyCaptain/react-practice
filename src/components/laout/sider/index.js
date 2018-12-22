import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const styles = {textDecoration:'none'}
class SiderNav extends React.Component{
    render(){
        return(
            <div style={{}}>
                <ul className='ul'>
                    <NavLink to="/" activeStyle={styles}>
                        <li style={{marginTop:0}}>
                            one
                        </li>
                    </NavLink>
                    <NavLink 
                        to="/test"
                        activeStyle={styles}
                    >
                        <li>two</li>
                    </NavLink>
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