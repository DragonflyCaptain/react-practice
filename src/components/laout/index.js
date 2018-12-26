import React from 'react';

import { Layout } from 'antd';

import SiderNav from './sider/index';
import HeaderDiy from './header/index';
import Login from '../login/index';
import createHistory from 'history/createHashHistory';
const {
    Header, Footer, Sider, Content,
  } = Layout;

  const history = createHistory();
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
        ):<div>iiiiii</div>
    }
}