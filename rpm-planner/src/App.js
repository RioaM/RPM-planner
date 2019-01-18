import React, { Component } from 'react';
import { TaskAdder } from './components/TaskAdder/TaskAdder';
import { TaskList } from './components/TaskList/TaskList'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
    this.updateTasks = this.updateTasks.bind(this);
  }

  updateTasks(newTask){
    const updatedTasks = this.state.tasks.slice().concat(newTask);
    this.setState({tasks: updatedTasks});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>RPM Planner</h1>
        </header>
        <main className="App-main">
            <h2>Master Task List</h2>
            <TaskList tasks={this.state.tasks}/>
            <TaskAdder updateTasks={this.updateTasks}/>
        </main>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
