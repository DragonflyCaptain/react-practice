/*
 * @Author: zhuyu 
 * @Date: 2018-12-14 10:57:11 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-12-14 18:52:39
 */

import React,{ Component } from 'react';


import { Input, Button, Icon, message } from 'antd';

import './index.css'
// import {debounce} from '../debounce/index';

function name(){
  console.log('OOOO')
}
function debounce(func, wait, immediate) {
  // console.log("asdasd")
  let timeout, result;
  return function(){
    // console.log('1234567')
      let context = this;
      let args = arguments;
      // console.log("asdasd",args)
      if(timeout) clearTimeout(timeout);
      if(immediate){
          let callNow = !timeout;
          timeout = setTimeout(function(){
              timeout = null;
          },wait)
          if(callNow) result = func.apply(context, args)
      }else{
          timeout = setTimeout(function(){
              func.apply(context,args)
          },wait);
      }
      // console.log('IUYTRE',context)
      return result;
  }
}
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
          userName: '',
          passWord: '',
          login: true,
        }
    }
    componentDidMount(){
      let login = sessionStorage.getItem('login');
      this.setState({
        login
      })
    }
    login(){
      console.log('222')
      const { userName,passWord } = this.state;
      if(userName==='guest'&&passWord==='admin'){
        message.success('登录成功');
        sessionStorage.setItem('userName',userName);
        // this.props.history.push('/');
        
      }else if( userName==='' || passWord==='' ){
        return message.error('请输入账号密码!')
      }else{
        return message.error('账号或密码错误!')
      }
    }
    keyDown(e){
      console.log('e',e)
      if(e.keyCode === 13){
        this.login()
      }
      
    }
    test(){
      var that = this;
      console.log('我被点击了')
      debounce(name,1000,true)
    }
    test2(){
      console.log('点击咯')
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
              />
            </div>

            <div className="tip">
              <span style={{marginLeft:85}}>用户名:guest</span>
              <span style={{marginLeft:80}}>密码:admin</span>
            </div>

            <div>
              <Button className="btn" onClick={()=>debounce(this.login,1000,false)}>登录</Button>
            </div>
            <Button onClick={()=>this.test()}>点我</Button>
          </div>
        </div>
      )
    }
}

export default Login

