import s from './Task.module.css'

const Task = (props)=>{

    const deleteTaskCaller = () =>{
        
        const p = document.getElementById('paragraph')
        console.log(p.innerText)
        props.deleteTask(p.innerText)
    }

    return(
        <div className={s.tasksWrap}>
            <div className={s.task}>
                <div className={s.content}>
                    <span> {props.date.time}  </span>
                    <p id='paragraph'> {props.newTaskText} </p>
                </div>
                <div className={s.controlls}> 
                <button onClick={deleteTaskCaller}> Delete </button>
                </div>
            </div>
        </div>
    )
}

export default Task