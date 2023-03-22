import { connect } from "react-redux";
import App from "./App";
import { updateTextAC } from "./redux/toDoReducer";

const mapStateToProps = (state)=>{
    return{
        TaskText: state.toDoApp.TaskText
    }
}



const AppContainer = connect(mapStateToProps, { updateText: (newText)=>updateTextAC(newText) } )(App)

export default AppContainer