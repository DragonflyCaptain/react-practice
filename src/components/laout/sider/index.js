import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

// const Sider = () => {
//     return(
//         <Layout>
//           <Sider>
//             <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//               <Menu.Item key="1">
//                 <span>nav 1</span>
//               </Menu.Item>
//               <Menu.Item key="2">
//                 <span>nav 2</span>
//               </Menu.Item>
//               <Menu.Item key="3">
//                 <span>nav 3</span>
//               </Menu.Item>
//             </Menu>
//           </Sider>
//         </Layout>
//     )
// }
class SiderNav extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div style={{height:'100%'}}>
                <Layout>
                    <Sider>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <span>nav 3</span>
                            </Menu.Item>
                            <Menu.Item key="1">
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </Layout>
            </div>
        )
    }
}
export default SiderNav