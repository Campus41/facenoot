import { useEffect, useState } from "react";
import { getAlbums, getAlbum } from "../api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserAlbums = () => {
  const {userId} = useParams();
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbums = async(userId) => {
      const res = await getAlbums(userId);
      setAlbums(res)
    }

    fetchAlbums(userId)
  }, [userId]);

  const handleUserAlbum = (albumId) => {
    getAlbum(userId, albumId);
    navigate(`/users/${userId}/albums/${albumId}`);
  }
  
  return (
    <div>
      {
        albums.map( album => {
          return (
            <div 
              className="mt-2"
              key={album.id}
              onClick={() => handleUserAlbum(album.id)}
            >
              <p className="p-2 select">Title: {album.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default UserAlbums;