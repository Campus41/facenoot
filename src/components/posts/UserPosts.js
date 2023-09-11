import { useEffect, useState } from "react";
import { getPosts, getPost } from "../../api";
import { useParams, useNavigate } from 'react-router-dom';

const UserPosts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async(userId) => {
      const posts = await getPosts(userId)
      setPosts(posts)
    }
    fetchPosts(userId)
  }, [userId])

  const handleUserPost = (postId) => {
    getPost(userId, postId);
    navigate(`/users/${userId}/posts/${postId}`);
  }

  return (
    <div className="mt-2">
      {
        posts.map(post => 
          <div 
            key={post.id}
            onClick={() => handleUserPost(post.id)}
          >
            <p className="p-2 select">Title: {post.title}</p>
          </div>
        )
      }
    </div>
  )
}

export default UserPosts;