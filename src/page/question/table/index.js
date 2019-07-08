/*
 * @Author: mikey.zhaopeng
 * @Date: 2019-05-14 10:54:00
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-05-14 10:56:55
 */

import React from 'react';
import { Table } from 'antd';

  const columns = [
    {
        title: "序号",
        dataIndex: "num",
        render: ((text, record, index)=>{
            if(index<data.length-1){
                return <span>{index+1}</span>
            }
            return {
                children: <span>合计</span>,
                props: {
                    colSpan: 2
                },
            }
        }),
        width: "20%"
    },
    {
        title: "单位",
        dataIndex: "xzqh",
        key: "xzqh",
        width: '20%',
        render: (( text, record, index ) => {
            const obj = {
                children: record.xzqh,
                props: {},
            };
            if (index === data.length - 1) {
                obj.props.colSpan = 0;
            }
            return obj;
        })
    },
    { title: "干垃圾（吨）", dataIndex: "weigh", key: "weigh", width: '20%' },
    {
        title: "湿垃圾（吨）",
        dataIndex: "wetWeigh",
        key: "wetWeigh",
        width: '20%'
    },
    {
        title: "合计",
        dataIndex: "totalWeigh",
        key: "totalWeigh",
        width: '20%',
    },
  ];
  
  const data = [
    {
        "xzqh": "新洲区",
        "weigh": "522.44",
        "wetWeigh": "0",
        "totalWeigh": "522.44",
        key: 1123
    },
    {
        "xzqh": "蔡甸区",
        "weigh": "502.8",
        "wetWeigh": "0",
        "totalWeigh": "502.8",
        key: 1123123
    },
    {
        "xzqh": "江岸区",
        "weigh": "908.88",
        "wetWeigh": "0",
        "totalWeigh": "908.88",
        key: 1123123123123
    },
    {
        "xzqh": "武昌区",
        "weigh": "1132.86",
        "wetWeigh": "0",
        "totalWeigh": "1132.86",
        key: 112323432
    },
    {
        "xzqh": "汉阳区",
        "weigh": "806.43",
        "wetWeigh": "0",
        "totalWeigh": "806.43",
        key: 11239875
    },
    {
        "xzqh": "黄陂区",
        "weigh": "1086.88",
        "wetWeigh": "0",
        "totalWeigh": "1086.88",
        key: 1123908
    },
    {
        "xzqh": "武汉开发区",
        "weigh": "375.89",
        "wetWeigh": "0",
        "totalWeigh": "375.89",
        key: 1123765790
    },
    {
        "xzqh": "江汉区",
        "weigh": "768.28",
        "wetWeigh": "0",
        "totalWeigh": "768.28",
        key: 112345700632
    },
    {
        "xzqh": "武汉化工区",
        "weigh": "30.4",
        "wetWeigh": "0",
        "totalWeigh": "30.4",
        key: 1123246008768900
    },
    {
        "xzqh": "江夏区",
        "weigh": "747.32",
        "wetWeigh": "0",
        "totalWeigh": "747.32",
        key: 112300000
    },
    {
        "xzqh": "硚口区",
        "weigh": "759.52",
        "wetWeigh": "0",
        "totalWeigh": "759.52",
        key: 11231111
    },
    {
        "xzqh": "东湖开发区",
        "weigh": "842.12",
        "wetWeigh": "0",
        "totalWeigh": "842.12",
        key: 11232222
    },
    {
        "xzqh": "洪山区",
        "weigh": "1473.6",
        "wetWeigh": "0",
        "totalWeigh": "1473.6",
        key: 112333333
    },
    {
        "xzqh": "东西湖区",
        "weigh": "915.92",
        "wetWeigh": "0",
        "totalWeigh": "915.92",
        key: 112344444
    },
    {
        "xzqh": "汉南区",
        "weigh": "127.06",
        "wetWeigh": "0",
        "totalWeigh": "127.06",
        key: 112355555
    },
    {
        "xzqh": "青山区",
        "weigh": "380.34",
        "wetWeigh": "0",
        "totalWeigh": "380.34",
        key: 11236666
    },
    {
        "xzqh": "东湖风景区",
        "weigh": "93.84",
        "wetWeigh": "0",
        "totalWeigh": "93.84",
        key: 11237777
    },
    {
        "xzqh": "合计",
        "weigh": "93.84",
        "wetWeigh": "0",
        "totalWeigh": "93.84",
        key: 11237772137
    }
];
export default class QuestionTable extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    scroll={{ y: 700 }}
                />
            </div>
        )
    }
}
