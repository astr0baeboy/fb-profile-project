import "../styles/Friends.css";

export default function Friends() {
  const friends = [
    { name: "Gracel Dinglasa", img: "images/gracel.jpg" },
    { name: "Mae Ann Bermas", img: "images/mae.jpg" },
  ];

  return (
    <section className="friends">
      <h3>Friends</h3>
      <div className="friend-grid">
        {friends.map((f, i) => (
          <div key={i} className="friend-card">
            <img src={f.img} alt={f.name} />
            <p>{f.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
