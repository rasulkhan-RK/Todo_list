import { useState } from "react";
import { useTodo } from "../Contexts";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, complete: false });
    setTodo("");
  };

  return (
    <>
      <div
        style={{
          width: "60%",
          margin: "5% auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <form onSubmit={add} className="input-group">
          <input
            style={{
              padding: "15px 10px",
            }}
            type="text"
            className="form-control"
            placeholder="Write Todo"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn btn-success" type="submit" id="button-addon2">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
