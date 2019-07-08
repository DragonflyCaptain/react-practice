import React, { Component } from 'react';
// import { request } from '../../request'

import './index.css';

class ReactMap extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidMount(){

        //百度地图
        // var BMap = window.BMap
        // var map = new BMap.Map("allmap"); // 创建Map实例
        // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设    置中心点坐标和地图级别
        // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        // map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
        // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

        this.requestMarker()
    }

    async requestMarker () {
        let AMap = window.AMap;
        // const res = await request('http://58.49.165.10:8888/marktool/scatterPoint?type=2');
        // console.log(res.data)
        let map = new AMap.Map('allmap',{
            zoom: 18,
        })
        // let cluster, markers = [];


        // let map = new AMap.Map('allmap',{
        //     resizeEnable: true,
            //center: [116.397428, 39.90923],
            // zoom: 16,
            // zooms: [4,18],
            //layers: [//使用多个图层
                // new AMap.TileLayer.Satellite(),      //卫星图层
                //new AMap.TileLayer.RoadNet(),           //路网图层
                // new AMap.TileLayer.Traffic({})       //实时路况图层
            //],
        //     mapStyle: 'amap://styles/macaron', //设置地图的显示样式
        // })

        //实时路况
        // let trafficLayer = new AMap.TileLayer.Traffic({
        //     zIndex: 10
        // });
        //将路况图层添加到地图中
        //map.add(trafficLayer)

        let marker = new AMap.Marker({
            position:[116.39, 39.9]
        })
        //添加标记点
        map.add(marker)
        //移除标记点
        // map.remove(marker)

    //     var infoWindow = new AMap.InfoWindow({ //创建信息窗体
    //         isCustom: true,  //使用自定义窗体
    //         content:'<div>信息窗体</div>', //信息窗体的内容可以是任意html片段
    //         offset: new AMap.Pixel(16, -45)
    //     });
    //     var onMarkerClick  =  function(e) {
    //         infoWindow.open(map, e.target.getPosition());//打开信息窗体
    //         //e.target就是被点击的Marker
    //     }
    //     var marker = new AMap.Marker({
    //         position: [116.481181, 39.989792]
    //    })
    //    map.add(marker);
    //    marker.on('click',onMarkerClick);//绑定click事件
    }

    render(){
        return(
            <div style={{textAlign: 'center'}} >
                <div id="allmap"className="mapContainer" ></div>
            </div>
        )
    }
}

export default ReactMap