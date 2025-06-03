import { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import AddTodo from "./AddTodo";
import LandingPage from "./LandingPage";

// Auth protection wrapper
function RequireAuth({ userId, children }) {
  if (!userId) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}

function App() {
  const [todos, setTodos] = useState([]);
  const [userId, setUserId] = useState(null);

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
        {/* LandingPage is first if signed in, else redirect to SignIn */}
        <Route
          path="/"
          element={userId ? <LandingPage /> : <Navigate to="/signin" replace />}
        />

        {/* SignIn page, redirects to Landing if already signed in */}
        <Route
          path="/signin"
          element={userId ? <Navigate to="/" replace /> : <SignIn setUserId={setUserId} />}
        />

        {/* Home page - protected */}
        <Route
          path="/home"
          element={
            <RequireAuth userId={userId}>
              <HomePage todos={todos} setTodos={setTodos} userId={userId} />
            </RequireAuth>
          }
        />

        {/* Add Todo page - protected */}
        <Route
          path="/add"
          element={
            <RequireAuth userId={userId}>
              <AddTodo setTodos={setTodos} userId={userId} />
            </RequireAuth>
          }
        />

        {/* Redirect any unknown routes */}
        <Route
          path="*"
          element={<Navigate to={userId ? "/" : "/signin"} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
