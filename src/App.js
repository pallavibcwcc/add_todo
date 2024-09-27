import { useState } from "react";

const App = () => {
  const [inputValue, SetInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const addtodo = () => {
    if (inputValue.trim() !== "") {
      const newtodo = {
        id: new Date().getTime(),
        text: inputValue,
      };
      setTodos([...todos, newtodo]);
      SetInputValue("");
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => SetInputValue(e.target.value)}
      />
      <button onClick={addtodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
