import { useState, useEffect } from "react";

function Input({ setTodos, todos }) {
  const [form, setForm] = useState({ todo: "" });

  useEffect(() => {
    setForm({ todo: "" });
  }, [todos]);

  const onChangeTodo = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.todo === "") {
      return false;
    }
    setTodos([...todos, form]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div> Todo List </div>

        <label htmlFor="todo">
          <input
            name="todo"
            placeholder="Bir todo girin"
            onChange={onChangeTodo}
            value={form.todo}
          />
        </label>

        <div className="btn">
          <button >Add</button>
        </div>
      </form>
    </div>
  );
}

export default Input;
