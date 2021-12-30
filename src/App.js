
import './App.css';
import { Provider } from 'react-redux'
import { store } from './features/store'
// import CounterComponent from './components/CounterComponent';
import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import TotalCompleteItems from "./components/Todos/TotalCompleteItems";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CounterComponent /> */}
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </Provider>
  );
}

export default App;
