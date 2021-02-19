import './Todoitem.css'

const Todoitem = ({id, name, completed, handleDblClick}) => {

    const handleClick = () => {
        handleDblClick(id)
    }

    return (
        <div className="todoitem" style={completed ? { borderLeft: '5px #000 solid' } : { borderLeft: 'none' }} onDoubleClick={handleClick}>
            <p style={completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{name}</p>
        </div>
    );
}
 
export default Todoitem;