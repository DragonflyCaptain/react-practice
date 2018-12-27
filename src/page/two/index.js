import React from 'react';

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
                </div>
            </div>
        )
    }
}