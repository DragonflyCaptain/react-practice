
// import React from 'react'
// import { Table } from 'antd'

// const columns = [
//     {
//         title: "序号",
//         dataIndex: "num",
//         render: ((text, record, index) => {
//             if (index < data.length - 1) {
//                 return <span>{index + 1}</span>
//             }
//             return {
//                 children: <span>合计</span>,
//                 props: {
//                     colSpan: 2
//                 },
//             }
//         }),
//         width: "20%"
//     },
//     {
//         title: "单位",
//         dataIndex: "xzqh",
//         key: "xzqh",
//         width: '20%',
//         render: ((text, record, index) => {
//             const obj = {
//                 children: record.xzqh,
//                 props: {},
//             }
//             if (index === data.length - 1) {
//                 obj.props.colSpan = 0
//             }
//             return obj
//         })
//     },
//     { title: "干垃圾（吨）", dataIndex: "weigh", key: "weigh", width: '20%' },
//     {
//         title: "湿垃圾（吨）",
//         dataIndex: "wetWeigh",
//         key: "wetWeigh",
//         width: '20%'
//     },
//     {
//         title: "合计",
//         dataIndex: "totalWeigh",
//         key: "totalWeigh",
//         width: '20%',
//     },
// ]

// const data = [
//     {
//         "xzqh": "新洲区",
//         "weigh": "522.44",
//         "wetWeigh": "0",
//         "totalWeigh": "522.44",
//         key: 1123
//     },
//     {
//         "xzqh": "蔡甸区",
//         "weigh": "502.8",
//         "wetWeigh": "0",
//         "totalWeigh": "502.8",
//         key: 1123123
//     },
//     {
//         "xzqh": "江岸区",
//         "weigh": "908.88",
//         "wetWeigh": "0",
//         "totalWeigh": "908.88",
//         key: 1123123123123
//     },
//     {
//         "xzqh": "武昌区",
//         "weigh": "1132.86",
//         "wetWeigh": "0",
//         "totalWeigh": "1132.86",
//         key: 112323432
//     },
//     {
//         "xzqh": "汉阳区",
//         "weigh": "806.43",
//         "wetWeigh": "0",
//         "totalWeigh": "806.43",
//         key: 11239875
//     },
//     {
//         "xzqh": "黄陂区",
//         "weigh": "1086.88",
//         "wetWeigh": "0",
//         "totalWeigh": "1086.88",
//         key: 1123908
//     },
//     {
//         "xzqh": "武汉开发区",
//         "weigh": "375.89",
//         "wetWeigh": "0",
//         "totalWeigh": "375.89",
//         key: 1123765790
//     },
//     {
//         "xzqh": "江汉区",
//         "weigh": "768.28",
//         "wetWeigh": "0",
//         "totalWeigh": "768.28",
//         key: 112345700632
//     },
//     {
//         "xzqh": "武汉化工区",
//         "weigh": "30.4",
//         "wetWeigh": "0",
//         "totalWeigh": "30.4",
//         key: 1123246008768900
//     },
//     {
//         "xzqh": "江夏区",
//         "weigh": "747.32",
//         "wetWeigh": "0",
//         "totalWeigh": "747.32",
//         key: 112300000
//     },
//     {
//         "xzqh": "硚口区",
//         "weigh": "759.52",
//         "wetWeigh": "0",
//         "totalWeigh": "759.52",
//         key: 11231111
//     },
//     {
//         "xzqh": "东湖开发区",
//         "weigh": "842.12",
//         "wetWeigh": "0",
//         "totalWeigh": "842.12",
//         key: 11232222
//     },
//     {
//         "xzqh": "洪山区",
//         "weigh": "1473.6",
//         "wetWeigh": "0",
//         "totalWeigh": "1473.6",
//         key: 112333333
//     },
//     {
//         "xzqh": "东西湖区",
//         "weigh": "915.92",
//         "wetWeigh": "0",
//         "totalWeigh": "915.92",
//         key: 112344444
//     },
//     {
//         "xzqh": "汉南区",
//         "weigh": "127.06",
//         "wetWeigh": "0",
//         "totalWeigh": "127.06",
//         key: 112355555
//     },
//     {
//         "xzqh": "青山区",
//         "weigh": "380.34",
//         "wetWeigh": "0",
//         "totalWeigh": "380.34",
//         key: 11236666
//     },
//     {
//         "xzqh": "东湖风景区",
//         "weigh": "93.84",
//         "wetWeigh": "0",
//         "totalWeigh": "93.84",
//         key: 11237777
//     },
//     {
//         "xzqh": "合计",
//         "weigh": "93.84",
//         "wetWeigh": "0",
//         "totalWeigh": "93.84",
//         key: 11237772137
//     }
// ]

// function customTable() {
//     return (
//         <Table
//             columns={columns}
//             dataSource={data}
//             pagination={false}
//         />
//     )
// }

import React, { Component, Fragment } from 'react'
import { Button, Input, Table, Popconfirm } from 'antd';
import './index.less'
const ButtonGroup = Button.Group;

const btnConfig = ['每日', '每周', '每月']

class customTable extends Component {
    state = {
        dataSource: [
            {
                key: '1',
                facility: '胡彦斌',
                period: 0,
                count: 5,
            }, {
                key: '2',
                facility: '彭于晏',
                period: 2,
                count: 5,
            }, {
                key: '3',
                facility: '岳云鹏',
                period: 1,
                count: 5,
            },
        ]
    }
    columns = [
        {
            title: '基础设施',
            dataIndex: 'facility',
            key: 'facility',
        },
        {
            title: '巡查周期',
            dataIndex: 'period',
            key: 'period',
            render: (text, record, index) => {
                return (
                    <div className="period-btn">
                        {this.mapCount(record, index)}
                    </div>
                )
            }
        },
        {
            title: '周期次数',
            dataIndex: 'count',
            key: 'count',
            render: (text, record, index) => {
                return (
                    <ButtonGroup className="change-count">
                        <Button onClick={() => this.decline(index)} icon="minus" />
                        <Input value={record.count} onChange={(e) => this.handleChange(e, index)} style={{ width: 60 }} />
                        <Button onClick={() => this.increase(index)} icon="plus" />
                    </ButtonGroup>
                )
            }
        }, {
            title: '操作',
            dataIndex: 'edit',
            key: 'edit',
            render: (text, record, index) => {
                return (
                    <Popconfirm
                        title="是否保存?"
                        onConfirm={() => this.confirm(record)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button>保存</Button>
                    </Popconfirm>
                )
            }
        }
    ]

    handleChange(e, index) {
        let dataSource = this.state.dataSource
        dataSource[index].count = e.target.value
        this.setState({
            dataSource
        })
    }

    mapCount(record, i) {
        return btnConfig.map((item, index) => {
            return (
                <Button className={record.period === index ? 'time-btn checked' : 'time-btn'} key={index} onClick={() => this.handleCountClick(index, i)}>{item}</Button>
            )
        })
    }
    handleCountClick(index, i) {
        let dataSource = this.state.dataSource
        dataSource[i].period = index
        this.setState({
            dataSource
        })
    }

    confirm(record) {
        console.log(record);
    }

    increase(index) {
        let dataSource = this.state.dataSource
        dataSource[index].count = dataSource[index].count + 1
        this.setState({ dataSource });
    };

    decline(index) {
        let dataSource = this.state.dataSource
        dataSource[index].count = dataSource[index].count - 1
        this.setState({ dataSource });
        if (dataSource[index].count < 0) {
            dataSource[index].count = 0;
        }
        this.setState({ dataSource });
    };
    render() {
        const { dataSource } = this.state
        return <Fragment>
            <Table
                dataSource={dataSource}
                columns={this.columns}
                pagination={false}
            />
        </Fragment>
    }
}

export default customTable
