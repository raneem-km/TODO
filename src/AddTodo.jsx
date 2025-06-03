
import { orange } from '@mui/material/colors';
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
      <h2>Add New Task</h2>
      <input
        type="text"
        placeholder="Task description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={styles.input}
      />
     <button onClick={handleAdd} style={styles.button} color="orange">Add</button>


    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#121212',
    color: '#fff',
    padding: '50px',
    minHeight: '100vh',
    textAlign: 'center'
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
  }
};

export default AddTodo;
