import './App.css';
import TodoList from './Component/TodoList';

function App() {
  return (
    <div className="card">
      <div className="card_heading">
        <h1>ToDo</h1>
      </div>
      <div className="card_body">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
