import React from 'react';
import './index.css';

export default class rotatePhotos extends React.Component {
    constructor(props){
        super(props)
        this.state={
            movieArray: [],
        }
    }
    render() {
        return (
            <div>
                <div>
                    {/* <h1>three</h1> */}
                    <ul className="scrollPhoto">
                        <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608500&di=eb16d007177883aac6ca77ff6ea71044&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F005xDQvpzy7jWAViB9q5c%26690" alt=""/></li>
                        <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608500&di=eb16d007177883aac6ca77ff6ea71044&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F005xDQvpzy7jWAViB9q5c%26690" alt=""/></li>
                        <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608500&di=eb16d007177883aac6ca77ff6ea71044&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F005xDQvpzy7jWAViB9q5c%26690" alt=""/></li>
                        <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608500&di=eb16d007177883aac6ca77ff6ea71044&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F005xDQvpzy7jWAViB9q5c%26690" alt=""/></li>
                        <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608500&di=eb16d007177883aac6ca77ff6ea71044&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F005xDQvpzy7jWAViB9q5c%26690" alt=""/></li>
                        <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536298608500&di=eb16d007177883aac6ca77ff6ea71044&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F005xDQvpzy7jWAViB9q5c%26690" alt=""/></li>
                    </ul>
                </div>
            </div>
        )
    }
}