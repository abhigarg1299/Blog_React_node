import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

import Register from './pages/register/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/posts/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
