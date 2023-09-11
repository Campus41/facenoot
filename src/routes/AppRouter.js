import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { UsersList, UserDetails } from '../components/users/';
import { UserPosts, UserPost } from '../components/posts';
import { UserAlbums, UserAlbum } from '../components/albums';

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
