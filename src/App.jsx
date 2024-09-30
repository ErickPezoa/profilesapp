import { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu'; 
import Dashboard from './components/Dashboard';
import Profile from './components/Profile'; 
import Settings from './components/Settings';
import './App.css';

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {

  useEffect(() => {
   
  }, []);


  return (
  <Router>
	  <Menu />
	  <div className="App">
		  <Routes>
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/settings" element={<Settings />} />
			{/* Wildcard route */}
			<Route path="*" element={<Dashboard />} />
		  </Routes>
	  </div>
    </Router>
  );
}