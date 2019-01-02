import React from 'react';

import { Layout } from 'antd';
import moment from 'moment';

import SiderNav from './sider/index';
import HeaderDiy from './header/index';
const {
    Header, Footer, Sider, Content,
  } = Layout;

export default class Laout extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogin: sessionStorage.userName
        }
    }
    componentDidMount(){
        if(!this.state.isLogin){
            this.props.routeProps.history.push('/login')
        }
    }
    render(){
        return this.state.isLogin?(
            <Layout style={{height:'100%'}}>
                <Sider style={{background: 'white'}}>
                    <SiderNav/>
                </Sider>
                <Layout>
                    {/* <Header style={{background: 'orange',height: 100}}>
                        <HeaderDiy/>
                    </Header> */}
                    <Content style={{overflow:'auto'}}>
                        {this.props.children}
                    </Content>
                    <Footer style={{textAlign:'center'}}>{moment().format('MMMM Do YYYY')}</Footer>
                </Layout>
            </Layout>
        ):<div>iiiiii</div>
    }
}