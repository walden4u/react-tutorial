import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello'
    };
  }

  onClickButton() {
    this.setState({ message: 'Bye!!!' });
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={this.onClickButton.bind(this)}>Click</button>
      </>
    );
  }
}

export default EventBind;
