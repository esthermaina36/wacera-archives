import "./SongCard.css";

function SongCard({ title, artist, month, note }) {
  return (
    <article className="song-card">
      <div className="song-icon">
        🎵
      </div>

      <div className="song-info">
        <h3>{title}</h3>

        <p className="song-artist">{artist}</p>

        {month && <p className="song-month">{month}</p>}

        {note && <p className="song-note">{note}</p>}
      </div>
    </article>
  );
}

export default SongCard;