import "./PhotoCard.css";

function PhotoCard({ image, title, location, date }) {
  return (
    <div className="photo-card">
      <img
        src={image}
        alt={title || "Memory"}
        className="photo-image"
      />

      {(title || location || date) && (
        <div className="photo-overlay">
          {title && <h3>{title}</h3>}
          {location && <p>📍 {location}</p>}
          {date && <span>{date}</span>}
        </div>
      )}
    </div>
  );
}

export default PhotoCard;