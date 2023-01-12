import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import TodoList from './screens/TodoList';
import Login from './screens/Login';
//import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/to-do" element={<TodoList />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
/*
const routing = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/to-do" element={<TodoList />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);*/
/*
ReactDOM.render(
  routing,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
