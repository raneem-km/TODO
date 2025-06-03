import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ todos = [], setTodos }) => {
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate();

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todoItem = {
      id: newId,
      todo: newTodo,
      completed: false,
      userId: 1,
    };
    setTodos([todoItem, ...todos]);
    setNewTodo('');
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const completedTodos = todos.filter(todo => todo.completed);
  const incompleteTodos = todos.filter(todo => !todo.completed);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>📝 My Todo List</h1>
        <p style={styles.date}>{today}</p>
        <div style={styles.addSection}>
          <input
            type="text"
            value={newTodo}
            placeholder="Add a new task..."
            onChange={(e) => setNewTodo(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleAddTodo} style={styles.button}>Add</button>
        </div>
      </header>

      <main>
        {todos.length === 0 ? (
          <p style={styles.empty}>No tasks. Add something!</p>
        ) : (
          <>
            {incompleteTodos.length > 0 && (
              <>
                <h2 style={styles.sectionTitle}>Pending</h2>
                {incompleteTodos.map(todo => (
                  <div key={todo.id} style={styles.todoCard}>
                    <div style={styles.todoContent}>
                      <p><strong>Description:</strong> {todo.todo}</p>
                      <p><strong>Status:</strong> Not Completed</p>
                      <p><strong>User ID:</strong> {todo.userId}</p>
                    </div>
                    <div style={styles.actions}>
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleComplete(todo.id)}
                      />
                      <button onClick={() => handleDeleteTodo(todo.id)}>❌</button>
                    </div>
                  </div>
                ))}
              </>
            )}

            {completedTodos.length > 0 && (
              <>
                <h2 style={styles.sectionTitle}>Completed</h2>
                {completedTodos.map(todo => (
                  <div key={todo.id} style={{ ...styles.todoCard, opacity: 0.7 }}>
                    <div style={styles.todoContent}>
                      <p><strong>Description:</strong> <s>{todo.todo}</s></p>
                      <p><strong>Status:</strong> Completed</p>
                      <p><strong>User ID:</strong> {todo.userId}</p>
                    </div>
                    <div style={styles.actions}>
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleComplete(todo.id)}
                      />
                      <button onClick={() => handleDeleteTodo(todo.id)}>❌</button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#121212',
    minHeight: '100vh',
    padding: '30px',
    color: '#f1f1f1',
    fontFamily: 'Segoe UI, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#bb86fc',
  },
  date: {
    color: '#aaa',
    marginBottom: '20px',
  },
  addSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  input: {
    padding: '10px 15px',
    width: '300px',
    borderRadius: '6px',
    border: '1px solid #444',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    fontSize: '1rem',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#bb86fc',
    color: '#121212',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  empty: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#888',
  },
  sectionTitle: {
    marginTop: '30px',
    fontSize: '1.5rem',
    borderBottom: '1px solid #333',
    paddingBottom: '10px',
  },
  todoCard: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#1f1f1f',
    padding: '15px',
    marginTop: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
  },
  todoContent: {
    lineHeight: '1.6',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
};

export default HomePage;



// import { useEffect, useState } from "react";

// function HomePage() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/todos")
//       .then((res) => res.json())
//       .then((data) => setTodos(data.todos))
//       .catch((error) => console.error("Error fetching todos:", error));
//   }, []);

//   return (
//     <div style={{ padding: "1rem" }}>
//       <h2>Todo Dashboard</h2>
//       <table border="1" cellPadding="8" cellSpacing="0">
//         <thead>
//           <tr>
//             <th>Description</th>
//             <th>Status</th>
//             <th>User ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos.map((todo) => (
//             <tr key={todo.id}>
//               <td>{todo.todo}</td>
//               <td>{todo.completed ? "Completed" : "Not Completed"}</td>
//               <td>{todo.userId}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default HomePage;
