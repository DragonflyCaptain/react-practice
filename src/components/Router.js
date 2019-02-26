/*
 * @Author: zhuyu 
 * @Date: 2018-12-13 17:12:45 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2019-01-13 13:23:19
 */

import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './login/index';
import Home from '../page/home/index';
import Laout from './laout/index';
import One from '../page/one/index';
import Two from '../page/two/index';
import rotatePhotos from '../page/three/index';
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
                        <Route  path="/three" component={ rotatePhotos } />
                        <Route  path="/four" component={ Four } />
                    </Switch>
                </Laout>
            )}/>
        </Switch>
    </Router>
);


export default BasicRoute;