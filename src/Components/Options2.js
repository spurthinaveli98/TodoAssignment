import React, { Component } from "react";
import "./Options2.css";

const Options2 =function(props){

    return (
      <div className="Tasks1">
          <div className="Card1">
            <div className="Task1" onClick={props.param2.bind(this,"Today")}>
            Today  
            </div>
            <div className="Task1" onClick={props.param2.bind(this,"Tomorrow")}>
            Tomorrow
            </div>
            <div className="Task1" onClick={props.param2.bind(this,"Someday")}>
            Someday
            </div>
          </div>
       
      </div>
    );
  }

export default Options2;
