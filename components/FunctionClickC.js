import React, { Component } from 'react';

class FunctionClickC extends Component {
  onClickButton = () => {
    console.log('Click me!');
  };
  render() {
    return (
      <>
        <button onClick={() => this.onClickButton()}>ClickC</button>
      </>
    );
  }
}

export default FunctionClickC;
