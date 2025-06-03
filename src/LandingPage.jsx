import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Productivity Hub</h1>
      <p style={styles.subtitle}>Organize your tasks and boost your productivity.</p>
      <button style={styles.button} onClick={() => navigate('/home')}>
        Go to To-Do List
      </button>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    backgroundColor: '#121212',
    color: '#bb86fc',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '12px',
    marginTop: '50px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: '3em',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.3em',
    marginBottom: '40px',
    color: '#ddd',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.2em',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#bb86fc',
    color: '#121212',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default LandingPage;
