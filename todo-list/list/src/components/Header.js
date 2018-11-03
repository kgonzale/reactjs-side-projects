import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: "call someone"
    };
  }

  handleOnChange = e => {
    this.setState({ edit: e.target.value });
  };

  handleOnClick = () => {
    this.props.onAddTodo(this.state.edit);
    this.setState({ edit: "" });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Add Todo</button>
        <input onChange={this.handleOnChange} value={this.state.edit} />
      </div>
    );
  }
}

export default Header;
