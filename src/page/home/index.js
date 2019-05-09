/*
 * @Author: zhuyu
 * @Date: 2018-12-28 10:18:40
 * @Last Modified by: zhuyu
 * @Last Modified time: 2019-01-02 16:17:51
 */
import React from 'react';
import { request } from '../../request/index'
import './index.css';
export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            movieArray: [],
            data: ''
        }
    }
    componentDidMount(){
        let url = '/movie/top250?start=25&count=25';
        let params = {
            start: 25,
            count: 25
        }
        this.name(url,params)
    }
    async name(url,params) {
        const res = await request(url,params)
        console.log(res)
    }
    render() {
        return (
            <div >
                <div id="screening" className="s">
                    <div className="screening-hd">
                        <div className="ui-slide-control">
                            {/* <span className="prev-btn"><a className="btn-prev" href="javascript:void(0)"></a></span> */}
                            {/* <span className="next-btn"><a className="btn-next" href="javascript:void(0)"></a></span> */}
                        </div>
                        <div className="slide-tip">
                            <span className="ui-slide-index">1</span>
                            /
                            <span className="ui-slide-index">6</span>
                        </div>
                        <h2>123</h2>
                    </div>
                    <div className="screening-bd">
                        <ul className="ui-slide-content" style={{left: -2800}}></ul>
                    </div>
                </div>
                {/* <button onClick={()=>this.name()}>1111</button> */}
            </div>
        )
    }
}