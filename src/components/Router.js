/*
 * @Author: zhuyu 
 * @Date: 2018-12-13 17:12:45 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-12-26 17:26:53
 */

import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './login/index';
import Movie from '../page/movie/index';
import Laout from './laout/index';
import Detail from '../page/detail'

const BasicRoute = () => (
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path='/' render = { props => (
                <Laout routeProps = {props}>
                    <Switch>
                        <Route exact path="/" component={ Movie } />
                        <Route  path="/test" component={ Detail } />
                    </Switch>
                </Laout>
            )}/>
        </Switch>
    </Router>
);


export default BasicRoute;