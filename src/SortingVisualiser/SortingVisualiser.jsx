import React from 'react';
import './SortingVisualiser.css';

export default class SortingVisualiser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            maxHeight: 0,
            maxValue:0,
            count: 0,
        }
    };

    componentWillMount() {
        this.newArray(5,500,20)
    }

    newArray(min,max,count) {
        const array = [];
        for (let i = 0; i < count; i++) {
            array.push(RandIntFromInterval(min,max))
        };
        let maxValue = Math.max.apply(Math, array);
        this.setState({array:array, maxHeight:max,
            count:count, maxValue: maxValue});
    }

    render() {
        return (<div className="array-container">
            {this.state.array.map((value,idx) =>
                <div className="array-bar-container"
                    key={idx} style={{width:`${100/this.state.count}%`}}>
                    <div className="array-bar"
                    key={idx}
                    style={{height:`${value/this.state.maxHeight*100}%`}}>
                    </div>
                </div>
            )}
        </div>)
    };
}

let RandIntFromInterval = (min,max) =>
    Math.floor(Math.random() * (max-min+1) + min)