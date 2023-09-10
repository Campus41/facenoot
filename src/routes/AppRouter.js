// src/routes/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from '../components/UsersList';
import UserDetails from '../components/UserDetails';
import UserPosts from '../components/UserPosts';
import UserPost from '../components/UserPost';
import UserAlbums from '../components/UserAlbums';
import UserAlbum from '../components/UserAlbum';

function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<UsersList />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/users/:userId/posts" element={<UserPosts />} />
          <Route path="/users/:userId/posts/:postId" element={<UserPost />} />
          <Route path="/users/:userId/albums" element={<UserAlbums />} />
          <Route path="/users/:userId/albums/:albumId" element={<UserAlbum />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
