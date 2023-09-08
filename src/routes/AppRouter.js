// src/routes/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from '../components/UsersList';
import UserDetails from '../components/UserDetails';
import UserPosts from '../components/UserDetails';

function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<UsersList />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/users/:userId/posts" element={<UserPosts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
