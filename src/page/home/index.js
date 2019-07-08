/*
 * @Author: magua
 * @Date: 2019-05-14 11:03:37
 * @Last Modified by: magua
 * @Last Modified time: 2019-07-08 21:52:50
 */
import React from 'react'
import './index.css'
const data = [0,1,2,3,4,5,6,7,8,9]
export default class Home extends React.Component{

  testMap(){
    let arr = []
    data.forEach((item, index)=>{
      arr.push(
        <div key={index}>{item}</div>
      )
    })
  }

  render(){
    return(
      <div>
        <div>{()=>this.testMap()}</div>
      </div>
    )
  }
}
