import "../styles/Photos.css";

export default function Photos() {
  const photos = ["images/d.jpg", "images/b.jpg", "images/profile.jpg"];

  return (
    <section className="photos">
      <h3>Photos</h3>
      <div className="photo-grid">
        {photos.map((p, i) => (
          <img key={i} src={p} alt="photo" />
        ))}
      </div>
    </section>
  );
}
