import React, { Component } from 'react';
import './TodoItems.css';

class TodoItems extends Component {

constructor(props){
  super(props);

  this.createTasks = this.createTasks.bind(this);
}

  createTasks(item) {
    return <li className="li" onClick={() => this.display(item.list,item.key)}
    key={item.key}>{item.list}</li>
  }

  display(list,key) {
  //  console.log("llis"+list+" "+item);
    this.props.display(list,key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

     return (
      <ul className="theList">
      {listItems}
      </ul>
    );
  }
}

export default TodoItems;
