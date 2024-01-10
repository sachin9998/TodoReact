import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css"

const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={`${styles.items} container`}>
        {todoItems.map((item) => (
          <ToDoItem key={item} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}></ToDoItem>
        ))}
      </div>
    </>
  );
};

export default ToDoItems;
