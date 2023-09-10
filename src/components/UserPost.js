import { useParams } from "react-router-dom";
import { getPost } from "../api";
import { useState, useEffect } from "react";

const UserPost = () => {
  const [post, setPost] = useState([]);
  const { userId, postId } = useParams();

  useEffect(() => {
    const fetchPost = async(userId, postId) => {
      const res = await getPost(userId, postId);

      setPost(res)
    }

    fetchPost(userId, postId);
  }, [userId, postId, setPost])

  return (
    <div>
      {
        post.map( item => 
          <div key={item.id}>
            <p className="p-2">Title: {item.title}</p>
            <p className="p-2">Description: {item.body}</p>
          </div>
        )
      }
    </div>
  )
}

export default UserPost;