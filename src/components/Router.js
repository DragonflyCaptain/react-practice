/*
 * @Author: zhuyu 
 * @Date: 2018-12-13 17:12:45 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-12-27 18:27:16
 */

import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './login/index';
import Home from '../page/home/index';
import Laout from './laout/index';
import One from '../page/one/index';
import Two from '../page/two/index';
import Three from '../page/three/index';
import Four from '../page/four/index';

const BasicRoute = () => (
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path='/' render = { props => (
                <Laout routeProps = {props}>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route  path="/one" component={ One } />
                        <Route  path="/two" component={ Two } />
                        <Route  path="/three" component={ Three } />
                        <Route  path="/four" component={ Four } />
                    </Switch>
                </Laout>
            )}/>
        </Switch>
    </Router>
);


export default BasicRoute;