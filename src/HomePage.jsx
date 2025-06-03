import React from 'react';

const HomePage = ({ todos = [], setTodos }) => {
  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  const completedTodos = todos.filter(todo => todo.completed);
  const incompleteTodos = todos.filter(todo => !todo.completed);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.appTitle}>My To-Do List</h1>
        <p style={styles.date}>{formattedDate}</p>
      </header>

      <div style={styles.taskListContainer}>
        {todos.length === 0 ? (
          <p style={styles.emptyState}>You're all caught up! Time to relax or add new tasks.</p>
        ) : (
          <>
            {incompleteTodos.length > 0 && (
              <>
                <h2 style={styles.sectionTitle}>Things To Do</h2>
                {incompleteTodos.map(todo => (
                  <div key={todo.id} style={styles.todoItem}>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleComplete(todo.id)}
                      style={styles.checkbox}
                    />
                    <span style={styles.todoText}>{todo.todo}</span>
                    <button onClick={() => handleDeleteTodo(todo.id)} style={styles.deleteButton}>
                      &#x2715;
                    </button>
                  </div>
                ))}
              </>
            )}

            {completedTodos.length > 0 && (
              <>
                <h2 style={styles.sectionTitle}>Completed Tasks ({completedTodos.length})</h2>
                {completedTodos.map(todo => (
                  <div key={todo.id} style={{ ...styles.todoItem, ...styles.completedTodoItem }}>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleComplete(todo.id)}
                      style={styles.checkbox}
                    />
                    <span style={{ ...styles.todoText, textDecoration: 'line-through', color: '#999' }}>
                      {todo.todo}
                    </span>
                    <button onClick={() => handleDeleteTodo(todo.id)} style={styles.deleteButton}>
                      &#x2715;
                    </button>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    maxWidth: '600px',
    margin: '40px auto',
    padding: '25px',
    backgroundColor: '#121212',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.8)',
    color: '#e0e0e0',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    paddingBottom: '15px',
    borderBottom: '1px solid #333',
  },
  appTitle: {
    fontSize: '2.5em',
    color: '#bb86fc',
    margin: 0,
  },
  date: {
    fontSize: '1.1em',
    color: '#888',
    marginTop: '5px',
  },
  taskListContainer: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '1.8em',
    color: '#bb86fc',
    borderBottom: '1px solid #444',
    paddingBottom: '8px',
    marginBottom: '15px',
  },
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    marginBottom: '10px',
    padding: '12px 15px',
    borderRadius: '8px',
  },
  completedTodoItem: {
    backgroundColor: '#2a2a2a',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    marginRight: '15px',
    cursor: 'pointer',
  },
  todoText: {
    flexGrow: 1,
    fontSize: '1.1em',
  },
  deleteButton: {
    background: 'transparent',
    border: 'none',
    color: '#ff6b6b',
    fontSize: '1.3em',
    cursor: 'pointer',
    padding: '0 5px',
    lineHeight: '1',
  },
  emptyState: {
    textAlign: 'center',
    fontSize: '1.3em',
    color: '#999',
    marginTop: '60px',
  },
};

export default HomePage;

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
