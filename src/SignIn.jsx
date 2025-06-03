import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setUserId }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!input.trim()) return;
    setUserId(parseInt(input));
    navigate("/"); // redirect to landing page after sign in
  };

  return (
    <div style={styles.container}>
      <h1><b>Enter User ID </b></h1>
      <input
        type="number+string" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="User ID"
        style={styles.input}
      />
      <button onClick={handleSignIn} style={styles.button}>Sign In</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#fff',
    padding: '50px',
    textAlign: 'center',
    minHeight: '100vh',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #444',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    width: '200px',
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

export default SignIn;
