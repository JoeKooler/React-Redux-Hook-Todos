import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAction, editTodoAction } from "./Redux/TodoActions";

function TodoItem({ todo }) {
  const [editTodoValue, setEditTodoValue] = useState("");
  const [editPanelClassName, setEditPanelClassName] = useState(
    "EditPanel Hide"
  );
  const [pencilClassName, setPencilClassName] = useState(
    "fa fa-pencil ToggleEdit Hide"
  );
  console.log("Rendering TodoItem");
  const dispatch = useDispatch();
  const deleteTodo = (todoID) => dispatch(deleteTodoAction(todoID));
  const editTodo = (todoContent, todoID) => {
    if (todoContent !== "") {
      hideEditPanel();
      return dispatch(editTodoAction(todoContent, todoID));
    }
  };
  const setTodoHook = (event) => {
    setEditTodoValue(event.target.value);
  };

  const showPencil = () => {
    setPencilClassName("fa fa-pencil ToggleEdit");
  };

  const hidePencil = () => {
    setPencilClassName("fa fa-pencil ToggleEdit Hide");
  };

  const showEditPanel = () => {
    setEditPanelClassName("EditPanel");
  };

  const hideEditPanel = () => {
    setEditPanelClassName("EditPanel Hide");
  };

  return (
    <li key={todo.id} className="TodoList">
      <div
        className="TodoContent"
        onMouseEnter={showPencil}
        onMouseLeave={hidePencil}
      >
        <div className="TodoText">{todo.content}</div>
        <i className={pencilClassName} onClick={showEditPanel}></i>{" "}
        <form>
          <input
            className={editPanelClassName}
            value={editTodoValue}
            onChange={setTodoHook}
          ></input>
        </form>
      </div>
      <div className="TodoButtonsGroup">
        <button
          onClick={(e) => editTodo(editTodoValue, todo.id)}
          className="EditButton TheButton"
        >
          EDIT
        </button>

        <button
          onClick={(e) => deleteTodo(todo.id)}
          className="DeleteButton TheButton"
        >
          X
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
