import React, { Component } from 'react';

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos: [
                'eat',
                'sleep',
                'code'
            ]
        }
    }

    onDeleteTodo = (deleteIndex) => {
        let deleteTodo = this.state.todos.slice();
        deleteTodo.splice(deleteIndex, 1);
        this.setState({todos: deleteTodo});
    }

    onAddTodo = (text) => {
        if(text === ''){
            return;
        }

        let newTodo = this.state.todos.slice();
        newTodo.push(text);
        this.setState({todos: newTodo});
    }


    render(){
        return null;
    }
}