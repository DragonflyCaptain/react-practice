import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import SiderNav from './sider/index'

const {
    Sider,
    Content,
} = Layout

const LayoutCustom = (props) => {
    const [isLogin] = useState(sessionStorage.userName)
    useEffect(() => {
        if (!isLogin) {
            props.routeProps.history.push('/login')
        }
    })
    return isLogin ? (
        <Layout style={{ height: '100%' }}>
            <Sider style={{ background: 'white' }}>
                <SiderNav />
            </Sider>
            <Layout>
                <Content style={{ overflow: 'auto' }}>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    ) : <div>显示时间错误!</div>
}
export default LayoutCustom