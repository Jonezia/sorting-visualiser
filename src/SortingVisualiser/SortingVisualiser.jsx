import React from 'react';
import './SortingVisualiser.css';

export default class SortingVisualiser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
    };

    componentWillMount() {
        this.newArray(5,500,50)
    }

    newArray(min,max,count) {
        const array = [];
        for (let i = 0; i < count; i++) {
            array.push(RandIntFromInterval(min,max))
        };
        this.setState({array:array})
    }

    render() {
        return (<div>
            {this.state.array.map((value,idx) =>
                <div>{value}</div>
            )}
        </div>)
    };
}

let RandIntFromInterval = (min,max) =>
    Math.floor(Math.random() * (max-min+1) + min)