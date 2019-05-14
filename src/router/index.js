import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Laout from '../components/laout/index';

import RouterConfig from './routerConfig';

const BasicRoute = () => (
    <Router>
        <Switch>
            <Route path={RouterConfig.LoginPage.path} component={RouterConfig.LoginPage.component} />
            <Route path='/' render = { props => (
                <Laout routeProps = {props}>
                    <Switch>
                        <Route exact path={RouterConfig.HomePage.path} component={ RouterConfig.HomePage.component } />
                        <Route  path={RouterConfig.RotatePhotosPage.path} component={ RouterConfig.RotatePhotosPage.component } />
                    </Switch>
                </Laout>
            )}/>
        </Switch>
    </Router>
);


export default BasicRoute;