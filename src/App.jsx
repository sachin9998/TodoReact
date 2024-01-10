import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // Use State
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} & Due date: ${itemDueDate}`);

    const newToDoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];

    setTodoItems(newToDoItems);
  };

  // Delete item
  const handleDeleteItem = (todoItemName) => {

    const newToDoItems = todoItems.filter(item => item.name != todoItemName);

    setTodoItems(newToDoItems);

  }

  const initialTodoItems = [];


  return (
    <center className="todo-container">
      <AppName />

      <AddToDo onNewItem={handleNewItem} />

      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}

      <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></ToDoItems>
    </center>
  );
}

export default App;
