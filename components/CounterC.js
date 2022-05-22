import React, { Component } from 'react';

class CounterC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onClickButton = () => {
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log('Callback value', this.state.count);
    // });
    this.setState(
      (prevState, props) => ({ count: prevState.count + 1 }),
      () => console.log('Callback value', this.state.count)
    );
    console.log(this.state.count);
  };

  incrementFive = () => {
    this.onClickButton();
    this.onClickButton();
    this.onClickButton();
    this.onClickButton();
    this.onClickButton();
  };

  render() {
    return (
      <>
        <h2>Counter : {this.state.count}</h2>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </>
    );
  }
}

export default CounterC;
