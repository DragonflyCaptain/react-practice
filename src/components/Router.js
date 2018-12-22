/*
 * @Author: zhuyu 
 * @Date: 2018-12-13 17:12:45 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-12-21 16:32:44
 */

import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './login';
import Movie from '../page/movie/index';
import Laout from './laout/index';
import Detail from '../page/detail';

const BasicRoute = () => (
    <Router>
        <Switch>
            <Route path="/Login" component={Login} />
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/" render = { props => (
                <Laout>
                    <Switch>
                        <Route exact path="/" component={ Movie } />
                        <Route exact path="/test" component={ Detail } />
                    </Switch>
                </Laout>
            )}/>
        </Switch>
    </Router>
);


export default BasicRoute;