import React from 'react';
import createHistory from 'history/createHashHistory';
const history = createHistory();

export default class Home extends React.Component {
    componentDidMount(){
      if(!sessionStorage.userName){
          history.push('/Login')
      }
    }
    render() {
        return (
            <div>
                <span>two</span>
            </div>
        )
    }
}