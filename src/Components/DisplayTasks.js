import React, { Component } from "react";
import './TodoItems.css';

var i=0;
class DisplayTasks extends Component {

    constructor(props){
      super(props);
      this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li>{item[i++]}</li>
      }

      render() {
          console.log("entered");
        var taskEntries = this.props.tasks;
        var listItems = taskEntries.map(this.createTasks);
    
         return (
          <ul className="theList">
          {listItems}
          </ul>
        );
      }
    }
    
    export default DisplayTasks;