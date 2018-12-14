import React from 'react';
import './index.css';

class Header extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div>
        <div className="background">
          我是header
        </div>
      </div>
    )
  }
}
export default Header