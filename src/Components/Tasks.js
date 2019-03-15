import React, { Component } from "react";
import DisplayTasks from './DisplayTasks';
import "./Tasks.css";
var tasks=[];
class Tasks extends Component {
  constructor()
  {
    super()
    {
     this.state={
       task:"",
       show:false,
       Today:"",
       Tomorrow:"",
       Someday:""
     }
    }
  }
  display(name){
  var show=!this.state.show;
  var task="";
  var Today="";
  var Tomorrow="";
  var Someday="";
   let items=this.props.items;
   if(show)
   {
   for(let i=0;i<items.length;i++)
   {
     if(items[i].key===this.props.currentKey)
     {
      tasks=items[i].DeadLines[name];
      console.log(items[i].DeadLines[name]);
     }
   }
   for(var i=0;i<tasks.length;i++)
   {
     task=task+tasks[i];
     task=task+'\n';
   }
   if(name=="Today")
   {
     Today=task;
   }
   else if(name=="Tomorrow"){
     Tomorrow=task;
   }
   else if(name=="Someday"){
     Someday=task;
   }
  }
   console.log(task);
   this.setState(
   {
     show:show,
     task :task,
     Today:Today,
     Tomorrow:Tomorrow,
     Someday:Someday
   });
  
  }

  render() {
   
    return (
      <div className="Tasks">
           <strong>{this.props.taskName}</strong>
          <div className="Card">
            <div className="Task" onClick={this.display.bind(this,"Today")}>
            Today 
            <div className="DisplayTasks">{this.state.Today}</div> 
            </div>
            <div className="Task" onClick={this.display.bind(this,"Tomorrow")}>
            Tomorrow
            <div className="DisplayTasks">{this.state.Tomorrow}</div> 
            </div>
            <div className="Task" onClick={this.display.bind(this,"Someday")}>
            Someday
            <div className="DisplayTasks">{this.state.Someday}</div> 
            </div>
            
            
          </div>
       
      </div>
    );
  }
}

export default Tasks;
