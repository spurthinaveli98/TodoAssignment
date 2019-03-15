import React from 'react';
import "./Options1.css";

const Options1 =function(props){


    const createTasks=function(item){
        return <li className="li" onClick={props.param1.bind(this,item.list)}
        key={item.key}>{item.list}</li>
      }

      var todoEntries = props.entries;
    var listItems = todoEntries.map(createTasks);

    return(
         <ul className="theList">
      {listItems}
      </ul>
    );
}

export default Options1;