import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import LayoutCustom from '../components/laout/index'
import RouterConfig from './routerConfig'
// import { routerConfig } from './routerPath'
import history from '../history'
const BasicRoute = (props) => {
  console.log(props);
  return (
    <Router >
      <Switch>
        <Route path={RouterConfig.LoginPage.path} component={RouterConfig.LoginPage.component} />
        <Route history={history} path='/' render={props => (
          <LayoutCustom routeProps={props}>
            <Switch>
              <Route exact path={RouterConfig.HomePage.path} component={RouterConfig.HomePage.component} />
              <Route path={RouterConfig.RotatePhotosPage.path} component={RouterConfig.RotatePhotosPage.component} />
              <Route path={RouterConfig.QuestionTablePage.path} component={RouterConfig.QuestionTablePage.component} />
              <Route path={RouterConfig.MapPage.path} component={RouterConfig.MapPage.component} />
              <Route path={RouterConfig.HooksBasic.path} component={RouterConfig.HooksBasic.component} />
            </Switch>
          </LayoutCustom>
        )} />
      </Switch>
    </Router>
  )
}

export default BasicRoute