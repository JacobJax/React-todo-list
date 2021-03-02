import { useState, useEffect } from 'react'
import './Todolist.css';
import AddForm from './Addform'
import Todoitem from './Todoitem'

const Todolist = () => {

    const [tasks, setTasks] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const handleDblClick = async (id) => {
        const task = await getSingleTask(id)
        
        const res = fetch(`https://my-json-server.typicode.com/JacobJax/json-server-API/todos${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...task, completed: true})
        })

        const newTasks = tasks.map(task => {
            if(task.id === id){
                return {...task, completed: true}
            }
            return task
        })
        setTasks(newTasks)
    }

    const addTask = async (taskName) => {

        const res = await fetch('https://my-json-server.typicode.com/JacobJax/json-server-API/todos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: taskName, completed: false})
        })
        
        const data = await res.json()
        setTasks([...tasks, data])
    }

    const deleteTask = async (taskId) => {

        const res = await fetch(`https://my-json-server.typicode.com/JacobJax/json-server-API/todos${taskId}`, {
            method: 'DELETE'
        })
        const newTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(newTasks)
    }

    const getTasks = async () => {

        const res = await fetch('https://my-json-server.typicode.com/JacobJax/json-server-API/todos')
        const data = await res.json()

        setTasks(data)
        setIsLoading(false)
    }

    const getSingleTask = async (id) => {
        const res = await fetch(`https://my-json-server.typicode.com/JacobJax/json-server-API/todos${id}`)
        return res.json()
    }

    useEffect(() => {getTasks()}, [])

    return (
        <div className="TodoList">

            <div id="todo-header">
                <h1>React Todo List</h1>
            </div>

            <AddForm addTask={addTask}/>

            {isLoading && <p style={{textAlign:'center'}}>Loading...</p>}
            {tasks && (tasks.length === 0 ? <h3>No todos yet 📄</h3> : tasks.map(task=> (<Todoitem 
                key={task.id} 
                id={task.id} 
                name={task.name} 
                completed={task.completed} 
                handleDblClick={handleDblClick} 
                deleteTask={deleteTask}
            />))) }
        </div>
    );
}
 
export default Todolist;

// ex-url
// http://localhost:8000/todos/