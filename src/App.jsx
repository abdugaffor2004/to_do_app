import * as React from 'react';
import s from './App.module.css';
import Task from './Task';

let App = (props) => {


  // const updateTextCaller = (event)=>{
  //   let value = event.target.value
  //   props.updateText(value)
  // }

  const updateTitleTextCaller = (event)=>{
      let value = event.target.value
      props.updateTitleText(value)
  }

  const updateDescriptionTextCaller = (event)=>{
    let value = event.target.value
    props.updateDescriptionText(value)
}

  const addNewTaskCaller = () => {
    // let date = new Date
    // let time = date.toLocaleTimeString() // Отправляем актуальное время добавления заметки 
    props.addNewTask() //<--time
  }


  let taskElements = props.taskData.map( item => <Task key={item.id}
                                                      taskId = {item.id} 
                                                      newTaskTitle={item.newTaskTitle} 
                                                      newTaskDescription={item.newTaskDescription}
                                                      complete={props.complete}
                                                      uncomplete={props.uncomplete}
                                                      completedStatus={item.isCompleted} />)

  return (
    <div className={s.App}>

    <div className={s.headerText}>
      <span> ToDo App </span>
    </div>

    <div className={s.container}>
      <input placeholder='Enter Title' type='text' onChange={updateTitleTextCaller} value={props.taskTitle} />
      <input placeholder='Enter Description' type="text" onChange={updateDescriptionTextCaller} value={props.taskDescription} />
      <button onClick={addNewTaskCaller} type="submit">Add</button>
      
    </div>

    <div className={s.tasksContainer}>

      {taskElements}
      

    </div>

      

      
    </div>
  );
};

export default App;