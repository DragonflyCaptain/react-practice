/*
 * @Author: magua
 * @Date: 2019-05-14 11:03:37
 * @Last Modified by: magua
 * @Last Modified time: 2019-07-08 21:52:50
 */
import React, { } from 'react'
import { Button } from 'antd';
import { requestGET } from '../../request'
import './index.css'

function Home() {
  const testClick = async () => {
    const { data } = await requestGET('/mock')
    console.log(data);
  }
  return (
    <div>
      <Button onClick={testClick}>点击模拟数据</Button>
    </div>
  )
}
export default Home