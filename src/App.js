/*
 * @Author: zhuyu 
 * @Date: 2018-12-13 17:11:49 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-12-26 11:06:51
 */

import React, { Component } from 'react';
import { message } from 'antd';
//css
import './App.css';

//
import Router from './components/Router';
message.config({
  top: 150,
  duration: 1,
  maxCount: 1,
});

class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}

export default App;
