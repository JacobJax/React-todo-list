import { useState } from 'react'
import './Todolist.css';
import AddForm from './Addform'
import Todoitem from './Todoitem'

const Todolist = ({ initialTasks }) => {

    const [tasks, setTasks] = useState(initialTasks)

    const handleDblClick = (id) => {

        const newTasks = tasks.map(task => {
            if(task.id === id){
                return {...task, completed: true}
            }
            return task
        })
        setTasks(newTasks)
    }

    const addTask = (taskName) => {

        const rId = `task${Math.random() * 100}`
        const newTasks = [...tasks, {id: rId, name: taskName, completed: false}]

        setTasks(newTasks)
    }

    const deleteTask = (taskId) => {
        const newTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(newTasks)
    }

    return (
        <div className="TodoList">
            <div id="todo-header">
                <h1>React Todo List</h1>
            </div>
            <AddForm addTask={addTask}/>
            { tasks.length === 0 ? <h3>No todos yet 📄</h3> : tasks.map(task=> (<Todoitem 
                key={task.id} 
                id={task.id} 
                name={task.name} 
                completed={task.completed} 
                handleDblClick={handleDblClick} 
                deleteTask={deleteTask}
            />)) }
        </div>
    );
}
 
export default Todolist;