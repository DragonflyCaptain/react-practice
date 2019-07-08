import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
// import createHistory from 'history/createHashHistory';
import { routerConfig } from '../../../router/routerPath';
import './index.less';

const SubMenu = Menu.SubMenu;
// const history = createHistory();
class SiderNav extends React.Component{
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    constructor(props){
        super(props)
        this.state={
            openKeys: ['sub1'],
        }
    }

    mapChild(data){
        return data.map(item=>{
            return (
                <Menu.Item key={item.key}>
                    <NavLink to={item.path} replace>{item.name}</NavLink>
                </Menu.Item>
            )
        })
    }

    MapTest = (routerConfig) => {
        return routerConfig.map(item => {
            if(item.children){
                return (
                    <SubMenu key={item.key} title={<span><Icon type={item.icon} theme="twoTone" /><span>{item.name}</span></span>}>
                        {this.mapChild(item.children)}
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item key={item.key}>
                            <NavLink to={item.path} replace  ><Icon type={item.icon} />{item.name}</NavLink>
                    </Menu.Item>
                )
            }
        })
    }

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
            })
        }
    }
    logOut(){
        this.props.history.push('/login');
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
                    {this.MapTest(routerConfig)}
                </Menu>
            </div>
        )
    }
}
export default SiderNav