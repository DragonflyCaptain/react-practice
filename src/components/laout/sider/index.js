import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import createHistory from 'history/createHashHistory';

import './index.css';
import RouterPath from '../../../router/routerPath';

const SubMenu = Menu.SubMenu;
const history = createHistory();
class SiderNav extends React.Component{
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    constructor(props){
        super(props)
        this.state={
            openKeys: ['sub1'],
        }
    }

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    logOut(){
        history.push('/login');
    }
    render(){
        return(
            <div>
                <div className="userPhoto">
                    <div className="radius" onClick={()=>this.logOut()}></div>
                </div>

                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 200,marginTop: 30, height: '100%' }}
                >
                    <Menu.Item key="1">
                            <NavLink to={RouterPath.Home} replace><Icon type="home" theme="filled" />Home</NavLink>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="sub1-1">
                            <NavLink to={RouterPath.RotatePhotos} replace>RotatePhotos</NavLink>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
export default SiderNav