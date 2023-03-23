import s from './Task.module.css'

const Task = (props)=>{
    return(
        <div className={s.tasksWrap}>
            <div className={s.task}>
                <div className={s.content}>
                    <span> {props.date.time}  </span>
                    <p> {props.newTaskText} </p>
                </div>
                <div className={s.controlls}> <button> Delete </button> </div>
            </div>
        </div>
    )
}

export default Task