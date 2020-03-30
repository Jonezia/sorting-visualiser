import React from 'react';
import './input.css';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const value = e.target.value;
        this.props.onChange(value)
    }

    render() {
        return(<div className="input-box">
                <p className="input-name">{this.props.name}:</p>
                <input onChange={this.handleChange} maxlength={this.props.maxlength}
                placeholder={this.props.placeholder}/>
            </div>)
    }
}