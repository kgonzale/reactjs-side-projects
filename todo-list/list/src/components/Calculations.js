import React, { Component } from 'react';
import Addition from './Addition.js';

export default class Calculations extends Component {
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


    render() {
        return (
            <div>
                <Addition onAddTodo={this.onAddTodo} />
            </div>
        );
    }
}