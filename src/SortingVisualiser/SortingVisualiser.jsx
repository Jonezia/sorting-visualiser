import React from 'react';
import './SortingVisualiser.css';
import Input from './input/input'
import {bubbleSortAnims, selectionSortAnims} from './SortingAlgorithms.js';

let min = 0
let max = 0
let count = 0
let delay = 0

let tid
let running = false

let color1 = 'orange'
let color2 = 'red'

export default class SortingVisualiser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            color1: [],
            color2: []
        }
    };

    newArray() {
        running = false
        clearTimeout(tid)
        const array = [];
        for (let i = 0; i < count; i++) {
            array.push(RandIntFromInterval(min,max))
        };
        this.setState({array:array, color1: [], color2: []});
    }

    bubbleSort() {
        let frames = bubbleSortAnims(this.state.array)
        let bubbleSortRun = () => {
            if (running) {
            if (i == frames[0].length) {
                running = false
                clearTimeout(tid);
                this.setState({color1: [], color2: []})
            } else {
                this.setState({array:frames[0][i],
                    color1: frames[1][i],
                    color2: frames[2][i]});
                i += 1
                tid = setTimeout(bubbleSortRun, delay)
            }
        }}
        running = true
        let tid = setTimeout(bubbleSortRun, delay)
        let i = 0
    };

    selectionSort() {
        let frames = selectionSortAnims(this.state.array)
        let selectionSortRun = () => {
            if (running) {
            if (i == frames[0].length) {
                running = false
                clearTimeout(tid);
                this.setState({color1: [], color2: []})
            } else {
                this.setState({array:frames[0][i],
                    color1: frames[1][i],
                    color2: frames[2][i]});
                i += 1
                tid = setTimeout(selectionSortRun, delay)
            }
        }}
        running = true
        let tid = setTimeout(selectionSortRun, delay)
        let i = 0
    };

    render() {
        return (<div>
            <div className="array-container">
            {this.state.array.map((value,idx) =>
                <div className="array-bar-container"
                    key={idx} style={{width:`${100/count}%`}}>
                    <div className = "array-bar-container-2"
                    style={{backgroundColor: (this.state.color1.includes(idx)) ?
                    color1 : (this.state.color2.includes(idx)) ? color2 : 'blue'}}>
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
                    <Input name="delay" onChange={(newDelay)=>delay=Number(newDelay)}/>
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