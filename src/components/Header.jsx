import "../styles/Header.css";

export default function Header() {
  return (
    <header className="fb-header">
      <div className="left">
        <button className="back-btn">←</button>
        <h2 className="profile-name">Niezel Mae Diego</h2>
      </div>
      <div className="right">
        <button className="icon-btn">🔍</button>
        <button className="icon-btn">☰</button>
      </div>
    </header>
  );
}
