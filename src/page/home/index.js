/*
 * @Author: zhuyu 
 * @Date: 2018-12-28 10:18:40 
 * @Last Modified by: zhuyu
 * @Last Modified time: 2018-12-28 16:23:24
 */
import React from 'react';
// import createHistory from 'history/createHashHistory';
// import { Button } from 'antd';
// import * as axios from 'axios';
import './index.css';

// const history = createHistory();


export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            movieArray: [],
        }
    }
    render() {
        return (
            <div id="home">
            <div className="itemContainer">
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913117&di=dd0d1c60a1d942e0c543e21a3ec6f794&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FQx%3Db5rUy4yVZ3iPXnGx7xpRDngP7pQSwnQ%3DMu02JgE3E51531530297317.gif" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=3c5949f9c03ce91c6be8e54b680bd920&imgtype=0&src=http%3A%2F%2Fimgup01.sj88.com%2F2018-07%2F14%2F16%2F15315566132890_4.jpg" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298546633&di=2db927bc42e6bc9f9daa4e39176457e4&imgtype=0&src=http%3A%2F%2F02.imgmini.eastday.com%2Fmobile%2F20180420%2F20180420_31b10686d47108630ff3d294372b912f_cover_mwpm_03201609.jpg" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298571830&di=0f5984cc3443ba1125b8aa33a737811d&imgtype=0&src=http%3A%2F%2F06.imgmini.eastday.com%2Fmobile%2F20180816%2F20180816121956_ec3ddfb045d0b1e4afedc81d96d7749c_6_mwpm_03201609.jpg" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298571846&di=4d8a0e1cea0670ac27147f712bfcb88f&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2F0265D037EE9751AD8BD4634E4357F1C39FC48F5A_size56_w750_h731.jpeg" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608502&di=1d77e478125b808eed48fd307e85c541&imgtype=0&src=http%3A%2F%2Fimgup02.iefans.net%2Fiefans%2F2018-07%2F13%2F13%2F15314611767081_5.png" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608500&di=eb16d007177883aac6ca77ff6ea71044&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F005xDQvpzy7jWAViB9q5c%26690" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
            </div>
            <div className="itemContainer">
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608500&di=285f127ad3980394633d96928e651f92&imgtype=0&src=http%3A%2F%2Fxnnews.com.cn%2Fwenyu%2Frdzx%2F201808%2FW020180811327420405728.jpg" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608500&di=eb16d007177883aac6ca77ff6ea71044&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F005xDQvpzy7jWAViB9q5c%26690" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608502&di=1d77e478125b808eed48fd307e85c541&imgtype=0&src=http%3A%2F%2Fimgup02.iefans.net%2Fiefans%2F2018-07%2F13%2F13%2F15314611767081_5.png" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608500&di=285f127ad3980394633d96928e651f92&imgtype=0&src=http%3A%2F%2Fxnnews.com.cn%2Fwenyu%2Frdzx%2F201808%2FW020180811327420405728.jpg" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608502&di=1d77e478125b808eed48fd307e85c541&imgtype=0&src=http%3A%2F%2Fimgup02.iefans.net%2Fiefans%2F2018-07%2F13%2F13%2F15314611767081_5.png" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608502&di=1d77e478125b808eed48fd307e85c541&imgtype=0&src=http%3A%2F%2Fimgup02.iefans.net%2Fiefans%2F2018-07%2F13%2F13%2F15314611767081_5.png" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
            </div>
            <div className="itemContainer">
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913117&di=dd0d1c60a1d942e0c543e21a3ec6f794&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FQx%3Db5rUy4yVZ3iPXnGx7xpRDngP7pQSwnQ%3DMu02JgE3E51531530297317.gif" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=3c5949f9c03ce91c6be8e54b680bd920&imgtype=0&src=http%3A%2F%2Fimgup01.sj88.com%2F2018-07%2F14%2F16%2F15315566132890_4.jpg" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298546633&di=2db927bc42e6bc9f9daa4e39176457e4&imgtype=0&src=http%3A%2F%2F02.imgmini.eastday.com%2Fmobile%2F20180420%2F20180420_31b10686d47108630ff3d294372b912f_cover_mwpm_03201609.jpg" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298571830&di=0f5984cc3443ba1125b8aa33a737811d&imgtype=0&src=http%3A%2F%2F06.imgmini.eastday.com%2Fmobile%2F20180816%2F20180816121956_ec3ddfb045d0b1e4afedc81d96d7749c_6_mwpm_03201609.jpg" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298571846&di=4d8a0e1cea0670ac27147f712bfcb88f&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2F0265D037EE9751AD8BD4634E4357F1C39FC48F5A_size56_w750_h731.jpeg" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608502&di=1d77e478125b808eed48fd307e85c541&imgtype=0&src=http%3A%2F%2Fimgup02.iefans.net%2Fiefans%2F2018-07%2F13%2F13%2F15314611767081_5.png" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
                <div className="item">
                    <img className="itemImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608500&di=eb16d007177883aac6ca77ff6ea71044&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F005xDQvpzy7jWAViB9q5c%26690" alt=""/>
                    <div className="userInfo">
                        <img className="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536297913116&di=d8fa11afca0491d48e08b66a42f88354&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0731%2FBDD16575733365177F3BA3128D8BD4FCC0D8A365_size90_w1080_h1496.jpeg" alt=""/>
                        <span className="username">牵起你的左手护着你</span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}