import { useState } from 'react'
import './Addform.css'

const AddForm = ({addTask}) => {

    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!value){
            alert('Please enter a task')
            return
        }
        
        addTask(value)
        setValue('')
    }

    return (
        <div className="addForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" style={{color: '#fff'}}>Add Task</label>
                <input type="text" name="todo" value={value} onChange={handleChange}/>
                <input type="submit" value="Add todo"/>
            </form>
        </div>
    );
}
 
export default AddForm;