import SongCard from "./SongCard";
import "./SongSection.css";

function SongSection({ title, songs }) {
  return (
    <section className="song-section">
      <h2>{title}</h2>

      <div className="song-list">
        {songs.map((song, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            month={song.month}
            note={song.note}
          />
        ))}
      </div>
    </section>
  );
}

export default SongSection;