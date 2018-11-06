import React, { Component } from "react";

export default class App extends Component {
  state = {
    counter: 0
  };

  handleOnClickInc = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleOnClickDec = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOnClickInc}>+</button>
        <button onClick={this.handleOnClickDec}>-</button>
        {this.state.counter}
      </div>
    );
  }
}
