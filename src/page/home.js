import React from 'react';
import createHistory from 'history/createHashHistory';
const history = createHistory();


export default class Home extends React.Component {
    constructor(props){
      super(props)
    }
    componentDidMount(){
      if(!sessionStorage.userName){
          history.push('/Login')
      }
    }
    render() {
        return (
            <div>
                <a>one</a>
            </div>
        )
    }
}