import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "https://mern-fullstack-crud-app-backend.onrender.com/api/v1/posts";

function Post({ post }) {
  const navigate = useNavigate();
  
  const handleEdit = () => {
    navigate(`/update-post/${post._id}`);
  };

  const handleDelete = async () => {
    await fetch(`${API_URL}/${post._id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <div className="post">
      <div className="post-title">{post.title}</div>
      <div className="post-content">{post.content}</div>
      <div className="post-actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Post;