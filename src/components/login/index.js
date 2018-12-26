/*
 * @Author: zhuyu 
 * @Date: 2018-12-14 10:57:11 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-12-26 15:08:14
 */

import React,{ Component } from 'react';


import { Input, Button, Icon, message } from 'antd';
import createHistory from 'history/createHashHistory';

import './index.css';
// import {debounce} from '../debounce/index';
const history = createHistory();
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
          userName: 'guest',
          passWord: 'admin',
          login: true,
          loading: false,
        }
    }
    componentDidMount(){
      let login = sessionStorage.getItem('login');
      this.setState({
        login
      })
    }
    login(){
      const { userName,passWord } = this.state;
      this.setState({
        loading: true
      })
      if(userName==='guest'&&passWord==='admin'){
        sessionStorage.setItem('userName',userName);
        setTimeout(()=>{
          this.setState({
            loading: false
          })
          message.success('登录成功');
          this.props.history.push('/');
          
        },2000)
        
      }else if( userName==='' || passWord==='' ){
        return message.error('请输入账号密码!')
      }else{
        return message.error('账号或密码错误!')
      }
    }
    keyDown(e){
      if(e.keyCode === 13){
        this.login()
      }
      
    }
    render(){
      const { userName,passWord } = this.state;
      // console.log(a,debounce);
      return(
        <div>
          <div className="box" onKeyDown={(e)=>this.keyDown(e)}>

            <div className="div">
              <span>用户名:</span>
              <Input 
                className="userName" 
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
                value={userName}
                onChange={(e)=>this.setState({
                  userName:e.target.value
                })}
              />
            </div>

            <div className="div">
              <span>密&nbsp;&nbsp;&nbsp;&nbsp;码:</span>
              <Input 
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                className="passWord"
                placeholder="请输入密码"
                value={passWord}
                onChange={(e)=>this.setState({
                  passWord:e.target.value
                })}
                type="password"
              />
            </div>

            <div className="tip">
              <span style={{marginLeft:85}}>用户名:guest</span>
              <span style={{marginLeft:80}}>密码:admin</span>
            </div>

            <div>
              <Button className="btn" loading={this.state.loading} onClick={()=>this.login()}>登录</Button>
            </div>
          </div>
        </div>
      )
    }
}

export default Login

