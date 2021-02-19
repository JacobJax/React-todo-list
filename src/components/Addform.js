import { useState } from 'react'
import './Addform.css'

const AddForm = ({addTask}) => {

    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(value)
    }

    return (
        <div className="addForm">
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" onChange={handleChange}/>
                <input type="submit" value="Add todo"/>
            </form>
        </div>
    );
}
 
export default AddForm;