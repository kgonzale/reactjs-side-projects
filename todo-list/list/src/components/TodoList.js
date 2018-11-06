import React, { Component } from "react";

class TodoList extends Component {
  render() {
    // const listArray = [];
    // for (let i = 0; i < this.props.todos.length; i++) {
    //   const deleteFunction = i => {
    //     this.props.onDeleteTodo(i);
    //   };

    //   listArray.push(this.props.todos[i]);
    // }

    // console.log(listArray);

    const copyTodos = this.props.todos.slice();
    const array = copyTodos.map((item, index) => {
      return <div key={index}>{item}</div>;
    });

    return (
      <div>
        <button onClick={this.deleteFunction}>X</button>
        <div>{array}</div>
      </div>
    );
  }
}

export default TodoList;
