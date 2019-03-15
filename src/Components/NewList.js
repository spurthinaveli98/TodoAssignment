import React,{Component} from 'react';
import "./NewListTest.css";

class NewList extends Component {

  render() {
     let showHideClassName;
    if (this.props.showNewList) {
      showHideClassName = "modal display-block";
    } else {
      showHideClassName = "modal display-none";
    }
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
        <div>
        <div >
        {this.props.children[0]}
        </div>
        <div className="modal-sidebar">
          <p>List:</p>
        <div>{this.props.children[1]}</div>
        <p>Remind me:</p>
        <div>{this.props.children[2]}</div>
        </div>
        </div>
      
          <div className="modal-footer" onClick={this.props.handleAddTask}>
            <button className="AddTask" >
              <strong>Add Task</strong>
            </button>
          </div>
          
          </section>
      </div>
    );
  }
}


export default NewList;

