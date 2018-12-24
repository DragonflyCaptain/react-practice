/*
 * @Author: zhuyu 
 * @Date: 2018-12-13 17:12:45 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-12-24 18:52:39
 */

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Login from './login';
import Movie from '../page/movie/index';
import Laout from './laout/index';
import Detail from '../page/detail';

const BasicRoute = () => (
    <Router>
        <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/" render = { props => (
                <Laout>
                    <Switch>
                        <Route exact path="/" component={ Movie } />
                        <Route exact path="/test" component={ Detail } />
                    </Switch>
                </Laout>
            )}/>
            {/* <Route exact path="/" render={() => (localStorage.getItem('userName') ? (<Redirect to={{ pathname: '/' }} />) : (<Redirect to={{ pathname: '/Login' }} />))} /> */}
        </Switch>
    </Router>
);


export default BasicRoute;