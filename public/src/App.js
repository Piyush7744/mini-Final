import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './pages/Register';
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import SetAvatar from './pages/SetAvatar';
import Project from './pages/Project';
import { logtoggle } from './contexts/logtoggle';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <logtoggle.Provider value={{loggedIn, setLoggedIn}}>

    <BrowserRouter>
    <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        <Route path = "/project" element = {<Project />} />
    </Routes>
    </BrowserRouter>
    </logtoggle.Provider>

  )
}
