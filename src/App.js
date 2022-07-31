import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './wrappers/PrivateRoute';
import UserSettings from './pages/UserSettings';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route index element={<Navigate to="tasks" />} />
          <Route path="login" element={<Login />} />
          <Route path="tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
          <Route path="settings" element={<PrivateRoute><UserSettings /></PrivateRoute>} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
