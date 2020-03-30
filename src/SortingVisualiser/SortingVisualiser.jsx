import React from 'react';
import './SortingVisualiser.css';
import Input from './input/input'

let min = 0
let max = 0
let count = 0
let speed = 0

export default class SortingVisualiser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        }
    };

    newArray() {
        const array = [];
        for (let i = 0; i < count; i++) {
            array.push(RandIntFromInterval(min,max))
        };
        console.log(min)
        console.log(max)
        for (let i=0; i<5; i++) {
        console.log(RandIntFromInterval(min,max))}
        console.log(array)
        this.setState({array:array});
    }

    render() {
        return (<div>
            <div className="array-container">
            {this.state.array.map((value,idx) =>
                <div className="array-bar-container"
                    key={idx} style={{width:`${100/count}%`}}>
                    <div className = "array-bar-container-2">
                        <div className="array-bar"
                        key={idx}
                        style={{height:`${(1-value/max)*100}%`}}>
                        </div>
                    </div>
                </div>
            )}
            </div>
            <div className="bar">
                <div className="input-column1">
                    <Input name="min" onChange={(newMin)=>min=Number(newMin)}/>
                    <Input name="max" onChange={(newMax)=>max=Number(newMax)}/>
                </div>
                <div className="input-column2">
                    <Input name="count" maxlength="3" placeholder="1-300"
                    onChange={(newCount)=>count=Number(newCount)}/>
                    <Input name="speed" maxlength="1" placeholder="1-9"
                    onChange={(newSpeed)=>speed=Number(newSpeed)}/>
                </div>
                <button id="new" onClick={()=>this.newArray()}>New!</button>
                <div className="button-column1">
                    <button onClick={()=>this.bubbleSort()}>bubble sort</button>
                    <button onClick={()=>this.insertionSort()}>insertion sort</button>
                </div>
                <div className="button-column2">
                    <button onClick={()=>this.selectionSort()}>selection sort</button>
                    <button onClick={()=>this.quickSort()}>quick sort</button>
                </div>
                <div className="button-column3">
                    <button onClick={()=>this.mergeSort()}>merge sort</button>
                    <button onClick={()=>this.heapSort()}>heap sort</button>
                </div>
            </div>
        </div>)
    };
}

let RandIntFromInterval = (min,max) =>
    Math.floor(Math.random() * (max-min+1)) + min