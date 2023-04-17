import s from './Task.module.css'

import DoneIcon from './assets/iconmonstr-check-mark-multiple-lined-48.png'
import DeleteIcon from './assets/iconmonstr-x-mark-circle-filled-48.png'

const Task = (props)=>{

    return(
        
            <div className={s.task}>

                <div className={s.content}>
                    {/* <span> {props.date.time}  </span> */}
                    <h3 className={s.taskTitle}>CodeClash</h3>
                    <p> {props.newTaskText} Follow for more amazing content </p>
                </div>

                <div className={s.controlls}> 
                    <button> <img src={DoneIcon} alt="Done" /> </button>
                    <button> <img src={DeleteIcon} alt="Delete" /> </button>
                </div>

            </div>
        
    )
}

export default Task