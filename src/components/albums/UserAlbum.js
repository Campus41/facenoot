import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbum } from "../../api";

const UserAlbum = () => {
  const { userId, albumId } = useParams();
  const [ album, setAlbum ] = useState([]);

  useEffect(() => {
    const fetchAlbum = async(userId, albumId) => {
      const res = await getAlbum(userId, albumId)
      setAlbum(res)
    }

    fetchAlbum(userId, albumId);
  }, [userId, albumId])

  return (
    <div>
      {
        album.map( (album) => 
        <div key={album.id}>
          <p className="p-4">Title: {album.title}</p>
          <img src={window.location.origin + '/logo512.png'} alt="logo" />
        </div>
        )
      }
    </div>
  )
};

export default UserAlbum;