import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import createHistory from 'history/createHashHistory';

import './index.css';

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
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="1">
                            <NavLink to="/" replace>主页</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/one" replace>one</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to="/two" replace>two</NavLink>                            
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to="/three" replace>three</NavLink>  
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="5">
                            <NavLink to="/four" replace>four</NavLink>  
                        </Menu.Item>
                        <Menu.Item key="6">
                            <NavLink to="/five" replace>five</NavLink>
                        </Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">
                            <NavLink to="/six" replace>six</NavLink>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <NavLink to="/seven" replace>seven</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">
                            <NavLink to="/eight" replace>eight</NavLink>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <NavLink to="/nine" replace>nine</NavLink>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <NavLink to="/ten" replace>ten</NavLink>
                        </Menu.Item>
                        <Menu.Item key="12">
                            <NavLink to="/eleven" replace>eleven</NavLink>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
export default SiderNav