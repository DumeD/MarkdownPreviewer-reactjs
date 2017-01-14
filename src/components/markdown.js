import React, { Component } from 'react';
import reactDOM from 'react-dom';

export default class Markdown extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    var val = e.target.value;
    this.props.updateValue(val);
  }
  render() {
    return (
      <div className={this.props.className}>
        <textarea rows='22' type='text' value={this.props.value} ref='textarea'  className='form-control' onChange={this.onChange} />
      </div>
    );
  }
}
