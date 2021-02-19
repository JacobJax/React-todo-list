import './Todoitem.css'

const Todoitem = ({id, name, completed, handleDblClick, deleteTask}) => {

    const handleClick = () => {
        handleDblClick(id)
    }

    const handleDelete = () => {
        deleteTask(id)
    }

    return (
        <div className="todoitem" style={completed ? { borderLeft: '5px #000 solid' } : { borderLeft: 'none' }} onDoubleClick={handleClick}>
            <p style={completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} disabled={completed}>{name}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
 
export default Todoitem;