
const UPDATE_TEXT = 'UPDATE-TEXT ';
const ADD_NEW_TASK = 'ADD-NEW-TASK';

const initialState = {
  TaskText: 'tomorrow buy milk',
  newTaskText: []
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
      return{
        ...state,
        
      }
    }

    default: return state
  }
};

export let updateTextAC = (newText) => {
  return { type: UPDATE_TEXT, newText };
};


export default toDoReducer;