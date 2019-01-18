import React, { Component } from 'react';
import './TaskAdder.css';

export class TaskAdder extends Component {
  constructor(props){
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event){
    if(event.keyCode === 13 || event.which ===13){
        const input = document.getElementById('taskInput');
        this.props.updateTasks(input.value);
        input.value = '';
    }
  }

  render () {
    return (
      <div>
        <input id="taskInput" type="text" onKeyDown={this.handleKeyPress}/>
      </div>
    );
  }
}
