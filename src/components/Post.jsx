import "../styles/Post.css";

export default function Post({ user, avatar, text, image }) {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={avatar} alt="avatar" />
        <span className="post-user">{user}</span>
      </div>
      <p className="post-text">{text}</p>
      {image && <img className="post-img" src={image} alt="post" />}
    </div>
  );
}
