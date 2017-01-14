import React, { Component } from 'react';

export default class Markdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className}>
        <textarea rows='22' type='text' value={this.props.value} ref='textarea'  className='form-control' onChange={this.props.onChange} />
      </div>
    );
  }
}
