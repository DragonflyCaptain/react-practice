import React from 'react';

import { Layout } from 'antd';

import SiderNav from './sider/index';
import HeaderDiy from './header/index';
const {
    Header, Footer, Sider, Content,
  } = Layout;


export default class Laout extends React.Component{
    render(){
        return(
            <Layout style={{height:'100%'}}>
                <Sider>
                    <SiderNav/>
                </Sider>
                <Layout>
                    <Header>
                        <HeaderDiy/>
                    </Header>
                    <Content>
                        {this.props.children}
                    </Content>
                    <Footer style={{textAlign:'center'}}>2018-12-21</Footer>
                </Layout>
            </Layout>
        )
    }
}