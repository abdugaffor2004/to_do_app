import * as React from 'react';
import s from './App.module.css';
import Task from './Task';

let App = (props) => {


  const updateTextCaller = (event)=>{
    let value = event.target.value
    props.updateText(value)
  }

  const addNewTaskCaller = () => {
    let date = new Date
    let time = date.toLocaleTimeString()
    props.addNewTask(time)
  }

  let taskElements = props.taskData.map( item => <Task key={item.id} newTaskText={item.newTaskText} date={item.date} /> )

  return (
    <div className={s.App}>
      <div className={s.container}>
        <textarea onChange={updateTextCaller} value={props.TaskText} rows="5"></textarea>
        <div className={s.controlls}>
          <button onClick={addNewTaskCaller} type="submit">Add</button>
        </div>

        {taskElements}

      </div>
    </div>
  );
};

export default App;