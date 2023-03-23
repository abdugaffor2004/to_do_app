
const UPDATE_TEXT = 'UPDATE-TEXT ';
const ADD_NEW_TASK = 'ADD-NEW-TASK';

let dateData = new Date()
        let year = dateData.getFullYear()
        let day = new Intl.DateTimeFormat('default', {weekday: 'long'}).format(dateData)
        let month = new Intl.DateTimeFormat('default', {month:'long'}).format(dateData)
        let dayDigit = dateData.toLocaleString('default', {day:"2-digit"})
        let time = dateData.toLocaleTimeString()

const initialState = {
  TaskText: '',
  taskData: [ 
    // `{ id: 1, newTaskText: 'Inna lilahi inna ilaihi radzhiun', date: {year, day, month, dayDigit, time}},
    // { id: 2, newTaskText: 'Fi aman Allah', date: {year, day, month, dayDigit, time}},
    // { id: 3, newTa`skText: 'Allahuma nimal waqil', date: {year, day, month, dayDigit, time}}

  ]
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT: {
      return{
        ...state,
        TaskText: action.newText
      }
    }

    case ADD_NEW_TASK:{

      let newTask = {
        id: 4,
        newTaskText: state.TaskText,
        date: {year, day, month, dayDigit, time: action.time}
      }

      let stateCopy ={
        ...state,
        taskData: [...state.taskData]
      }
      if(state.TaskText !== ""){stateCopy.taskData.push(newTask)}
      

      stateCopy.TaskText = ''

      return stateCopy
    }

    default: return state
  }
};

export let updateTextAC = (newText) => {
  return { type: UPDATE_TEXT, newText };
};

export let addNewTaskAC = (time) =>{
  return {type: ADD_NEW_TASK, time}
}


export default toDoReducer;