import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTodo = ({ setTodos, userId }) => {
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!desc.trim()) return;
    const newItem = {
      id: Date.now(),
      todo: desc,
      completed: false,
      userId: userId,
    };
    setTodos(prev => [newItem, ...prev]);
    setDesc('');
    navigate("/home");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.appTitle}>Add New Task 📝</h1>
      <input
        type="text"
        placeholder="Add a new task..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        style={styles.input}
      />
      <br />
      <button onClick={handleAdd} style={styles.button}>
        Add Task
      </button>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#121212',
    color: '#fff',
    padding: '50px',
    minHeight: '100vh',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #444',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    width: '250px',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#bb86fc',
    border: 'none',
    color: '#121212',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  appTitle: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#bb86fc',
  },
};

export default AddTodo;
