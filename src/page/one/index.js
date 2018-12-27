import React from 'react';

export default class One extends React.Component {
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
                    <h1>one</h1>
                </div>
            </div>
        )
    }
}