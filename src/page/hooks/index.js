import React, { useState, useEffect } from 'react'
import './index.less'

const data = [0,1,2,3,4,5,6,7,8,9]


export function HooksBasic() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    // testMap()
  })
  function testMap(){
    let arr =[]
    data.forEach(item=>{
      arr.push(
        <div className="child" key={item}>{item}</div>
      )
    })
    return arr
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
      <hr/>
      <div className="box">
        {testMap()}
      </div>
    </div>
  );
}