import PhotoCard from "./PhotoCard";
import "./PhotoSection.css";

function PhotoSection({ title, photos }) {
  return (
    <section className="photo-section">
      <h2>{title}</h2>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <PhotoCard
            key={index}
            image={photo.image}
            title={photo.title}
            location={photo.location}
            date={photo.date}
          />
        ))}
      </div>
    </section>
  );
}

export default PhotoSection;