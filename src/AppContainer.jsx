import { connect } from "react-redux";
import App from "./App";
import { CompleteAC, UncompleteAC, addNewTaskAC, deleteTaskAC, updateDescriptionAC, updateTitleAC } from "./redux/toDoReducer";

const mapStateToProps = (state)=>{
    return{
        taskTitle: state.toDoApp.taskTitle,
        taskDescription: state.toDoApp.taskDescription,
        taskData: state.toDoApp.taskData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        // updateText: (newText)=> dispatch( updateTextAC(newText) ),
        updateTitleText: (newTitle) => dispatch( updateTitleAC(newTitle) ),
        updateDescriptionText: (newDescription) => dispatch( updateDescriptionAC(newDescription) ),
        addNewTask: (time) => dispatch( addNewTaskAC(time) ),
        complete: (taskId) => dispatch( CompleteAC(taskId) ),
        uncomplete: (taskId) => dispatch( UncompleteAC(taskId) ),
        deleteTask: (taskId) => dispatch( deleteTaskAC(taskId) ) 
    }
}



const AppContainer = connect(mapStateToProps, mapDispatchToProps )(App)

export default AppContainer