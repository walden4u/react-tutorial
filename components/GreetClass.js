import React, { Component } from "react";

class GreetClass extends Component {
  render() {
    const { name, heroName } = this.props;
    return (
      <h1>
        Welcom {name} ==> {heroName}
      </h1>
    );
  }
}

export default GreetClass;
