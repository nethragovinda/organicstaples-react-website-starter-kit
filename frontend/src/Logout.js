import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';

const Logout = () => {
  const { setIsLoggedIn, setUsername } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/logout');
      setIsLoggedIn(false);
      setUsername('');
      history.push('/'); // Redirect to the landing page after logout
    } catch (error) {
      console.error(error.response.data);
      // Handle logout error here...
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
