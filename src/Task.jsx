import s from './Task.module.css'

import DoneIconCompleted from './assets/iconmonstr-check-mark-multiple-lined-48.png'
import DoneIconUncompleted from './assets/iconmonstr-check-mark-multiple-lined (1).svg'
import DeleteIcon from './assets/iconmonstr-x-mark-circle-filled-48.png'

const Task = (props)=>{

    let completeCaller = () =>{
        props.complete( props.taskId )
    }

    let uncompleteCaller = () =>{
        props.uncomplete( props.taskId )
    }
debugger
    return(
        
            <div className={s.task}>

                <div className={s.content}>
                    {/* <span> {props.date.time}  </span> */}
                    <h3 className={s.taskTitle}> {props.newTaskTitle} </h3>
                    <p> {props.newTaskDescription} </p>
                </div>

                <div className={s.controlls}> 
                {
                    props.completedStatus ? 
                    <button onClick={uncompleteCaller} type='button'> <img src={DoneIconUncompleted} alt="uncompleted" /> </button>
                    : <button onClick={completeCaller} type='button'> <img src={DoneIconCompleted} alt="completed" /> </button>
                }
                    

                    <button> <img src={DeleteIcon} alt="Delete" /> </button>
                </div>

            </div>
        
    )

    
}

export default Task