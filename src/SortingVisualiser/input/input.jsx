import React from 'react';
import './input.css';

export default class Input extends React.Component {
    render() {
        return(<div className="input-box">
                <p className="input-name">Test: </p>
                <input/>
            </div>)
    }
}