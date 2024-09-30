import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useAuthenticator } from "@aws-amplify/ui-react";
import './Menu.css';

const Menu = () => {
  const [user, setUser] = useState(null);

  const { signOut } = useAuthenticator((context) => [context.user]);
  
  return (
    <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <button onClick={signOut}>Sign Out</button>
            </li>
          </ul>
        </nav>
  );
};

export default Menu;
