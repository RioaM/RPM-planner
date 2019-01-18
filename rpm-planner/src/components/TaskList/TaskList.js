import React, { Component } from 'react';
import './TaskList.css';


export class TaskList extends Component {
  render() {
    return(<div>
      {
        this.props.tasks ? this.props.tasks.map(track => {
              return  <div>{track}</div> }) :  <div></div>
      }
     </div>);
  }
}
