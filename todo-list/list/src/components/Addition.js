import React, { Component } from 'react';

export default class Addition extends Component {
    constructor(props){
        super(props);

        this.state = {
            edit: 'call someone'
        }
    }

    handleOnChange = (e) => {
        this.setState({edit: e.target.value});
    }

    handleOnClick = (e) => {
        this.props.onAddTodo(this.state.edit);
        this.setState({edit: ''});

    }

    render(){
        return (
            <div>
                <button onClick={this.handleOnClick} />
                <input onChange={this.handleOnChange} value={this.state.edit}/> 
            </div>
        );
    }


}