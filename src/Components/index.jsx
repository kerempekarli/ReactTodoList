import React, {  useState } from "react";
import Input from "./input";
import TodoList from "./todolist";

function Index() {
  const [todos, setTodos] = useState([
    { todo: "JavaScript Öğren" },
    { todo: "React Öğren" }
  ]);

  // useEffect(() => {

  // }, [todos]);

  return (
    <div id="container">
      <Input setTodos={setTodos} todos={todos} />
      <TodoList list={todos}/>
    </div>
  );
}

export default Index;
