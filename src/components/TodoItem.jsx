/* eslint-disable react/prop-types */
import { MdOutlineEditOff } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { useTodo } from "../Contexts";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const [isTodoComplete, setIsTodoComplete] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoComplete(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <>
      <div
        style={{
          width: "60%",
          margin: "5px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
        className={`${todo.complete ? "bg-pink-200" : "bg-gray-400"}`}
      >
        <form className="input-group ">
          <input
            style={{
              position: "absolute",
              zIndex: "10",
              border: "2px solid",
              margin: "20px 5px",
              cursor: "pointer",
            }}
            checked={todo.complete}
            onChange={toggleCompleted}
            className="form-check-input"
            type="checkbox"
            id="defaultCheck1"
          />

          <input
            style={{
              padding: "15px 10px",
              paddingLeft: "30px",
              fontSize: "16px",
              border: "1px solid",
            }}
            type="text"
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoComplete}
          />
          <button
            style={{
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={() => {
              if (todo.complete) return;
              if (isTodoComplete) {
                editTodo();
              } else setIsTodoComplete((prev) => !prev);
            }}
            disabled={todo.complete}
          >
            {isTodoComplete ? <FaRegSave /> : <MdOutlineEditOff />}
          </button>
          <button
            style={{
              fontSize: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="btn btn-danger"
            type="button"
            id="button-addon2"
            onClick={() => deleteTodo(todo.id)}
          >
            <TiDelete />
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoItem;
