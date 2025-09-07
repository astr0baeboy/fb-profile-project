import "../styles/ProfileHeader.css";

export default function ProfileHeader() {
  return (
    <section className="profile-header">
      <div className="cover">
        <img src="images/cover.jpg" alt="Cover" />
      </div>
      <div className="profile-row">
        <img className="profile-pic" src="images/profile.jpg" alt="Avatar" />
        <div className="profile-info">
          <h1 className="display-name">Niezel Mae Diego</h1>
          <div className="actions">
            <button className="btn">➕ Add to story</button>
            <button className="btn secondary">✏️ Edit profile</button>
          </div>
        </div>
      </div>
    </section>
  );
}
