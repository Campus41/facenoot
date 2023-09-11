import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUser } from '../../api';

const UserDetails = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState({
    userData: [],
    postsData: [],
    albumsData: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser(userId);

      setUserDetails(data);
    };

    fetchData();
  }, [userId]);

  const handleUserPosts = () => {
    navigate(`/users/${userId}/posts`);
  }

  const handleUserAlbums = () => {
    navigate(`/users/${userId}/albums`);
  }

  return (
    <div>
      <div className='py-4'>
          <div>User name: {userDetails.userData.name}</div>
          <div>User email: {userDetails.userData.email}</div>
      </div>
      <div className='mb-3'>
        <h3>Posts</h3>
        <div 
          className="block"
          onClick={handleUserPosts} 
        >
          + {userDetails.postsData.length}
        </div>
      </div>
      <div>
        <h3>Albums</h3>
        <div 
          className="block"
          onClick={handleUserAlbums} 
        >
          + {userDetails.albumsData.length}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
