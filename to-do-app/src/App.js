import React from "react";
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter >
      <Nav />
     <Routes>
     <Route path="/" element={<TodoList />} />
       <Route path="/logout" element={<h1> Logout Component</h1>} />

       <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login />} />

     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
