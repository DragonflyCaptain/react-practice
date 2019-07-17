import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { routerConfig } from '../../../router/routerPath'
import history from '../../../history'
import './index.less'

const SubMenu = Menu.SubMenu

const siderNavCustom = (props) => {
    console.log(props);
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']
    const [openKeys, setOpenKeys] = useState(['sub1'])
    const mapChild = (data) => {
        return data.map(item => {
            return (
                <Menu.Item key={item.key}>
                    <NavLink to={item.path} replace>{item.name}</NavLink>
                </Menu.Item>
            )
        })
    }
    const MapTest = (routerConfig) => {
        return routerConfig.map(item => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={<span><Icon type={item.icon} theme="twoTone" /><span>{item.name}</span></span>}>
                        {mapChild(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.key}>
                        <NavLink to={item.path} replace  ><Icon type={item.icon} />{item.name}</NavLink>
                    </Menu.Item>
                )
            }
        })
    }
    const onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === -1)
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(openKeys)
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
        }
    }
    const logOut = () => {
        history.push('/login')
    }
    return (
        <div>
            <div className="userPhoto">
                <div className="radius" onClick={() => logOut()}></div>
            </div>

            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: 200, marginTop: 30, height: '100%' }}
            >
                {MapTest(routerConfig)}
            </Menu>
        </div>
    )
}


export default siderNavCustom