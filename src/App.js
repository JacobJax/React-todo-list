import './App.css';
import Todolist from './components/Todolist'

const todos = [
  {id: 1, name: "Clean house", completed: false},
  {id: 2, name: "Go shopping", completed: false},
  {id: 3, name: "Text ex", completed: true},
  {id: 4, name: "Copy assignment", completed: false}
]

function App() {
  return (
    <div className="App">
      <Todolist initialTasks={todos} />
    </div>
  );
}

export default App;
