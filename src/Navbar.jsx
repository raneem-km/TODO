

import { Link } from 'react-router-dom';

const navStyle = {
  backgroundColor: '#1f1f1f',
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#bb86fc',
  boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
};

const linkStyle = {
  color: '#bb86fc',
  textDecoration: 'none',
  marginLeft: '15px',
  fontWeight: 'bold',
};

const Navbar = ({ userId }) => {
  return (
    <nav style={navStyle}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <b> <h1>  To-Do  🎯</h1> </b>
      </div>
      <div>
        {userId ? (
          <>
            <Link to="/" style={linkStyle}></Link>
            <Link to="/home" style={linkStyle}>Home</Link>
            <Link to="/add" style={linkStyle}>Add Task</Link>
          </>
        ) : (
          <Link to="/signin" style={linkStyle}>Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
