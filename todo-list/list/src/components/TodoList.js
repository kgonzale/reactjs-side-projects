import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const listArray = [];
    for (let i = 0; i < this.props.todos.length; i++) {
      const deleteFunction = i => {
        this.props.onDeleteTodo(i);
      };

      listArray.push(this.props.todos[i]);
    }

    return (
      <div>
        <button onClick={this.deleteFunction}>X</button>
        <div>{listArray}</div>
      </div>
    );
  }
}

export default TodoList;
