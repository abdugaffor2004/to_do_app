import { connect } from "react-redux";
import App from "./App";
import { addNewTaskAC, updateTextAC } from "./redux/toDoReducer";

const mapStateToProps = (state)=>{
    return{
        TaskText: state.toDoApp.TaskText,
        taskData: state.toDoApp.taskData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        updateText: (newText)=> dispatch( updateTextAC(newText) ),
        addNewTask: (time) => dispatch( addNewTaskAC(time) ) 
    }
}



const AppContainer = connect(mapStateToProps, mapDispatchToProps )(App)

export default AppContainer