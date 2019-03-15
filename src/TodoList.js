import React, { Component } from 'react';
import './TodoList.css';
import TodoItems from './Components/TodoItems';
import DenseAppBar from './Components/DenseAppBar';
import Tasks from './Components/Tasks';
import Options1 from './Components/Options1';
import Options2 from './Components/Options2';
import NewList from './Components/NewList';


var tasks = "";
var currentKey="";
var day = "";
class TodoList extends Component {
constructor(props) {
super(props);

this.state = {
  show: true,
  showpic: true,
  showMenu: true,
  showNewList: false,
 items:[
     {
       key:0,
       list: "Personal",
       DeadLines: { "Today": [], "Tomorrow": [], "Someday": []}
     },
     {
      key:1,
       list: "Work",
       DeadLines: { "Today": [], "Tomorrow": [], "Someday": []}
     },
     {
      key:2,
       list: "GroceryList",
       DeadLines: { "Today": [], "Tomorrow": [], "Someday": []}
     }
 ]
};

this.style = {
  padding: "10px",
  width: "160px",
  border: "2px solid #eff0f2",
  margin: "10px"
}

this.addItem=this.addItem.bind(this);
this.displayItem=this.displayItem.bind(this);
}

addItem(e){
     if(this._inputElement.value !== ""){
       var DeadLines= { Today: [], Tomorrow: [], Someday: []};
      var newItem = {
        list: this._inputElement.value,
        DeadLines: DeadLines,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";
    e.preventDefault();
}

displayItem(list,key){
  tasks=list;
  currentKey=key;
  console.log("t"+tasks+currentKey);
  this.setState({show: true });
}

toggleMenuHandler = () => {
  const doesShow = this.state.showMenu;
  this.setState({showMenu: !doesShow});
}

showListHandler = () => {
    this.setState({ showNewList: true });
  };

AddTaskHandler = () => {
      this.setState({ showNewList: false });
      console.log(this.state.showNewList);
    };

    param1 = (pa) => {
      var items = this.state.items.slice();
      for(var i=0;i<items.length;i++){
        if(items[i].list == pa){
          console.log(items[i].DeadLines);
          items[i].DeadLines[day].push(this._inputElement2.value);
        }
      }

      this.setState({
items: items
      });

     


console.log(this.state.items);
    }

    param2 = (p) => {
      day=p;
     }


  render() {

    let menu = null;
    let content = null;
          menu = (
            <div className="content">

            <h3 className="h3"><strong className="strong">MY LISTS </strong>&#x270D;</h3>
             <TodoItems entries={this.state.items}
                           display={this.displayItem}/>
                <form onSubmit={this.addItem}>
                  <input style={this.style} ref={(a) => this._inputElement =a}
                  placeholder="+ New List">
                  </input>
                </form>
             </div>);

         if(this.state.show){
           content = 
           <div>
            <Tasks 
            taskName={tasks}
            currentKey={currentKey}
            items={this.state.items}
            />
          </div>
           
         }

    return (
      <div className="TodoList">
        <div className="top">
        <DenseAppBar click={() =>this.toggleMenuHandler()} showListHandler={this.showListHandler.bind(this)}/>
        </div>
        <div className="row">
          <div className={this.state.showMenu?'left show-menu':'left hide-menu'}>
          <div className="header">
          {menu}
          </div>
          </div>
          <div className={this.state.showMenu?'right show-hmenu':'right show-fmenu'}>
     
          <NewList showNewList={this.state.showNewList} handleAddTask={this.AddTaskHandler.bind(this)}>
          <input className="InputTask" placeholder="I want to.." ref={(b) => this._inputElement2 =b}/>
          <Options2 param2={this.param2}/>
          <Options1 entries={this.state.items} param1={this.param1}/>
        </NewList>
        {content} 
         </div>
        </div>
      </div>
    );
  }
}

export default TodoList;

