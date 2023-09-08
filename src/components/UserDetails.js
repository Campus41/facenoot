import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUser } from '../api';

const UserDetails = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUser(userId);
        setUserDetails(res);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData(); 
  }, [userId])

  return (
    <div>
      {userDetails.name}
    </div>
  )
} 

export default UserDetails;