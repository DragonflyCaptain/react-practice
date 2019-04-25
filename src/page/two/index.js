import React from 'react';
import { Button } from '@alifd/next';
export default class Two extends React.Component {
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
                    <h1>two</h1>
                    <Button type="primary">Prirmary</Button> &nbsp;&nbsp;
                </div>
            </div>
        )
    }
}