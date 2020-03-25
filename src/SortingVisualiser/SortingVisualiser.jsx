import React from 'react';
import './SortingVisualiser.css';
import Input from './input/input'

export default class SortingVisualiser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            count: 50,
            min: 5,
            max: 500,
        }
        this.newArray = this.newArray.bind(this);
    };

    componentWillMount() {
        this.newArray()
    }

    newArray() {
        const array = [];
        for (let i = 0; i < this.state.count; i++) {
            array.push(RandIntFromInterval(this.state.min,this.state.max))
        };
        this.setState({array:array});
    }

    render() {
        return (<div>
            <div className="array-container">
            {this.state.array.map((value,idx) =>
                <div className="array-bar-container"
                    key={idx} style={{width:`${100/this.state.count}%`}}>
                    <div className = "array-bar-container-2">
                        <div className="array-bar"
                        key={idx}
                        style={{height:`${(1-value/this.state.max)*100}%`}}>
                        </div>
                    </div>
                </div>
            )}
            </div>
            <div className="bar">
                <div className="input-column1">
                    <Input/>
                    <Input/>
                </div>
                <div className="input-column2">
                    <Input/>
                    <Input/>
                </div>
                <button onClick={()=>this.newArray()}>New!</button>
            </div>
        </div>)
    };
}

let RandIntFromInterval = (min,max) =>
    Math.floor(Math.random() * (max-min+1) + min)