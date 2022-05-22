import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello'
    };
    // this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    this.setState({ message: 'Bye!!!' });
  }

  // onClickButton = () => {
  //   this.setState({ message: 'Bye!!!' });
  // };

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={this.onClickButton.bind(this)}>Bind_renderBind</button>
        <button onClick={() => this.onClickButton()}>Bind1_renderArrow</button>
        <button onClick={this.onClickButton}>Bind3_ConstructorBind</button>
      </>
    );
  }
}

export default EventBind;
