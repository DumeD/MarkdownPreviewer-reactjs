import React, { Component } from 'react';
import Markdown from './markdown';
import marked from 'marked';

export default class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[David Dume](https://www.freecodecamp.com/dumed)*' };

    this.updateValue = this.updateValue.bind(this);
  }
  updateValue(val) {
    this.setState({ value: val });
  }
  markup(text) {
    var markup = marked(text, { sanitize: true });
    return { __html: markup}
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-6'>
          <Markdown value={this.state.value} updateValue={this.updateValue} />
        </div>
        <div className='col-md-6'>
          <span dangerouslySetInnerHTML={this.markup(this.state.value)} />
        </div>
      </div>
    );
  }
}
