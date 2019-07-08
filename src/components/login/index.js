/*
 * @Author: zhuyu
 * @Date: 2018-12-14 10:57:11
 * @Last Modified by: magua
 * @Last Modified time: 2019-06-10 16:41:17
 */

import React,{ Component } from 'react';
import { Input, Button, Icon, message, Form } from 'antd';
import './index.less';
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
          password: '',
          username: ''
        }
    }
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          if(values.username === 'admin' && values.password === '123456'){
            sessionStorage.setItem('userName', values.username)
            message.success('登录成功!')
            this.props.history.push('/')
          }else{
            message.error('账号或密码错误!')
          }
        }
      });
    };
    render(){
      const { password, username } = this.state;
      const { getFieldDecorator } = this.props.form;
      return(
        <div className="bg">
          <div className="login-content">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    className="formInput"
                    setfieldsvalue={username}
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    setfieldsvalue={password}
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm

