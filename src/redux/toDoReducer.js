
const UPDATE_DESCRIPTION = 'UPDATE-DESCRIPTION';
const UPDATE_TITLE = 'UPDATE-TITLE'
const ADD_NEW_TASK = 'ADD-NEW-TASK';
const COMPLETE = "COMPLETE"
const UNCOMPLETE = "UNCOMPLETE"
const DELETE_TASK = "DELETE-TASK"

// let dateData = new Date()
//         let year = dateData.getFullYear()
//         let day = new Intl.DateTimeFormat('default', {weekday: 'long'}).format(dateData)
//         let month = new Intl.DateTimeFormat('default', {month:'long'}).format(dateData)
//         let dayDigit = dateData.toLocaleString('default', {day:"2-digit"})

const initialState = {
  taskDescription: '',
  taskTitle: '',
  taskData: []
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {

    // case UPDATE_TEXT: {
    //   return{
    //     ...state,
    //     taskDescription: action.newText,
    //     taskTitle: action.newText
    //   }
    // } // На будущее: параллельный ввод текста. Получилось случайно

    case UPDATE_TITLE: {
        return{
          ...state,
          taskTitle: action.newTitle
        }
    }

    case UPDATE_DESCRIPTION: {
        return{
          ...state,
          taskDescription: action.newDescription
        }
    }

    case ADD_NEW_TASK:{


      let newTask = {
        id: Math.floor(Math.random() * 100),
        newTaskTitle: state.taskTitle,
        newTaskDescription: state.taskDescription,
        isCompleted: false
        // date: {year, day, month, dayDigit, time: action.time}
      }

      let stateCopy ={
        ...state,
        taskData: [...state.taskData]
      }
      if(state.taskTitle && state.taskDescription !== ""){stateCopy.taskData.push(newTask);}
      

      stateCopy.taskTitle = ''
      stateCopy.taskDescription = ''

      return stateCopy
    }

    case COMPLETE:{
      return {
        ...state,
        taskData: state.taskData.map((task) => {
          if (task.id === action.taskId) {
            return { ...task, isCompleted: true };
          }

          return task;
        }),
      };
    }

    case UNCOMPLETE:{
      return {
        ...state,
       taskData: state.taskData.map((task) => {
          if (task.id === action.taskId) {
            return { ...task, isCompleted: false };
          }

          return task;
        }),
      };
    }

    case DELETE_TASK:{

     let taskDataMod = state.taskData.map( task =>{
        if (task.id === action.taskId) {
          
          return delete {...task}; // удаляем объект по конкретному айдишнику. 
                                  //Но проблема в том что вместо удаленного объекта появляется значение true и в разметке исчезает только текст, а сама форма остается 
        }

        return task;
      } ) // Удаляем объект(по id) из массива. Но вместо него появляется true значение, поэтому мы затем фильтруем модифицированный массив

      return{
        ...state,
        taskData: taskDataMod.filter( item => item!==true ) // Удаление true элементов из массива
        // Мы здесь не спрэдаем новый массив([...arr]), так как filter возвращает уже новый массив
      }
    }

    default: return state
  }
};

export let updateTitleAC = (newTitle) => {
  return { type: UPDATE_TITLE, newTitle };
};

export let updateDescriptionAC = (newDescription) => {
  return { type: UPDATE_DESCRIPTION, newDescription };
};

export let addNewTaskAC = () =>{
  return {type: ADD_NEW_TASK}
}

export let CompleteAC = (taskId) =>{
  return {type: COMPLETE, taskId}
}

export let UncompleteAC = (taskId) =>{
  return {type: UNCOMPLETE, taskId}
}

export let deleteTaskAC = (taskId) =>{
  return {type: DELETE_TASK, taskId}
}

export default toDoReducer;