/*
 * @Author: zhuyu
 * @Date: 2018-12-13 17:11:49
 * @Last Modified by: zhuyu
 * @Last Modified time: 2019-02-26 14:13:21
 */

import React from 'react';
import { message } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-hk';
import Router from './router/index';
import './App.css';
message.config({
  top: 150,
  duration: 1,
  maxCount: 1,
});
moment.locale('zh-hk'); // moment时间插件全局语言设置

const App = () => {
  return (
    <Router />
  )
}

export default App;
