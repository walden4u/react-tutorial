import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello'
    };
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    this.setState({ message: 'Bye!!!' });
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={this.onClickButton}>Click</button>
      </>
    );
  }
}

export default EventBind;
