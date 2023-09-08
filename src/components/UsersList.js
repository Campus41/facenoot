
import { useState, useEffect } from 'react'
import { getUsers, getUser, getAlbums, getPosts } from '../api/index'
import { useNavigate } from 'react-router-dom';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Define a function to handle user click
  const handleUserClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers();
        setUsers(res); // Update the users state with the fetched data
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData(); 
  }, [])

  return (
    <div>
      {users.map(user => 
        <div 
          key={user.id}
          onClick={() => handleUserClick(user.id)}
        >
          {user.name}
        </div>
      )}
    </div>
  )
}

export default UsersList