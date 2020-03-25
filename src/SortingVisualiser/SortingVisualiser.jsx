import React from 'react';
import './SortingVisualiser.css';

export default class SortingVisualiser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            maxHeight: 0,
            count: 0,
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
        this.setState({array:array, maxHeight:max,
            count:count});
    }

    render() {
        return (<div className="array-container">
            {this.state.array.map((value,idx) =>
                <div className="array-bar-container"
                    key={idx} style={{width:`${100/this.state.count}%`}}>
                    <div className="array-bar"
                    key={idx}
                    style={{height:`${(1-value/this.state.maxHeight)*100}%`}}>
                    </div>
                </div>
            )}
        </div>)
    };
}

let RandIntFromInterval = (min,max) =>
    Math.floor(Math.random() * (max-min+1) + min)