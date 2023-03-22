import * as React from 'react';
import s from './App.module.css';

let App = (props) => {

  const updateTextCaller = (event)=>{
    let value = event.target.value
    props.updateText(value)
  }

  return (
    <div className={s.App}>
      <div className={s.container}>
        <textarea onChange={updateTextCaller} value={props.TaskText} rows="5"></textarea>
        <div className={s.controlls}>
          <button type="button">Add</button>
        </div>
      </div>
    </div>
  );
};

export default App;