import { useState, useEffect } from 'react'
import { getUsers } from '../api/index'
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState('asc');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const res = await getUsers(searchTerm, sortType);
      setUsers(res);
      setIsLoading(false);
    };

    fetchData(); 
  }, [searchTerm, sortType])

  const handleUserClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  const handleSort = () => {
    sortType === 'asc' ? setSortType('desc') : setSortType('asc')

    const fetchData = async () => {
      setIsLoading(true)
      const res = await getUsers(searchTerm, sortType);
      setUsers(res);
      setIsLoading(false);
    };

    fetchData(); 
  }

  const debouncedSearch = debounce(async (term) => {

    const fetchData = async () => {
      setIsLoading(true)
      const res = await getUsers(term);
      setUsers(res);
      setIsLoading(false);
    };

    fetchData(); 
  }, 300);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    debouncedSearch(value);
  };

  return (
    <div>
      <div className="input-group my-3">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className="form-control"
        />
        <button 
          type="btn" 
          className="btn btn-primary" 
          disabled={isLoading}
          onClick={handleSort}
        >
          {sortType}
        </button>
      </div>
      {!isLoading && users.map(user => 
        <div
          className='d-flex px-2 py-4 select'
          key={user.id}
          onClick={() => handleUserClick(user.id)}
        >
          {user.name}
        </div>
      )}
      {isLoading &&
        <div className="spinner-border text-info" role="status">
          <span className="sr-only"></span>
        </div>
      }
    </div>
  )
}

export default UsersList