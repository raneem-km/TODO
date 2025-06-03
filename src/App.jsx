import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import AddTodo from "./AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [userId, setUserId] = useState(null); // null = not signed in

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.todos))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <Router>
      <Navbar userId={userId} />
      <Routes>
        <Route path="/" element={<SignIn setUserId={setUserId} />} />
        <Route path="/home" element={<HomePage todos={todos} setTodos={setTodos} userId={userId} />} />
        <Route path="/add" element={<AddTodo setTodos={setTodos} userId={userId} />} />
      </Routes>
    </Router>
  );
}

export default App;
