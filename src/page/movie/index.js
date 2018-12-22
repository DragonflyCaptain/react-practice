import React from 'react';
import createHistory from 'history/createHashHistory';
import { Button } from 'antd';
import * as axios from 'axios';

import { debounce } from '../../components/debounce/index';
import './index.css';

const history = createHistory();


export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            movieArray: [],
        }
    }
    componentDidMount(){
      if(!sessionStorage.userName){
          history.push('/Login')
      }
      this.fetchOne(0,1)
    }
    test=()=>{
        console.log('我被点击了')
    }
    fetchOne(page,pageSize){
        if(!page&&!pageSize){
            page = 0;
            pageSize = 1;
        }
        let url = `/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=${page}&count=${pageSize}&client=&udid=`
        axios.get(url).then(res=>{
            console.log('请求到数据了',res.data.subjects)
            this.setState({
                movieArray: res.data.subjects
            })
        }).catch(e=>console.log('1',e))
    }
    viewTest(){
        const { movieArray } = this. state;
        movieArray.map(item=>{
            // console.log('所有数据',item)
            return (
                <div>
                    <img src={item.images.medium} />
                </div>
            )
        })
    }
    render() {
        const { movieArray } = this. state;
        return (
            <div>
                <div>
                    <h2>EEEEEEEE</h2>
                </div>
                {movieArray.map(item=>{
                    return (
                        <div key={item.id} className="test">
                            <img className="img"  src={item.images.small} />
                            <div className="text">
                                <span>{item.title}</span>
                            </div>
                        </div>
                    )
                })}
                {/* <div className="movieContent">
                </div> */}
            </div>
        )
    }
}