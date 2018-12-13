/*
 * @Author: zhuyu 
 * @Date: 2018-12-13 17:12:45 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-12-13 17:47:27
 */

import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../page/home';

import Laout from './laout/index';

const BasicRoute = () => (
    <Router>
        <Switch>
            <Route exact path="/" render = { props => (
                <Laout>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                    </Switch>
                </Laout>
            )}/>
        </Switch>
    </Router>
);


export default BasicRoute;